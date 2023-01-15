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

const RAMReview = () => {

    return(
        <>
            <FormStyle>
            <ImgStyle src={'https://avatars.mds.yandex.net/get-vthumb/2237837/e9fda6458a399ca242a787713c3ce250/564x318_1'} alt=""/>
                <Text>
                <Zagolovok>Как выбрать оперативную память</Zagolovok>
                Для каждого временного периода есть свои стандарты. 
                На сегодняшний день объем 32 ГБ является в большинстве ситуаций более чем достаточным. 
                Но помните, что технологии стремительно меняются. 
                </Text>

                    <OpenBtn href='https://www.dns-shop.ru/guide/17a89a39-1640-11e5-a679-00259074e77d/' target="_blank">
                        Читать статью
                    </OpenBtn>
            </FormStyle>

            <FormStyle>
                <ImgStyle src={'https://avatars.mds.yandex.net/get-vthumb/1445507/11259a9f6da561d1a370605a3cfa6fbf/564x318_1'} alt=""/>
                <Text>
                <Zagolovok>5 Ошибок при выборе ОЗУ</Zagolovok>
                Влияет ли: частота, тайминги, ранговость и количество планок ОЗУ на производительность в играх или 5 ошибок при выборе оперативной памяти.
                </Text>
                <OpenBtn href='https://www.youtube.com/watch?v=3EAN5lVysiE' target="_blank">Смотреть видео</OpenBtn>
            </FormStyle>
            
        </>
    )
}

export default RAMReview;