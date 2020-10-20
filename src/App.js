import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Form from './Components/Form.js'
import Footer from './Components/Footer.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: "",
      // activeCount: 0,
      // completedCount: 0,

    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
  addItem() {
    //object to be added to beginning of the array of tasks
    this.setState(state => ({
      tasks: [{
        "name": state.input,
        "id": Date.now(),
        "completed": false
      },
      ...state.tasks]
    }))

    this.setState({
      //clear out input field for next entry
      input: ""
    })
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

  // completeItem() {
  //     //change state.completed false to true
  //     //this.tasks[event.target].completed = true;
  //     //remove completeItem() from checkbox onClick
  //     //add activateItem() to checkbox onClick
  // }
  // activateItem() {
  //     //change state.completed true to false
  //     //this.tasks[event.target].completed = false;
  //     //remove activateItem() from checkbox onClick
  //     //add completeItem() to checkbox onClick
  // }

  showAll() {
    //set visibility of all list items to true
  }

  showActive() {
    //ternary to set visibility of active list items to true, else false

  }

  showCompleted() {
    //ternary to set visibility of completed list items to true, else false

  }

  countActive() {
    //count list items in [tasks] with completed: false

  }

  countCompleted() {
    //count list items in [tasks] with completed: true
  }


  render() {
    return (<div className="App container justify-content-center">
      <Header />
      <Form
        input={this.state.input}
        changeHandler={this.changeHandler}
        addItem={this.addItem}
      />
      <ul className="list-group mt-2 mx-auto row">
        {this.state.tasks.map((item) =>
          <li  key={item.id}>
            <div className="list-group-item mb-3">
              {item.name}
              <button data-id={item.id} className="btn btn-sm btn-danger float-right"
                onClick={this.deleteItem(item.id)}>Delete
              </button>
            </div>
          </li>
        )}
      </ul>


      <Footer />
    </div>
    );
  }
}
export default App;

