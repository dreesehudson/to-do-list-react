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

## Title -> Header.js

function Header(){
    Header Text
}

 no defined methods.

## Input Field w/ Submit Button -> Form.js

class Form extends Component

WireFrame:
Input Text Box | Priority Buttons | Submit Button

Methods:
constructor()
- TaskName: TextInput
- PriorityColor: 🔴, 🟡, 🟢
- Completed: True/False

render()

addToDo()
- Create new List object
- Push new List object to List Array
- Sort List array based on Priority
- tell List to re-render with updated array

## List of Created Todo's -> List.js

class List extends Component

ToDo WireFrame
checkbox | TaskName | PriorityColor | Delete Button
  
Initialize Empty List Array

List Methods:
- completeTodo()
  - Add Strike-through Text
  - Change State from Active to Completed
  
- reactivateTodo()
  - remove strike-through
  - Change State from Completed to Active

- deleteTodo()
  - Erase toDo from List

## Info and Filter Row -> Footer.js
class Footer extends Component

- Filter Options
  - All
    - Show Active and Completed Tasks
  - Active Only
    - Show Active Tasks
    - Hide Completed Tasks
  - Completed Only
    - Hide Active Tasks
    - Show Completed Tasks