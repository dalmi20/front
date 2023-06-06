import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Wathaequi
        </p>
        <p className='footer-subscription-text'>
        Pour accéder à nos services en ligne, 
        veuillez vous connecter à votre compte
        </p>
        <div className='input-areas'>
         <Link to="/sign-up" className="foot-links" >
             Se connecter
            </Link>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>A propos de nous</h2>
            <Link to='/sign-up'>Wathaequi</Link>
            <Link to='/'>Comment ça marche</Link>
            <Link to='/'>Notre équipe</Link>
            <Link to='/'>Politique de confidentialité</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactez nous</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Wathaequi application</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Forum</Link>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Réseaux sociaux</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          <div className='footer-link-wrapper'>
        
      
      </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class="down">
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="/images/wathaequi logo 009.png" alt="Logo" className="logo" />
            </Link>
          </div>
          <small class='website-rights'>Wathaequi © 2023</small>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
       
            <Link class='social-icon-link playstore'
              to='/'
              target='_blank'
              aria-label='PlayStore'>
                <i class='fab fa-google-play' />
            </Link>
            <Link class='social-icon-link appstore'
              to='/'
              target='_blank'
              aria-label='AppStore'>
                <i class='fab fa-app-store' />

            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;