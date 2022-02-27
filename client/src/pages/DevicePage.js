import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device =  {id: 1, name: 'Iphone 13', price: 2000, rating:5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}
  const deviceDescription = [
      {id:1,title:"RAM",description:"5gb"},
      {id:2,title:"Weight",description:"0.5 m"},
      {id:3,title:"Height",description:"0.3 m"},
      {id:4,title:"Camera",description:"12 mp"},
      {id:5,title:"Accumulator",description:"4000 mAm"},
  ]
    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex flex-column align-items-center"}>
                        <h2>{device.name}</h2>
                        <div className={"d-flex align-items-center justify-content-center"}
                             style={{background:`url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize:64}}>
                            {device.rating}
                        </div>
                    </Row>

                </Col>
                <Col md={4}>
                    <Card className={"d-flex align-items-center justify-content-around"} style={{width:300, height:300, border: "5px solid lightgray"}}>
                       <h2>From {device.price}$</h2>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h1>Property</h1>
                {deviceDescription.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : '', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;