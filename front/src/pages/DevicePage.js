import React from 'react';
import {Button, Card, Col, Container, Image, Row, Form} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: 'devices', price:10000, rating:5, img:'https://img2.freepng.ru/20180426/ypw/kisspng-avatar-steam-killing-floor-super-house-of-dead-nin-5ae1ab68158d79.7649155815247389200883.jpg'};  
    const description = [
        {id:1, title:'Объем', description: "16 гб"},
        {id:2, title:'Пример1', description: "6 гб"},
        {id:3, title:'Пример2', description: "1 гб"},
    ]
    return (
        <Container className="mt-3">
        <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Form className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                    >
                        {device.rating}
                    </div>
                </Form>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                >
                    <h3>От: {device.price} руб.</h3>
                    <Button variant={"outline-dark"}>Добавить в конфигурацию</Button>
                </Card>
            </Col>
        </Row>
        <Row className="d-flex flex-column m-3">
            <h1>Характеристики</h1>
            {description.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
            )}
        </Row>
    </Container>
    );
};

export default DevicePage;