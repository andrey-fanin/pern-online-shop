import React, {useContext} from 'react';
import {Context} from "../index";
import DeviceItem from "../components/DeviceItem";
import SadCat from "../assets/sadcat.jpg";
import {Row} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {Button, Card} from 'react-bootstrap'
import Ucassa from "../services/Ucassa";

const Basket = observer(() => {
    const {basket, device} = useContext(Context)
    let sum = 0;
    basket.devices.map(item => {
        sum += parseInt(item.price)
        console.log(sum)
    })
    console.log(device.brands)

    if (basket.devices.length) {
        return (
            <div className={'d-flex align-items-start justify-content-center mt-4'}>
                <Row className='d-flex flex-column align-items-center'>
                    {basket.devices.map((item, idx) =>
                            <div style={{position:"relative", width:'auto'}}>
                                <DeviceItem key={item.id} item={item}/>
                                <Button onClick={() => basket.removeDevice(item)} style={{position:"absolute", top:10, right:0}}>x</Button>
                            </div>
                    )}
                </Row>
                <Card className={'m-4 p-4'}>
                    <span style={{fontSize:50, paddingLeft:20}}>sum: {sum} RUB</span>
                    <Ucassa sum={sum}/>
                </Card>
            </div>
        );
    } else {
        return (
            <div className={'d-flex align-items-center justify-content-center'}>
                <div style={{textAlign: 'center'}}>
                    <p style={{fontSize: 32}}>Shopping cart is empty.</p>
                    <img alt='#' src={SadCat}/>
                </div>
            </div>
        )
    }
})

export default Basket;