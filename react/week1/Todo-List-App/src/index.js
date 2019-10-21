import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './todoitems.js';

//rendering the list
class TodoList extends React.Component {
    render () {
        const todos = [{
            title: "Get out of bed",
            date: "Wed Sep 13 2017"
        },
        {
            title: "Brush teeth",
            date: "Thu Sep 14 2017"
        },
        {
            title: "Eat breakfast",
            date: "Fri Sep 15 2017"
        }];
        return (
            <div>
                <h1>To Do List</h1>
                <form className="todos"> 
                    { todos.map(todoItem => (
                        <Task task={todoItem}/>
                    ))
                    }
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));