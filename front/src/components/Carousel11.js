import styled from '@emotion/styled';
import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import StrelkaP from '../../src/assets/8aeeb86c8f76807056e0b82db0418b80.png';
import StrelkaL from '../../src/assets/8aeeb86c8f76807056e0b82db0418b3333380.png';


function Carousel11() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text",
            marginTop: '4vh',
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "#898989",
            textDecoration: 'underline'
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <img src={StrelkaP} alt=""/>,
          style: {
            width: 40,
            height: 40,
            minWidth: 40,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: <img src={StrelkaL} alt=""/>,
          style: {
            width: 40,
            height: 40,
            minWidth: 40,
            alignSelf: "center",
          }
        }}
        dotsNav={{
          show: true,
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
        {Array.from({ length: 7 }).map((item, index) => (
          <div
            style={{
              background: "none",
              marginTop: '4vh',
              width: 320,
              height: 120,
              borderLeft: "3px solid black",
              borderRight: "3px solid black",
              textAlign: "center",
              boxSizing: "border-box"
            }}
            key={index}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousel11;