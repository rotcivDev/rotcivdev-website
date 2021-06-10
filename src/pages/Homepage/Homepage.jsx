import React from 'react';
import Button from '../../components/button.component';

function HomePage() {
  return(
    <div className="homepage u-center-text" data-testid="homepageContainer">
      <header className='homepage__title--container' data-testid="header">
        <h1 className="title">
            rotcivDev's Coding Adventures
        </h1>
      </header>

      <main data-testid="main">
        <div className='homepage__slide-show' />
      </main>

      <section className='homepage__enter-button-container'>
        <Button 
          linkUrl='profile' 
          title='Enter'
          className='homepage__enter-button'
          data-testid="enterbutton"
        ></Button>
      </section>

      <footer className="homepage__footer" data-testid="footer">
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
  
export default (HomePage);
