import styled from '@emotion/styled';
import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import StrelkaP from '../../src/assets/8aeeb86c8f76807056e0b82db0418b80.png';
import StrelkaL from '../../src/assets/8aeeb86c8f76807056e0b82db0418b3333380.png';
import FormReview from './ProcVisible';
import img1 from  '../assets/4SsxWGW2vtI.jpg'
import Form2Review from './Form2Review';
import MotherBoardReview from './MotherBoardReview';
import CPUCooling from './CPUCoolingReview';
import RAMReview from './RAMReview';


const KompItems = [
  {
      name: "Процессор",
      route: ''
  },
  {
    name: "Видеокарта",
    route: ''
  },
  {
      name: "Материнская плата",
      route: '',
  },
  {
      name: "Охлаждение процессора",
      route: ''
  },
  {
      name: "Оперативная память",
      route: ''
  },
  {
      name: "Хранение даных",
      route: ''
  },
  {
    name: "Блок питания",
    route: ''
  },
]; 

function Carousel11() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            height: '60px',
            justifyContent: "space-between",
            userSelect: "text",
            marginTop: '4vh',
            padding: '10px 0',
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            textDecoration: 'underline',
            color: '#1f5f9c'
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <img src={StrelkaP} alt=""/>,
          style: {
            width: 30,
            height: 30,
            minWidth: 30,
            alignSelf: "center",
            marginBottom: '25px',
            marginRight: '20px'
          }
        }}
        backwardBtnProps={{
          children: <img src={StrelkaL} alt=""/>,
          style: {
            width: 30,
            height: 30,
            minWidth: 30,
            alignSelf: "center", 
            marginBottom: '25px',
            marginLeft: '20px'
          }
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={5}
        speed={400}
      >
        {KompItems.map((item, index) => (
          <div
            style={{
              background: "none",
              marginTop: '0vh',
              width: 360,
              height: 60,
              textAlign: "center",
              boxSizing: "border-box",
              fontSize: '1.5rem',
              fontWeight: 600
            }}
            key={index}
          >
            <p onClick={() => {setActiveSlide(index)}} style={{cursor:'pointer'}}>
              {item.name}
            </p>
          </div>
        ))}
      </Carousel>

      {
        activeSlide == 0 ? 
        <FormReview>

        </FormReview>
          :
          activeSlide == 1 ? 
          <Form2Review/>
          :
          activeSlide == 2 ?
          <MotherBoardReview/> 
          :
          activeSlide == 3 ?
          <CPUCooling/> 
          :
          activeSlide == 4 ?
          <RAMReview/> 
          :
          <img src={img1} alt=""/>
      }


    </div>
  );
}

export default Carousel11;