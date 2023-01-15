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

const CPUCooling = () => {

    return(
        <>
            <FormStyle>
            <ImgStyle src={'https://c.dns-shop.ru/thumb/st1/fit/760/600/73d73d859acffc10fbef2430596d68f4/q93_27a00e17d8e2a0cf505a53d95302acd5fe2243c6c75fb328c675088d0bcb992e.jpg.webp'} alt=""/>
                <Text>
                <Zagolovok>Как выбрать кулер для процессора</Zagolovok>
                Основные параметры кулеров, сколько тепловых трубок нужно, размер и вес радиатора, 
                скорость вентиляторов, лучшие производители, как правильно выбрать кулер для процессора Intel и AMD.
                </Text>

                    <OpenBtn href='https://www.dns-shop.kz/guide/17a9cc2d-1640-11e5-a679-00259074e77d/' target="_blank">
                        Читать статью
                    </OpenBtn>
            </FormStyle>

            <FormStyle>
                <ImgStyle src={'https://c.dns-shop.ru/thumb/st1/fit/760/600/2af6a7f79dbefb5e7984674d30813c7b/q93_a0eb7c6106fa3d9490c676fdcaa7c27e687bbabf34a603b06f122f91ce9c9b87.gif.webp'} alt=""/>
                <Text>
                <Zagolovok>Как организовать вентиляцию ПК. Краткое руководство для начинающих</Zagolovok>
                Перегрев комплектующих вызывает снижение производительности, а в худшем случае дело заканчивается деградацией процессора и отвалом чипов. 
                И наоборот — бездумное обвешивание корпуса вентиляторами может превратить его в настоящий пылесос, который будет раздражать домочадцев своим гулом.
                </Text>
                <OpenBtn href='https://club.dns-shop.ru/blog/t-109-ventilyatoryi-ohlajdeniya/29538-kak-organizovat-ventilyatsiu-pk-kratkoe-rukovodstvo-dlya-nachinausch/' target="_blank">Читать статью</OpenBtn>
            </FormStyle>

            <FormStyle>
                <ImgStyle src={'https://avatars.mds.yandex.net/get-vthumb/4775596/0465a68b600f1f9db5dc64a25bdbd5a0/564x318_1'} alt=""/>
                <Text>
                <Zagolovok>Топ 5 процессорных кулеров для сборки ПК</Zagolovok>
                Рассмотрим лучшие башенные кулеры для cpu которые смогут охладить процессоры начиная с Ryzen 5600x или i5 12400 , заканчивая топовыми i9 12900k или ryzen 5950x.
                </Text>
                <OpenBtn href='https://www.youtube.com/watch?v=JzhJb_PuC1U' target="_blank">Смотреть видео</OpenBtn>
            </FormStyle>
            
        </>
    )
}

export default CPUCooling;