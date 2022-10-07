import React, {useContext} from 'react';
import {Card, Col, Image} from 'react-bootstrap'
import SvgStar from "../assets/SvgStar";
import {useHistory, useLocation} from "react-router-dom";
import {BASKET_ROUTE, DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({item}) => {
    const history = useHistory()
    const {device} = useContext(Context)

    return (
        <Col md={3} className='mt-3' onClick={() => history.push(`${DEVICE_ROUTE}/${item.id}`)}>
            <Card
                style={{width: 150, cursor: 'pointer'}}
                border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + item.img}
                />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="">{item?.brandName}</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <SvgStar/>
                    </div>
                </div>
                <div className="">{item.name}</div>
                <div className="">{item.price}</div>
            </Card>
        </Col>
    )
};

export default DeviceItem;