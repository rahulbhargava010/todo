import React from "react"

class TodoItem extends React.Component {

    render() {

        const {title, handleDelete, handleEdit} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        E<i className="fas fa-pen"/>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        D<i className="fas fa-trash"/>
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem 