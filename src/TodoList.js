import React, {Component} from 'react'
import Todo from './Todo'
import './TodoList.css'
import NewTodoItem from './NewTodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {TodoItems: []}
        this.addTodo = this.addTodo.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addTodo(newTodo) {
        this.setState({
            TodoItems: [...this.state.TodoItems, newTodo]
        })
    }

    remove(id){
        this.setState({
            TodoItems: this.state.TodoItems.filter(t => t.id !== id)
        })
    }

    update(id, updatedTask){
        const updatedTodos = this.state.TodoItems.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({ TodoItems: updatedTodos })
    }

    toggleCompletion(id){
        const updatedTodos = this.state.TodoItems.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({ TodoItems: updatedTodos })
    }

    render() {
        let todos = this.state.TodoItems.map(todo => {
            return (
            <Todo 
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                removeTodo={this.remove} 
                updateTodo={this.update}
                completed={todo.completed}
                toggleTodo={this.toggleCompletion}
            />
            );
        });
        return (
            <div className="TodoList">
                <h1>Todo List! <span>A Simple React Todo List App.</span></h1>
                <ul className="singleTodo">{todos}</ul>
                <NewTodoItem addItem={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList;