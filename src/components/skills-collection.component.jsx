import React from 'react';
import { adventurers } from '../data/adventurers';

export default function SkillsCollection() {
  const collection = adventurers;

  return(
    <section className='adventures-collection'>
      {collection.map(({id, name, role, profession, race,icon}) => {
        return(
        <div key={id} className='adventures-collection__card'>
          <img src={icon} className='adventures-collection__card--image' />
          <ul className='adventures-collection__card--atributes'>
            <h5>nome: <span>{name}</span></h5>
            <h5>{race}</h5>
            <h5>{role}</h5>
            <h5>{profession}</h5>
          </ul>       
        </div>
        );
      })}
    </section>
  );
};
