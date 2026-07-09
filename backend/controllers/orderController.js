import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
console.log("Clé Stripe:", process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const frontend_url = "http://localhost:5174";

// place order using stripe
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    });
    await newOrder.save();

    // clear user's cart after placing order
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges"
        },
        unit_amount: 2 * 100
      },
      quantity: 1
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur lors de la création de la commande" });
  }
};

// verify order after stripe payment
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paiement confirmé" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Paiement échoué" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur lors de la vérification" });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur" });
  }
};

// list all orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur" });
  }
};

// update order status from admin panel
const updateStatus = async (req, res) => {
  try {
    console.log("orderId:", req.body.orderId, "status:", req.body.status);
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
    res.json({ success: true, message: "Statut mis à jour" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };