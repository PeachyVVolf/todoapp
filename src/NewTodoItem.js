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
        this.props.addItem({...this.state, id: uuid()});
        this.setState( {task: ""} )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'> Todo Item: 
                    <input 
                        type="text" 
                        name="task" 
                        id='task'
                        value={this.state.task}
                        onChange={this.handleChange}
                        />
                </label>
                <input type="submit" value="Add Todo" />
            </form>
        )
    }
}

export default NewTodoItem;