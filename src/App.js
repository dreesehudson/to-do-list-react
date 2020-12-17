import React, { useEffect, useState } from 'react';
import Header from './Components/Header.js'
import Form from './Components/Form.js'
import Filter from './Components/Filter.js'
import { Button, Container, Input, ListGroupItem, Label, ListGroup } from 'reactstrap';
import { useTasks } from './utilities/TasksContext'
import { useHelpers } from './utilities/helpers'

function App() {
  const { tasks, setTasks } = useTasks();
  const { check, deleteItem } = useHelpers
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    let storedData = window.localStorage.getItem('tasks')
    if (storedData) {
      setTasks(JSON.parse(storedData))
    } else {
      window.localStorage.setItem('tasks', JSON.stringify({}))
    }
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks.length])

  return (
    <Container className="App container justify-content-center">
      <Header />
      <Form />
      <Filter />
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
                    className="btn-sm btn-danger my-auto float-right"
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
