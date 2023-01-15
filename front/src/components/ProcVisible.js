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

const FormReview = () => {

    return(
        <>
            <FormStyle>
            <ImgStyle src={'https://www.centr-crm.ru/wp-content/uploads/2017/10/reshenie-problem.orig_.jpg'} alt=""/>
                <Text>
                <Zagolovok>Как выбрать процессор</Zagolovok>
                Центральный процессор (ЦП, CPU) — это «сердце» компьютера. Это основной элемент системы. Именно поэтому
                 к его выбору необходимо отнестись максимально серьезно, 
                 особенно если вы планируете не купить готовый ПК, а собрать его самостоятельно.
                </Text>

                    <OpenBtn href='https://www.citilink.ru/promo/cpu/' target="_blank">
                        Читать статью
                    </OpenBtn>
            </FormStyle>


            <FormStyle>
                <ImgStyle src={'https://habrastorage.org/r/w1560/getpro/habr/post_images/772/582/2e1/7725822e1e2ef8975b16770b48a0e199.jpg'} alt=""/>
                <Text>
                <Zagolovok>Как разрабатываются и производятся процессоры</Zagolovok>
                В этом первом взгляде и обзоре рассмотрены основы работы процессоров.
                </Text>
                <OpenBtn href='https://habr.com/ru/post/456922/' target="_blank">Читать статью</OpenBtn>
            </FormStyle>


            <FormStyle>
                <ImgStyle src={'https://hyperpc.ru/images/support/articles/cpu-2022/cpu-2022-content-01_webp.jpg'} alt=""/>
                <Text>
                <Zagolovok>Рейтинг процессоров для ПК 2022</Zagolovok>
                С каждым годом индустрия компьютерных технологий активно развивается и радует нас новыми продуктами.
                Производство центральных процессоров – не исключение. В этот раз поговорим о самых актуальных CPU на начало 2022-го года для игр и работы.
                </Text>
                <OpenBtn href='https://hyperpc.ru/blog/gaming-pc/cpu-2022' target="_blank">Читать статью</OpenBtn>
            </FormStyle>

            <FormStyle>
                <ImgStyle src={'https://c.dns-shop.ru/thumb/st4/fit/760/600/8e8221366e969f644edb361d9092aa9b/q93_040f02c030e77778364a3ef18c6ff1dab539457d8c64abf4fd227b2074aaa54b.jpg.webp'} alt=""/>
                    <Text>
                    <Zagolovok>Обзор процессора AMD Ryzen 5 5600 OEM</Zagolovok>
                    В это обзоре вы узнаете подробные характеристики, тесты  в стоке и разгоне,  
                    достоинство и не достатке процессора, вывод также его установка.
                    </Text>
                <OpenBtn href='https://club.dns-shop.ru/review/t-100-protsessoryi/86407-obzor-protsessora-amd-ryzen-5-5600-oem/' target="_blank">Читать статью</OpenBtn>
            </FormStyle>
        </>
    )
}

export default FormReview;