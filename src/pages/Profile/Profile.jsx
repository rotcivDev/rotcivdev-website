import React from "react";

import { Clock } from "../../components/Clock/Clock.component";
import ReturnButton from "../../components/button.component";
import profilePhoto from "../../assets/img/eu_lis.jpg";

function ProfilePage() {
  return (
    <section className="profile" data-testid="profileContainer">
      <header className="profile__header" data-testid="header">
        <h1 className="title">Developer Sheet</h1>
        <Clock />
      </header>

      <nav className="profile__nav" data-testid="profile">
        <div className="profile__photo">
          <img src={profilePhoto} alt="profilePhoto" />
          <h2 className="subtitle">Victor Salles</h2>
        </div>
        <ul className="link-list" data-testid="projectsList">
          <p className="link-list__title">Projects List</p>
          <li>
            <a
              href="https://crw-clothing-reactapp.web.app/"
              className="u-underline-onhover"
              target="__blank"
            >
              CRW Clothes Store
            </a>
          </li>

          <li>
            <a
              href="https://rotcivdev.github.io/robofriends/"
              className="u-underline-onhover"
              target="__blank"
            >
              Robofriends PWA
            </a>
          </li>
          <li>
            <a
              href="https://rotcivdev-weather.herokuapp.com/"
              className="u-underline-onhover"
              target="__blank"
            >
              getWeather
            </a>
          </li>
        </ul>
      </nav>

      <main className="profile__main" data-testid="main">
        <p>Father, RPG player, knowledge seeker.</p>
        <p>
          A passionate developer working to improve people's lives through
          technology.
        </p>
        <p>Under construction ...</p>
        <div className="u-self-centered">
          <ReturnButton
            title="Return"
            linkUrl="/"
            className="profile__return-button"
            data-testid="returnButton"
          />
        </div>
      </main>

      <footer className="profile__footer" data-testid="footer">
        <a
          className="u-underline-onhover"
          href="https://www.linkedin.com/in/victor-almeida-4a9032141/"
          target="__blank"
        >
          LinkedIn
        </a>
        <a
          className="u-underline-onhover"
          href="https://github.com/rotcivDev/rotcivdev-website"
          target="__blank"
        >
          Github
        </a>
        <a
          className="u-underline-onhover"
          href="mailto:vsallesa@gmail.com"
          target="__blank"
        >
          Email
        </a>
      </footer>
    </section>
  );
}

export default ProfilePage;
