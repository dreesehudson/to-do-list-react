import React from 'react';
import { Row, Button, Input, Col } from 'reactstrap';


function Form(props) {

    return (
        <Row>
            <Col className='ml-auto'>
                <Input
                    value={props.input}
                    onChange={e => props.setInput(e.target.value)}
                    placeholder="Task Name">
                </Input>
            </Col>
            <Col className='mr-auto'>
                <Button
                    className="btn-success btn-sm"
                    onClick={props.addItem}
                >
                    Add Item
                </Button>
            </Col>
        </Row>
    );

}

export default Form;