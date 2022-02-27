import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}] )
    }
    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Dropdown className={"ml-3"}>
                            <Dropdown.Toggle variant={"outline-info"}>Choose type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className={"ml-3"}>
                            <Dropdown.Toggle variant={"outline-info"}>Choose brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Input device name"}
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Input device price"}
                        type={"number"}
                    />
                    <Form.Control
                        className={"mt-3"}
                        type={"file"}
                    />
                    <hr/>
                    <Button variant={"outline-dark"} onClick={() => addInfo()}>Add new property</Button>
                    {info.map(i =>
                        <Row className={"mt-4"} key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Input property name..."}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Input property description..."}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={"outline-danger"}
                                    onClick={() => deleteInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;