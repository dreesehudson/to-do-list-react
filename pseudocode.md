# To Do List

## Index

render()
    - App

## App

render()
    - Header
    - Form
    - List
    - Footer

## Header -> Header.js

function Header(){
    Web Page Title
}

 No defined methods.

## Form Input Field w/ Submit Button -> Form.js

class Form extends Component


Methods:
constructor() {

- TaskName: TextInput
- PriorityColor: 🔴, 🟡, 🟢
- Completed: False
- Visibility: True
}

- render() {
  - WireFrame:
    - Input Text Box | Priority Buttons 🔴 🟡 🟢 | Submit Button <- onClick="addToDo()"
  - return(HTML)
}

- addToDo() {
  - Create new List object
  - Push new List object to [Tasks] Array
}

## List of Created To Do's -> List.js

class List extends Component

- constructor(){
    -Initialize Empty [Tasks] Array
}

- render() {
  - ToDo WireFrame
    - checkbox | TaskName (display only) | PriorityColor (display only) | Delete Button <- onClick="deleteToDo()"
        ^- onClick="completeToDo" or "reactivateToDo"
    return(HTML)
}
List Methods:

- completeTodo()
  - Add strike-through Text
  - Change completed from false to true
  
- reactivateTodo()
  - Remove strike-through
  - Change completed from true to false

- deleteTodo()
  - Erase target toDo from [Tasks]

## Info and Filter Row -> Footer.js

class Footer extends Component

- render() {
  - Wireframe:
    Remaining Active Task Count: # || Filter: All | Active | Completed || Completed Task Count: #

  - return(HTML)
}

- showAll(){
  - set visibility of all list items to true
}

- showActive(){
  - ternary to set visibility of active list items to true, else false

}

- showCompleted(){
  - ternary to set visibility of completed list items to true, else false

}

- countActive(){
  - count list items in [tasks] with completed: false
}

- countCompleted(){
  - count list items in [tasks] with completed: true
}