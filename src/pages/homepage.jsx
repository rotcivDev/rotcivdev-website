import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../components/button.component';

function HomePage() {
  return(
    <div className="homepage u-center-text">
      <header>
        <h1 className='homepage__title'>
            rotcivDev's Coding Adventures
          <span className='homepage__title--main' />
        </h1>
      </header>

      <main>
        <div className='homepage__slide-show' />
      </main>

      <section className='homepage__enter-button-container'>
        <Button 
          linkUrl='profile' 
          title='Enter'
          className='homepage__enter-button'
        />
      </section>

      <footer className="homepage__footer">
        <a
          className='homepage__footer--link u-underline-onhover' 
          href="https://www.github.com/rotcivdev"
        >
          github: rotcivDev
        </a>
        
        <h5 className='homepage__footer--message'>
          Development with  
          <span 
            role="img" 
            className='homepage__footer--message-heart'
            aria-label='heart emoji'
          >
            ♥️
          </span> 
            to improve life!
        </h5> 
      </footer>
    </div>
  );
}
  
export default withRouter(HomePage);
