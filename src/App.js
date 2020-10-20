import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Form from './Components/Form.js'
import Filter from './Components/Filter.js'
import List from './Components/List.js'
import { faStreetView } from '@fortawesome/free-solid-svg-icons';


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
    this.showItems = this.showItems.bind(this);
    //this.toggleCheckbox = this.toggleCheckbox.bind(this);
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
    this.setState(
      { view: this.state.tasks }
    )
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
      tasks: filteredTasks,
      view: filteredTasks

    })

  }

  showItems(filter) {
    //proxy of state for current list of tasks.
    let taskList = [...this.state.tasks];
    if (filter === "completed") {
      //filter to only include completed items
      return taskList.filter(item => (item.completed === true));
    }
    else if (filter === "active") {
      return taskList.filter(item => (item.completed === false));
    }


    //reset state to filtered list
    this.setState({
      currentFilter: filter
    })

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
      view: filteredTasks
    })

  }

  // markAllDone() {
  //   let updatedData = this.state.data;
  //   Object.keys(updatedData).forEach(function (box) {
  //     updatedData[box]['list'].forEach(function (item) {
  //       item.done = true;
  //     })
  //   });
  //   this.setState({ data: updatedData });
  // }

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
        showItems={this.showItems}

      />
      <List
        tasks={this.state.tasks}
        currentFilter={this.currentFilter}


      />
    </div>
    );
  }
}
export default App;
