import styled from "@emotion/styled";
import Modal from './ModalPicture copy'
import { useState } from "react";
import comp from '../assets/OurConfigs/gamePC.jpg';
import img1 from  '../assets/4SsxWGW2vtI.jpg'

const CloseButton = styled.button`
  margin: auto;
  margin-left: 4vw;
  width: 6vw;
  height: 6vh;
  font-family: 'Arial', sans-serif;
  color: black;
  font-size: 1.4rem;
  background: none;
  border: 2px black solid;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0.2em 0.2em 3px rgba(15, 13, 13, 0.2);;
  transition: 0.5s;
  &:hover{
      cursor: pointer;
      background: #c9c9c9;
      color: black;
  }
`

const Opisanie = styled.p`
  text-align: left;
  padding: 10px 0 0 0;
  font-size: 1.1rem;
  border-left: 2px solid black;
`

const FormStyle = styled.div`
  position: flex;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 30px 10vw 20px 10vw;
  grid-row-gap: 10px;
  background: #ebebeb;
  box-shadow: 15px 15px 40px black;
  border-radius: 10px;
  & > div {
      margin: 10px 0;
      padding: 0px 10px;
    }
`

const ModalStyle = styled.div`
  position: flex;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 0px 0vw 0px 0vw;
  & > * {
      margin: 10px 0;
      padding: 0px 10px;
    }
`

const ImgStyle = styled.img`
  height: 200px;
  width: 150px;
  margin-left: 70px;
  margin-top: 5px;
`

const Text = styled.div`
  padding: 10px 0 0 0;
  font-size: 1.1rem;
  border-left: 2px solid black;
`
const Zagolovok = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
`

const OpenBtn = styled.button`
  margin: auto;
  width: 10vw;
  height: 6vh;
  font-family: 'Arial', sans-serif;
  color: black;
  font-size: 1.5rem;
  background: none;
  border: 2px black solid;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0.2em 0.2em 3px rgba(15, 13, 13, 0.2);;
  transition: 0.5s;
  &:hover{
      cursor: pointer;
      background: #c9c9c9;
      color: black;
  }
`

const Zagolovok2 = styled.div`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  margin: 20px;
`
const DNS = styled.a`
  margin: 0vw 0 0 1vw;
  color: blue;
  font-size: 1.1rem;
  text-align: right;
  &:hover{
    color: blue;
  }
`
const Citilink = styled.a`
  margin: 0vw 0 0 2vw;
  color: blue;
  font-size: 1.1rem;
  &:hover{
    color: blue;
  }
`


const Modal1 = () => { 

  let [modalActive1, setModalActive1] = useState(false);
  let [modalActive2, setModalActive2] = useState(false);

    return(
        <>
        <Zagolovok2>Игровые сборки</Zagolovok2>
      <FormStyle>
            <ImgStyle src={comp} alt=""/>       
                <Text>
                <Zagolovok style={{marginLeft: '25px'}}>Цена: 162 788 руб.</Zagolovok>
                <ul>
                  <li>
                    Процессор: AMD Ryzen 5 7600X, OEM
                  </li>
                  <li>
                    Видеокарта: GeForce RTX 3080 10 ГБ
                  </li>
                  <li>
                    Материнская плата: MSI PRO B650-P WIFI
                  </li>
                  <li>
                    Оперативная память: ADATA XPG Lancer 32 ГБ
                  </li>
                  <li>
                    Накопители: 512 ГБ SSD M.2 ADATA XPG GAMMIX S70 BLADE
                  </li>
                </ul>
                </Text>

                    <OpenBtn onClick={() => {setModalActive1(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}>
                    Подробнее
                    </OpenBtn>
            </FormStyle>



            <FormStyle>

<ImgStyle src={'https://st14.stpulscen.ru/images/product/426/431/131_big.jpg'} alt=""/>       
<Text>
                <Zagolovok style={{marginLeft: '25px'}}>Цена: 90 000 руб.</Zagolovok>
                <ul>
                <li>Процессор: AMD Ryzen 5600X, OEM</li>            
                  <li>Видеокарта: GIGABYTE AMD Radeon RX 6750XT </li>
                  <li>Материнская плата: MSI MAG B550 TOMAHAWK MAX WIFI</li>
                  <li> Оперативная память: Patriot Viper Steel RGB PVSR423</li>
                  <li> Накопители: SSD 512 GB</li>
                </ul>
                </Text>

        <OpenBtn onClick={() => { }}>
            Подробнее
        </OpenBtn>
</FormStyle>




      <Modal active={modalActive1} setActive={setModalActive1}>
      <ModalStyle>
      <ImgStyle src={comp} alt="" style={{margin: 'auto'}}/> 
          <Opisanie>
          <Zagolovok style={{marginLeft: '25px'}}>Цена: 162 788 руб.</Zagolovok>
                <ul>
                <li>
                    Процессор: AMD Ryzen 5 7600X, OEM
                  </li>
                  <li>
                    Видеокарта: GeForce RTX 3080 10 ГБ
                  </li>
                  <li>
                    Материнская плата: MSI PRO B650-P WIFI
                  </li>
                  <li>
                    Оперативная память: ADATA XPG Lancer 32 ГБ
                  </li>
                  <li>
                    Накопители: 512 ГБ SSD M.2 ADATA XPG GAMMIX S70 BLADE
                  </li>
                  <li>Охлаждение процессора: MSI MAG CORELIQUID C280</li>
                  <li>Блок питания: GIGABYTE AORUS P850W 80+ gold</li>
                  <li>Сборка в <DNS href="https://www.dns-shop.ru/custompc/user-pc/configuration/ca593770a86bc328/" target='_blank'>DNS</DNS>
                  <Citilink href="https://www.citilink.ru/configurator/q51074998/" target='_blank'>Ситилинк</Citilink></li>
                </ul>
          </Opisanie>

          <CloseButton onClick={() => {setModalActive1(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          }}> Закрыть </CloseButton>
         </ModalStyle>
      </Modal>           






      <Modal active={modalActive2} setActive={setModalActive2}>
      <ModalStyle>
      <img src={img1} alt="" style={{margin: 'auto', height: '100%'}}/> 
      <CloseButton onClick={() => {setModalActive2(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          }}> Закрыть </CloseButton>
         </ModalStyle>
      </Modal>  
        </>
    )
    
    }

export default Modal1;