import React from 'react';
import './App.css';

import TodoList from "./Components/TodoList"
import TodoInput from "./Components/TodoInput"

import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from "uuid"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      items: [],
      id: uuidv4(),
      item: '',
      editable: false
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({
      item : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    
    const newItem = {
      title: this.state.item,
      id: this.state.id
    }

    console.log(newItem)

    let updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      id: uuidv4(),
      item: '',
      editable: false
    })

    console.log(this.state)

  }

  handleEdit = (id) => {

    const filteredItem = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)

    this.setState({
       item: selectedItem.title,
       items: filteredItem,
       editable: true,
       id: id
     })
  }

  handleDelete = (id) => {
    let filteredItem = this.state.items.filter(item => item.id !== id )

    this.setState({
      items: filteredItem
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  render() {
    return (
      <div className="container">
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editable} />
                
          <TodoList items={this.state.items}  handleEdit={this.handleEdit} handleDelete={this.handleDelete} clearList={this.clearList} />
      </div>
    )
  }
  
}

export default App;
