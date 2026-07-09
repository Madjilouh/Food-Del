import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum est un texte factice standard, utilisé dans l'imprimerie et le webdesign pour calibrer des mises en page, simuler du contenu avant la version finale et se concentrer sur le graphisme plutôt que le texte</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+221-77-267-63-91</li>
                    <li>mail@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2026 © Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
