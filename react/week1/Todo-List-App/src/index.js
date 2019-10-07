import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList  from './todolistApp';
import * as serviceWorker from './serviceWorker';

//DOM html 
const destination = document.querySelector('#container');
ReactDOM.render(
    <div>
     <TodoList/>
    </div>,
    destination
//<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
