import React from 'react';
import contactspng from '../assets/contactspng.png';
//import {Dimensions} from 'react-native';
import './css/Contacts.css';

const Contacts = ({src, alt}) => {
  //const screenHeight = Dimensions.get ('screen').height;
  //const screenWidth = Dimensions.get ('screen').width;
  const screenHeight2 = '93.8vh';
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        background: `url(${contactspng}) no-repeat center center`,
        height: screenHeight2,
        backgroundSize: 'cover',
      }}
    >
      <div className="square2">
        <main className="section">
          <div className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h1 className="title-2">Помощь по техническим вопросам</h1>
                <h2 className="title-3">Telegram</h2>
                  <p>@BYP_Company</p>
              </li>
              <li className="content-list__item">
                <h1 className="title-2">Сотрудничество</h1>
                <h2 className="title-3">Email</h2>
                <p>
                  BYPCorp@mail.ru
                </p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contacts;
