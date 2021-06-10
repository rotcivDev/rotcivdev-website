import React from 'react';
import { skillsData } from '../data/skills';

export default function SkillsCollection() {
  const collection = skillsData;

  return(
    <section className='adventures-collection'>
      {collection.map(({ name }, INDEX) => {
        return(
        <div key={INDEX}>
          <ul>
            <h5>nome: <span>{name}</span></h5>
          </ul>
        </div>
        );
      })}
    </section>
  );
};
