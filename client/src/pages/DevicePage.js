import React, {useContext, useEffect, useState} from 'react';
import {Container, Col, Image, Row, Card, Button} from 'react-bootstrap'
import ImgStar from "../assets/ImgStar.png";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {Context} from "../index";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const {basket} = useContext(Context)

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                   <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-start'>
                        <h2>{device.name}</h2>
                        <h3>{device.brandName}</h3>
                        <h3>{device.brandId}</h3>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${ImgStar}) no-repeat center center`,
                                backgroundSize: 'cover',
                                width: 240,
                                height: 240,
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>

                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} roubles</h3>
                        <Button variant={'outline-dark'} onClick={() => basket.setDevice(device)}>Add to card</Button>
                    </Card>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Features</h1>
                {device.info.map((info, index) =>
                    <div
                        className='p-1 d-flex'
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}
                    >
                        <span style={{minWidth:300}}>{info.title}</span>
                        <span>{info.description}</span>
                    </div>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;