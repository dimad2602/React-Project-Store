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

const MotherBoardReview = () => {

    return(
        <>
            <FormStyle>
            <ImgStyle src={'https://c.dns-shop.ru/thumb/st4/fit/760/600/8a4989b68e811561571d8715703b8404/q93_8f9a03c4e7e0c5b5f38526532ebcdcc27d86fadaa7ae2ad0fe1d745ea1352079.jpg.webp'} alt=""/>
                <Text>
                <Zagolovok>Как выбрать материнскую плату</Zagolovok>
                Для того, чтобы выбрать материнскую плату, следует обратить внимание на такие характеристики 
                как: сокет, чипсет, форм-фактор, разъемы,  VRM.
                </Text>

                    <OpenBtn href='https://www.dns-shop.ru/guide/17a89a04-1640-11e5-a679-00259074e77d/' target="_blank">
                        Читать статью
                    </OpenBtn>
            </FormStyle>

            <FormStyle>
                <ImgStyle src={'https://c.dns-shop.ru/thumb/st4/fit/760/600/4a526debe58711dc6f0edef0169d1c90/q93_ce838c726fbd466966343a4f01ee9b6d19d786fc18df440c6760db2692e1e2b6.jpg.webp'} alt=""/>
                <Text>
                <Zagolovok>Как выбрать хорошую материнскую плату и не переплатить</Zagolovok>
                Как правильно выбрать материнскую плату? Какие материнские платы существуют? 
                Как не ошибиться в выборе материнской платы и не купить кота в мешке?
                </Text>
                <OpenBtn href='https://www.youtube.com/watch?v=8VkMP42mH9A' target="_blank">Смотреть видео</OpenBtn>
            </FormStyle>
        </>
    )
}

export default MotherBoardReview;