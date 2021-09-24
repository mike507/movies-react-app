import {Button, Col, FloatingLabel, Form} from "react-bootstrap";
import {ELEMENTS} from "../helpers/constants";
import React from "react";

const FormPagination = ({page, firstElementIndex, lastElementIndex, nbElements, handleChangeNbElements, handlePrevious, handleNext}) => (
    <>
        <Col xs={3}>
            <FloatingLabel controlId="floating-nbelements" label="Number">
                <Form.Select aria-label="Number" onChange={handleChangeNbElements}>
                    {ELEMENTS.map(element => <option key={element} value={element}>{element}</option>)}
                </Form.Select>
            </FloatingLabel>
        </Col>
        <Button variant="light" as={Col} xs="auto" className="my-2" onClick={handlePrevious}>
            <i className="fas fa-arrow-left"></i>
        </Button>
        <Button variant="light" as={Col} xs="auto" className="my-2 mx-2" disabled>{`${page}`}</Button>
        <Button variant="light" as={Col} xs="auto" className="my-2" onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
        </Button>
        <Col className="my-2 mx-2" xs={3}>
            {`Elements ${firstElementIndex + 1}-${lastElementIndex} of ${nbElements}`}
        </Col>
    </>
);

export default FormPagination;
