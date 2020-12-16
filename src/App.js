import React, { useEffect, useState } from 'react';
import Header from './Components/Header.js'
import Form from './Components/Form.js'
import Filter from './Components/Filter.js'
import { Row, Button, Container, Input, ListGroupItem, Label, ListGroup } from 'reactstrap';


function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState('all');


  useEffect(() => {
    let storedData = window.localStorage.getItem('tasks')
    if (storedData) {
      setTasks(JSON.parse(storedData))
    } else {
      window.localStorage.setItem('tasks', JSON.stringify({}))
    }
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  })

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

  //applies as onClick to the X Button on each task
  function deleteItem(id) {
    //proxy of state for current list of tasks.
    let taskList = [...tasks];

    //remove item
    const filteredTasks = taskList.filter(item => (item.id !== id));

    //reset state to filtered list
    setTasks(filteredTasks)

  }

  function check(itemId) {
    //copy of current state
    let taskList = tasks;
    //index of object passed in
    let itemIndex = tasks.findIndex(item => item.id === itemId);
    //toggle completed value true/false
    taskList[itemIndex].completed = !taskList[itemIndex].completed;
    //set state with new completed state
    setTasks(taskList)
  }

  //applies as onClick to the checkbox on each task
  function markComplete(id) {
    console.log(id);
    //proxy of state for current list of tasks.
    let taskList = [...tasks];

    //change data-* attribute to data-complete
    const filteredTasks = taskList.filter(item => (item.id === id));

    //reset state to filtered list
    this.setState({
      tasks: filteredTasks,
    })

  }
  function markAllActive() {
    //proxy of state for current list of tasks.
    let taskList = [...tasks];
    taskList.map((item) => item.completed = false)
    //reset state to empty list
    setTasks(taskList)
  }

  function markAllComplete() {
    //proxy of state for current list of tasks.
    let taskList = [...tasks];
    taskList.map((item) => item.completed = true)
    //reset state to empty list
    setTasks(taskList)
  }

  function deleteAllTasks() {
    //reset state to empty list
    setTasks([]);
  }
  function countActive() {
    //count list items in [tasks] with completed: false
    const count = tasks.filter((item) => !item.completed);
    return count.length;
  }

  function countCompleted() {
    //count list items in [tasks] with completed: true
    const count = tasks.filter((item) => item.completed);
    return count.length;
  }

  return (
    <Container className="App container justify-content-center">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        addItem={addItem}
      />
      <Row>
        <Filter
          setCurrentFilter={setCurrentFilter}
          markAllActive={markAllActive}
          markAllComplete={markAllComplete}
          deleteAllTasks={deleteAllTasks}
          countActive={countActive}
          countCompleted={countCompleted}
        />

      </Row>
      <ListGroup
        className="mt-2 mx-auto row list-unstyled">
        {tasks &&
          tasks.filter((item) => {
            if (currentFilter === "all") {
              return item
            }
            else if (currentFilter === "completed" && item.completed) {
              return item
            }
            else if (currentFilter === "active" && !item.completed) {
              return item
            }
          })
            .map((item, idx) =>
              <ListGroupItem key={idx} className="list-group-item mb-3">
                <Form className="form-check">
                  <Input
                    type="checkbox"
                    className="form-check-input"
                    id={item.id}
                    onChange={() => check(item.id)}
                    checked={item.completed}
                  />
                  <Label
                    style={{ textDecoration: ((item.completed) ? 'line-through' : '') }}
                    className="form-check-label"
                  >
                    {item.name}
                  </Label>
                  <Button
                    data-id={item.id}
                    className="btn btn-sm btn-danger my-auto float-right"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </Button>
                </Form>
              </ListGroupItem>
            )}
      </ListGroup>
    </Container>
  )
}

export default App;
