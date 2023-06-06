import React from 'react';
import './cards.css';

function Cards() {
  return (
    <div>
    <div className='cards'>
      <div className='wath1'>
        <img src="/images/wathaequi logo 001.png" alt="Logo" className="logo" />
        <div className='card__content'>
          <h2>Welcome to Wathaequi</h2>
           <br/>
          <p className='card__text'>“Wathaequi“ est une le premier site algerien<br/>des services en ligne pour faciliter les interactions <br/> entre les citoyens et l’administration publique.</p>
        </div>
      </div>
    </div>
    <div className='cards1'>
    <div className='wath2'>
      <div className='image-container'>
        <img src="/images/raw.jpg" alt="img1" className="img1" />
        <div className='image-heading'>
          <h1 className='obj1'>Nos Objectifs:</h1>
          <br/><br/>
          <h3 className='hh'>"Accès facile et pratique aux services gouvernementaux<br/>
              - Simplifiez votre vie avec Wathaequi"</h3>
        </div>
        </div>
        <div className='card__content2'>
          <h2 className='titre'>A propos de Wathaequi</h2>
           <br/>
          <p className='card__text2'>Notre plateforme e-gouvernement a été créée dans le but de faciliter l'accès aux services administratifs
 pour les citoyens. Nous sommes déterminés à réduire les coûts et les délais de traitement des
 transactions administratives en offrant une expérience utilisateur pratique et efficace. 

 </p>
        </div>

        <div className='card__content2'>
          <h2 className='titre'>Notre Equipe</h2>
           <br/>
          <p className='card__text2'>Notre équipe est composée de professionnels de l'informatique et du service public, qui travaillent ensemble pour créer une plateforme sécurisée et conviviale. Nous sommes fiers de fournir des services en ligne pour les demandes de documents administratifs tels que les actes de naissance, les certificats de mariage, les passeports, les cartes d'identité et permis de conduire.

 </p>
        </div>
      </div>
    </div>



    <div className='cards1'>
    <div className='wath2'>
       
        <div className='card__content2'>
          <h2 className='titre'>Contactez-nous</h2>
           <br/>
          <p className='card__text2'>Pour toute question ou préoccupation concernant la plateforme e-gouvernement,
 n'hésitez pas à nous contacter par l'un des moyens suivants : <br/><br/>

Par téléphone : 041526897
<br/>
Par courriel :  Wathaequi@gmail.com
<br/><br/>
Nous sommes disponibles pour répondre à vos questions et vous aider à utiliser notre plateforme efficacement.
<br/>
 </p>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Cards;
