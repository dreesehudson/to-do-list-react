import React from 'react';
import { Input, Row, Button } from 'reactstrap';

function Form(props) {
    return (
        <Row className="justify-content-center">
            <Input
                style={{ width: '50%'}}
                value={props.input}
                onChange={props.changeHandler}
                placeholder="Task Name">

            </Input>
            <Button
                className="btn-danger btn-sm"
                onClick={props.addItem}>
                Add Item
            </Button>
        </Row>
    );
}

export default Form;