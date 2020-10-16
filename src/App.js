import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Form from './Components/Form.js'
import List from './Components/List.js'
import Footer from './Components/Footer.js'


class App extends Component {
  constructor(props) {
    super(props)
    //array is populated from Form Object
    this.state = {
      newTask: "",
      tasks: []
    }

  }
  
  componentDidMount() {
    
  }
  
  componentWillUnmount() {
    
  }
  
  render() {
    return (<div className="App container">
      <Header />
      <Form
        newTask = {this.state.newTask}
        tasks = {this.state.tasks} />
      {/* <List 
        tasks = {this.state.tasks} /> */}
      <Footer />
    </div>
    );
  }
}
export default App;

// //located on Form, captures keyboard input into state
// this.inputTextHandler = this.inputTextHandler.bind(this);
// //located on Form, creates and sends task item to state[task]
// this.addItem = this.addItem.bind(this);

// //located on List, applied to "X" button to remove item from state[tasks]
// this.deleteItem = this.deleteItem.bind(this);
// //located on List, applied to checkbox when unchecked of each task, makes completed: true and applies strike-through
// this.completeItem = this.completeItem.bind(this);
// //located on List, applied to checkbox when checked of each task, makes completed: false and removes strike-through
// this.activateItem = this.activateItem.bind(this);

// //located on Footer, shows all tasks
// this.showAll = this.showAll.bind(this);
// //located on Footer, shows only active tasks
// this.showActive = this.showActive.bind(this);
// //located on Footer, shows only completed tasks
// this.showCompleted = this.showCompleted.bind(this);
// //located on Footer, counts active tasks
// this.countActive = this.countActive.bind(this);
// //located on Footer, counts completed tasks
// this.countCompleted = this.countCompleted.bind(this);