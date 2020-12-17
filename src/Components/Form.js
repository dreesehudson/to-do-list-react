import React, { useState} from 'react';
import { Row, Button, Input, Col } from 'reactstrap';
import useTasks from '../utilities/TasksContext'


function Form (props) {
    const { tasks, setTasks } = useTasks();
    const [input, setInput] = useState("");
    
    async function addItem() {
        //object to be added to beginning of the array of tasks
        await setTasks([{
          "name": input,
          "id": Date.now(),
          "completed": false,
        },
        ...tasks]
        )
      }

    return (
        <Row>
            <Col className='ml-auto'>
                <Input
                    onChange={e => setInput(e.target.value)}
                    placeholder="Task Name">
                </Input>
            </Col>
            <Col className='mr-auto'>
                <Button
                    className="btn-success btn-sm"
                    onClick={addItem}>
                    Add Item
                </Button>
            </Col>
        </Row>
    );
}

export default Form;