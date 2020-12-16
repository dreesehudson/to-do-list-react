import React from 'react';
import { Row, Button, Container, ButtonGroup } from 'reactstrap';

function Footer(props) {
    return (
        <Container className="container-fluid text-center mt-2">
            <Row className="justify-content-center">
                <ButtonGroup className="btn-group btn-group-sm" role="group">
                    <Button
                        className="btn-secondary btn-sm"
                        onClick={() => props.setFilter('all')}>
                        All
                </Button>
                    <Button
                        className="btn-secondary btn-sm"
                        onClick={() => props.setFilter('active')}>
                        Open
                </Button>
                    <Button
                        className="btn-secondary btn-sm"
                        onClick={() => props.setFilter('completed')}>
                        Completed
                </Button>
                </ButtonGroup>
            </Row>
            <Row className="justify-content-center">
                <ButtonGroup className="btn-group-sm mt-2" role="group">
                    <Button
                        className="btn-success btn-sm"
                        onClick={props.markAllComplete}>
                        Mark All Completed
                </Button>
                    <Button
                        className="btn-warning btn-sm"
                        onClick={props.markAllActive}>
                        Mark All Active
                </Button>
                    <Button
                        className="btn-danger btn-sm"
                        onClick={props.deleteAllTasks}>
                        Delete All Tasks
                </Button>
                </ButtonGroup>
            </Row>
            <Row className=" mt-1">
                <p className="col-6 float-left ml-0">Active: {props.countActive()}</p>
                <p className="col-6 float-right mr-0">Completed: {props.countCompleted()}</p>
            </Row>
        </Container>
    )
}

export default Footer;
