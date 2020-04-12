import React from "react"

import TodoItem from "./TodoItem"

class TodoList extends React.Component {

    render() {
        const {items, handleDelete, clearList, handleEdit} = this.props
        let todoItems = items.map( item => <TodoItem handleEdit={() => handleEdit(item.id)} handleDelete={() => handleDelete(item.id)} title={item.title} />)
        return(
            <div>
                <ul className="list-group" >
                    {todoItems}
                </ul>
                
                <button type="button" className="btn btn-block btn-danger" onClick={clearList}> Clear List</button>
            </div>
        )
    }
}

export default TodoList 