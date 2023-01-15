import styled from "@emotion/styled";
import React from 'react';

import homePNG1 from "../assets/homePNG1.png";
import homePNG2 from "../assets/homePNG2.png";
import homePNG3 from "../assets/homePNG3.png";


const BackgroundPNG1 = styled.div`
    background-image: url(${homePNG1}), url(${homePNG2});
    background-repeat: no-repeat, repeat;
    background-position: top-left center;
    
    ${'' /* Для моего экрана */}
    height: 93.0vh; 
    
`

const BackgroundPNG2 = styled.div`
    background-image: url(${homePNG2});
    background-repeat: no-repeat;
    background-position: top-left;

    height: 100vh; 
`
const BackgroundPNG3 = styled.div`
    background-image: url(${homePNG3});
    background-repeat: no-repeat;
    background-position: center;
    
    height: 100vh; 
`

const Square = styled.div`
    ${'' /* background: none;    */}
    position: absolute;
    width: 60%;
    height: 80%;   
    left: 20%;
    top: 15vh;

    background: #2D2D2D;
    ${'' /* mix-blend-mode: multiply; */}
    background: rgba( 0, 0, 0, 0.75);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
`

const Square2 = styled.div`
    position: absolute;
    width: 60%;
    height: 80%;   
    left: 20%;
    top: 115%;

    background: #2D2D2D;
    background: rgba( 0, 0, 0, 0.75);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Square3 = styled.div`
    position: absolute;
    width: 60%;
    height: 80%;   
    left: 20%;
    top: 215%;

    background: #2D2D2D;
    background: rgba( 0, 0, 0, 0.75);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Text = styled.div`
    color: #fff;
    border: none;

    margin-top: 50px;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    font-size: 22px;

    ${'' /* font-family: 'Inter'; */}
    font-style: normal;
    font-size: 64px;
`

const Text2 = styled.div`
    color: #fff;
    border: none;

    ${'' /* font-family: 'Inter'; */}
    font-style: normal;
    
    margin-top: 70px;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    line-height: 39px;
    font-size: 32px;

`

const Home = () => {
    return (
            <>
            <BackgroundPNG1>
                <Square>
                        <Text> 
                            Почему мы?
                        </Text>
                        <Text2>
                            Мы предоставляем обширную информацию по современным сборкам ПК
                        </Text2>
                        <Text2>
                            Собрали для вас советы по выборе комплектующих и самостоятельной сборке компьютера для начинающих со многих ресурсов
                        </Text2>
                        <Text2>
                            Обзоры, гайды, статьи и многое другое мы собрали специально для вас в одном месте
                        </Text2>
                </Square> 
            </BackgroundPNG1>
            <BackgroundPNG2>
                <Square2>
                        <Text> 
                            Почему мы?
                        </Text>
                        <Text2>
                            Мы предлагаем удобный механизм, который должен находить наилучшую комбинацию из доступных в продаже 
                            комплектующих ПК исходя из всесторонней оценки их 
                            взаимной совместимости и финансовых ресурсов пользователя и его потребностей
                        </Text2>
                </Square2> 
            </BackgroundPNG2>
            <BackgroundPNG3>
                <Square3>
                        <Text> 
                            Обратитесь к нам если
                        </Text>
                        <Text2>
                            Вы хотите приобрести максимально производительный компьютер за свои деньги
                        </Text2>
                        <Text2>
                            Вы планируете приобрести большое количество компьютеров для офиса или компании
                        </Text2>
                        <Text2>
                            Вы испытываете трудности при сборке компьютера
                        </Text2>
                </Square3> 
            </BackgroundPNG3>   
            </>
    );
};

export default Home;