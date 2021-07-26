import React, {Component} from 'react';
import {v4 as uuid} from "uuid"; 
import './NewTodoItem.css';

class NewTodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem({...this.state, id: uuid(), completed: false });
        this.setState( {task: ""} )
    }

    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor='task'> Todo Item </label>
                <input 
                        type="text" 
                        name="task" 
                        id='task'
                        value={this.state.task}
                        onChange={this.handleChange}
                        />
                <button value="New Todo">Add Todo</button>
            </form>
        )
    }
}

export default NewTodoItem;