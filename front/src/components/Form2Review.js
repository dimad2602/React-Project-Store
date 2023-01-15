import styled from '@emotion/styled'


const FormStyle = styled.div`
  position: flex;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 30px 3vw 20px 3vw;
  grid-row-gap: 10px;
  background: #e3e3e3;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid black;
  & > div {
      /*фоновый цвет*/
      /*скругление углов*/
      /*расстояние от одной границы ячейки до другой*/
      margin: 10px 0;
      padding: 0px 10px;
    }
`

const ImgStyle = styled.img`
  height: 200px;
  padding: 10px;
  
`

const Text = styled.div`
  padding: 10px 0 0 0;
  font-size: 1.5rem;
  border-left: 2px solid black;
`
const Zagolovok = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
`

const OpenBtn = styled.a`
  margin: auto;
  width: 10vw;
  height: 6vh;
  font-family: 'Arial', sans-serif;
  color: black;
  font-size: 1.5rem;
  background: none;
  border: 2px black solid;
  text-align: center;
  padding: 1vh 0 0 0;
  border-radius: 5px;
  box-shadow: 0.2em 0.2em 3px rgba(15, 13, 13, 0.2);;
  transition: 0.5s;
  &:hover{
      cursor: pointer;
      background: #c9c9c9;
      color: black;
  }
`

const Form2Review = () => {

    return(
        <>
            <FormStyle>
            <ImgStyle src={'https://www.ixbt.com/img/x780/r30/00/02/56/95/shshsh.jpg'} alt=""/>
                <Text>
                <Zagolovok>Выбираем лучшую видеокарту 2022 года</Zagolovok>
                Как обычно, спустя какое-то время мы снова выбираем лучшую видеокарту по соотношению цены и возможностей. 
                Цены на видеокарты снизились до относительно разумного уровня и уже не являются непреодолимой
                 преградой.
                </Text>

                    <OpenBtn href='https://www.ixbt.com/3dv/video-chart-1022.html' target="_blank">
                        Читать статью
                    </OpenBtn>
            </FormStyle>


            <FormStyle>
                <ImgStyle src={'https://www.ixbt.com/img/x780/r30/00/02/56/95/light1-2.jpg'} alt=""/>
                <Text>
                <Zagolovok>Выбор игровой видеокарты для ПК</Zagolovok>
                В видео детально обсуждается процесс выбора видеокарты. Также разбирается устройство 
                видеокарты, на что нужно обращать внимание, а что просто маркетинговый ход производителей.
                </Text>
                <OpenBtn href='https://youtu.be/qJvBPESqXr0' target="_blank">Смотреть видео</OpenBtn>
            </FormStyle>
        </>
    )
}

export default Form2Review;