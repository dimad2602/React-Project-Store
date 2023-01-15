import React from 'react';
import config1 from '../assets/OurConfigs/gamePC.jpg';
import config2 from '../assets/OurConfigs/homePC.jpg';
import config3 from '../assets/OurConfigs/offisePC.jpg';
import config4 from '../assets/OurConfigs/cheapPC.jpg';
import config5 from '../assets/OurConfigs/averagePC.jpg';
import config6 from '../assets/OurConfigs/expensivePC.jpg';

import './css/OurConfigs.css';

const OurConfigs = ({src, alt}) => {
  return (
    <main className="sectionConfigs">
      <div className="container">
        <h2 className="title-1">Сборки</h2>
        <ul className="flexer">
          <li className="content-list__item">
            <img src={config1} alt="Project img" className="config__img" />
            <h3 className="config__title title-config">Игровые</h3>
          </li>
          <li className="project">
            <img src={config2} alt="Project img" className="config__img" />
            <h3 className="config__title title-config" title-config>
              Для дома
            </h3>
          </li>
          <li className="project">
            <img src={config3} alt="Project img" className="config__img" />
            <h3 className="config__title title-config">Для офиса</h3>
          </li>
          <li className="project">
            <img src={config4} alt="Project img" className="config__img" />
            <h3 className="config__title title-config">Бюджетная</h3>
          </li>
          <li className="project">
            <img src={config5} alt="Project img" className="config__img" />
            <h3 className="config__title title-config">Средняя цена</h3>
          </li>
          <li className="project">
            <img src={config6} alt="Project img" className="config__img" />
            <h3 className="config__title title-config">Дорогие</h3>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default OurConfigs;