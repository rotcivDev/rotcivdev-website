import React from 'react';

import ReturnButton from '../components/button.component';
import profilePhoto from '../assets/img/eu_lis.jpg';

function ProfilePage() {
  return<section className='profile'>
    <header className='profile__header'>
      <h1 className='title'>Developer Sheet</h1>
    </header>

    <nav className='profile__nav'>
      <div className="profile__photo">
        <img src={profilePhoto} alt="" />
        <h2 className='subtitle'>Victor Salles</h2>
      </div>
      <ul className='link-list'>
        <p className='link-list__title'>Projects List</p>
        <li>
          <a 
            href="https://rotcivdev-weather.herokuapp.com/"
            className="u-underline-onhover"
          >
            getWeather
          </a>
        </li>
      </ul>
    </nav>

    <main className='profile__main'>
      Under construction ...
      <ReturnButton title='Return' linkUrl='/' className='profile__return-button'/>
    </main>

    <footer className='profile__footer'>
     <a href="https://www.linkedin.com/in/victor-almeida-4a9032141/">LinkedIn</a>
     <a href="https://github.com/rotcivDev/rotcivdev-website">Github</a>
     <a href="mailto:vsallesa@gmail.com">Email</a>
    </footer>
  </section>;
}

export default ProfilePage;
