import {Col, FloatingLabel, Form} from "react-bootstrap";
import React from "react";

const SelectCategory = ({categories, handleChangeCategory}) => (
    <Col xs={3}>
        <FloatingLabel controlId="floating-category" label="Category">
            <Form.Select aria-label="Category" onChange={handleChangeCategory}>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </Form.Select>
        </FloatingLabel>
    </Col>
);

export default SelectCategory;