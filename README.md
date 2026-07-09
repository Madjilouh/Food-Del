# 🍅 FOOD DEL

Plateforme de commande de nourriture en ligne complète, développée avec la stack MERN (MongoDB, Express, React, Node.js). Le projet comprend une application client, un panel d'administration, et une API REST sécurisée.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat&logo=stripe&logoColor=white)

## 📋 Sommaire

- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Architecture du projet](#-architecture-du-projet)
- [Installation](#-installation)
- [Variables d'environnement](#-variables-denvironnement)
- [Lancement du projet](#-lancement-du-projet)
- [API Endpoints](#-api-endpoints)
- [Auteur](#-auteur)

## ✨ Fonctionnalités

**Côté client**
- Parcours et filtrage des plats par catégorie
- Inscription / connexion avec authentification JWT
- Panier persistant lié au compte utilisateur
- Paiement en ligne sécurisé via Stripe Checkout
- Suivi des commandes passées

**Côté administration**
- Ajout, modification et suppression de plats (avec upload d'image)
- Visualisation de tous les produits du catalogue
- Suivi et mise à jour du statut des commandes en temps réel

**Backend / API**
- Authentification sécurisée par hash bcrypt + token JWT
- Upload d'images géré via Multer
- Intégration paiement Stripe (mode test)
- Base de données MongoDB Atlas via Mongoose

## 🛠 Stack technique

| Côté | Technologies |
|------|-------------|
| Frontend (client & admin) | React, Vite, React Router, Axios |
| Backend | Node.js, Express.js |
| Base de données | MongoDB (Mongoose) |
| Authentification | JWT, bcrypt |
| Paiement | Stripe |
| Upload de fichiers | Multer |

## 📁 Architecture du projet

```
FOOD DEL/
├── backend/               # API REST (Node.js / Express)
│   ├── config/            # Connexion MongoDB
│   ├── controllers/       # Logique métier (food, user, cart, order)
│   ├── middleware/        # Authentification JWT
│   ├── models/            # Schémas Mongoose
│   ├── routes/            # Routes de l'API
│   └── uploads/           # Images des produits
│
├── Frontend/               # Application client (React)
│   └── src/
│       ├── components/    # Composants réutilisables
│       ├── context/       # Contexte global (panier, auth)
│       └── pages/         # Pages (Home, Cart, PlaceOrder, MyOrders...)
│
└── admin/                  # Panel d'administration (React)
    └── src/
        ├── components/    # Navbar, Sidebar
        └── pages/         # Add, List, Orders
```

## ⚙️ Installation

Clonez le repository puis installez les dépendances de chaque partie du projet :

```bash
git clone https://github.com/Madjilouh/Food-Del.git
cd Food-Del

# Backend
cd backend
npm install

# Frontend client
cd ../Frontend
npm install

# Panel admin
cd ../admin
npm install
```

## 🔐 Variables d'environnement

Créez un fichier `.env` à la racine du dossier `backend/` avec les variables suivantes :

```env
MONGO_URI=votre_uri_mongodb_atlas
JWT_SECRET=votre_cle_secrete_jwt
STRIPE_SECRET_KEY=votre_cle_secrete_stripe
```

> ⚠️ Ce fichier ne doit jamais être versionné (déjà exclu via `.gitignore`).

## 🚀 Lancement du projet

Trois serveurs doivent tourner simultanément, chacun dans un terminal séparé :

```bash
# Terminal 1 — Backend (http://localhost:4000)
cd backend
npm run server

# Terminal 2 — Frontend client (http://localhost:5173)
cd Frontend
npm run dev

# Terminal 3 — Panel admin (http://localhost:5174)
cd admin
npm run dev
```

## 🔌 API Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/user/register` | Inscription utilisateur |
| POST | `/api/user/login` | Connexion utilisateur |
| POST | `/api/food/add` | Ajouter un produit *(admin)* |
| GET | `/api/food/list` | Lister tous les produits |
| POST | `/api/food/remove` | Supprimer un produit *(admin)* |
| POST | `/api/cart/add` | Ajouter au panier |
| POST | `/api/cart/remove` | Retirer du panier |
| POST | `/api/cart/get` | Récupérer le panier |
| POST | `/api/order/place` | Passer une commande (Stripe) |
| POST | `/api/order/verify` | Vérifier le paiement |
| POST | `/api/order/userorders` | Commandes d'un utilisateur |
| GET | `/api/order/list` | Toutes les commandes *(admin)* |
| POST | `/api/order/status` | Modifier le statut d'une commande *(admin)* |

## 👤 Auteur

**Madiou Sarr**
Étudiant en Licence 2 Ingénierie Informatique — Polytech Diamniadio (UAM)
[GitHub](https://github.com/Madjilouh)

---

Projet réalisé dans un cadre d'apprentissage personnel autour de la stack MERN, de l'authentification sécurisée, et de l'intégration de paiement en ligne.
