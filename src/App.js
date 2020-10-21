import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Form from './Components/Form.js'
import Filter from './Components/Filter.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: "",

      currentFilter: 'all'

    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.deleteAllTasks = this.deleteAllTasks.bind(this);
    this.markAllActive = this.markAllActive.bind(this);
    this.markAllComplete = this.markAllComplete.bind(this);
  }

  componentDidMount() {
    //load localStorage if present
  }

  componentWillUnmount() {
    //save list to localStorage on unload.
  }



  //update state as user types in the input field
  changeHandler(e) {
    this.setState({
      input: e.target.value
    })
  }

  //applies as onClick to the Submit Button
  async addItem() {
    //object to be added to beginning of the array of tasks
    await this.setState(state => ({
      tasks: [{
        "name": state.input,
        "id": Date.now(),
        "completed": false
      },
      ...state.tasks],
      input: ""
    }))
  }

  //applies as onClick to the X Button on each task
  deleteItem(id) {
    console.log(id);
    //proxy of state for current list of tasks.
    let taskList = [...this.state.tasks];

    //remove item
    const filteredTasks = taskList.filter(item => (item.id !== id));

    //reset state to filtered list
    this.setState({
      tasks: filteredTasks
    })

  }

  setFilter(filter) {
    this.setState(
      { currentFilter: filter }
    )

  }

  countActive() {
    //count list items in [tasks] with completed: false

  }

  countCompleted() {
    //count list items in [tasks] with completed: true
  }

  //applies as onClick to the checkbox on each task
  markComplete(id) {
    console.log(id);
    //proxy of state for current list of tasks.
    let taskList = [...this.state.tasks];

    //change data-* attribute to data-complete
    const filteredTasks = taskList.filter(item => (item.id === id));

    //reset state to filtered list
    this.setState({
      tasks: filteredTasks,
    })

  }
  markAllActive() {
    console.log("markAllActive")
    //proxy of state for current list of tasks.
    let taskList = [...this.state.tasks];
    taskList.map((item) => 
      item.completed = false)
    console.log(taskList);
    //reset state to empty list
    this.setState({
      tasks: taskList
    })
  }

  markAllComplete() {
    console.log("markAllComplete")
    //proxy of state for current list of tasks.
    let taskList = [...this.state.tasks];
    taskList.map((item) => 
      item.completed = true)
    console.log(taskList);
    //reset state to empty list
    this.setState({
      tasks: taskList
    })
  }

  deleteAllTasks() {
    console.log("deleteAllTasks")
    //proxy of state for current list of tasks.
    let taskList = [];
    //reset state to empty list
    this.setState({
      tasks: taskList
    })
  }

  render() {
    return (
      <div className="App container justify-content-center">
        <Header />
        <Form
          input={this.state.input}
          changeHandler={this.changeHandler}
          addItem={this.addItem}
        />
        <Filter
          setFilter={this.setFilter}
          markAllActive={this.markAllActive}
          markAllComplete={this.markAllComplete}
          deleteAllTasks={this.deleteAllTasks}
        />
        <ul className="list-group mt-2 mx-auto row">
          {this.state.tasks
            .filter((item) => {
              if (this.state.currentFilter === "all") {
                return item
              }
              else if (this.state.currentFilter === "completed" && item.completed) {
                return item
              }
              else if (this.state.currentFilter === "active" && !item.completed) {
                return item
              }
            }
            )
            .map((item) =>
              <li key={item.id}>
                <div className="list-group-item mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={item.id}
                    />
                    <label
                      //if item.completed is true, strike-through the item
                      style={{ textDecoration: ((item.completed) ? 'line-through' : '') }}
                      className="form-check-label"
                    >
                      {item.name}
                    </label>
                    <button
                      data-id={item.id}
                      className="btn btn-sm btn-danger my-auto float-right"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                  </button>
                  </div>
                </div>
              </li>
            )}
        </ul>
      </div>
    );
  }
}
export default App;
