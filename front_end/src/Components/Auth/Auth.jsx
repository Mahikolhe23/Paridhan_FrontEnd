import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faTwitterSquare,faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons' ;
import log from '../../images/log.svg';
import play from '../../images/play.svg';
import './Auth.css';

const Auth =()=>{
   const sign_in_btn=document.querySelector('#sign-in-btn');
   const sign_up_btn=document.querySelector('#sign-up-btn');
   const container=document.querySelector(".container");

   sign_up_btn.addEventListener('click',()=>{
      container.classList.add("sign-up-mode");
   });
   sign_in_btn.addEventListener('click',()=>{
      container.classList.remove("sign-up-mode");
   });
    return(
         <div className='container'>
            <div className='forms-container'>
               <div className="sigin-signup">
                  <form action="" className="action sign-in-form">
                     <h2 className="title">Sign In</h2>
                     <div className="input-field">
                          <span className='i'><FontAwesomeIcon icon={faUser} /></span>
                           <input type="text" placeholder='Username' />
                     </div>
                     <div className="input-field">
                           <span className='i'><FontAwesomeIcon icon={faLock}/></span>
                           <input type="password" placeholder='Password' />
                     </div>
                     <input type="submit" value="login" className="btn solid" />
                     <p className="social-text">Or Sign in with social platform</p>
                     <div className="social-media">
                        <span className='social-icon'><FontAwesomeIcon icon={faFacebookF} className='icon'/></span>
                       <span className='social-icon'><FontAwesomeIcon icon={faLinkedin} className='icon'/></span>
                        <span className="social-icon"><FontAwesomeIcon icon={ faTwitterSquare} className='icon' /></span>
                        <span className='social-icon'> <FontAwesomeIcon icon={faGoogle} className='icon'/></span>
                     </div>
                  </form>
                  <form action="" className="action sign-up-form">
                     <h2 className="title">Sign Up</h2>
                     <div className="input-field">
                          <span className='i'><FontAwesomeIcon icon={faUser} /></span>
                          <input type="text" placeholder='Username' />
                     </div>
                     <div className="input-field">
                          <span className='i'><FontAwesomeIcon icon={faEnvelope} /></span>
                          <input type="email" placeholder='Email' />
                     </div>
                     <div className="input-field">
                           <span className='i'><FontAwesomeIcon icon={faLock}/></span>
                           <input type="password" placeholder='Password' />
                     </div>
                  <input type="submit" value="SignUp" className="btn solid" />
                     <p className="social-text">Or Sign in with social platform</p>
                  <div className="social-media">
                        <span className='social-icon'><FontAwesomeIcon icon={faFacebookF} className='icon'/></span>
                       <span className='social-icon'><FontAwesomeIcon icon={faLinkedin} className='icon'/></span>
                        <span className="social-icon"><FontAwesomeIcon icon={ faTwitterSquare} className='icon' /></span>
                        <span className='social-icon'> <FontAwesomeIcon icon={faGoogle} className='icon'/></span>
                     </div>
                  </form>
               </div>
            </div>
         
            <div className="panels-container">
                 <div className="panel left-panel">
                  <div className="content">
                      <h3>New here ?</h3>
                      <p>Explore the new fashion trends customize your dream dresses with dream authentity</p>
                      <button className="btn transparent" id="sign-up-btn">Sign up</button>
                  </div>
                  <img src={log} alt="" className='image'/>
                 </div>
                 <div className="panel right-panel">
                  <div className="content">
                      <h3>One of us ?</h3>
                      <p>Explore the new fashion trends customize your dream dresses with dream authentity</p>
                      <button className="btn transparent" id="sign-in-btn">Sign in</button>
                  </div>
                  <img src={play} alt="" className='image'/>
                 </div>
            </div>
         
         </div>
    );
}

export default Auth;