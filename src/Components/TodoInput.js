import React from "react"

class TodoInput extends React.Component {

    // render() {

    //     const {item, handleChange, handleSubmit} = this.props
    //     return(
    //         <div>
    //             <h1>Todoinput</h1>      
    //             <form onSubmit = {handleSubmit}>
    //                 <div className="form-group">
    //                 <input type="text" className="text-capitalize form-control" placeholder="add a todo item" value={item} onChange = {handleChange} />
    //                 </div>

    //                 <button type="submit" className="btn btn-block btn-success" >Add Item</button>
    //             </form>
    //         </div>
    //     )
    // }

    render() {
        const {item, editItem, handleChange, handleSubmit} = this.props
        return(
            <div>
                <div className="text-center text-capitalize"><h1>TodoInput</h1></div>
                
                <div className = "card card-body my3">
                    <form onSubmit ={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    B<i className="fa fa-book"/>
                                </div>
                            </div>
                            <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value={item} onChange={handleChange} />
                        </div>
                        <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} >{editItem ? "Edit Item" : "Add Item"}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoInput 