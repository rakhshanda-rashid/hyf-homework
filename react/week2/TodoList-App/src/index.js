import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import List from "./List";




class App extends React.Component{
    state={
        timeCounter: 0,
        todos:[
            {
              "id": 1,
              "description": "Get out of bed",
              "done": true
            },
            {
              "id": 2,
              "description": "Brush teeth",
              "done": false
            },
            {
              "id": 3,
              "description": "Eat breakfast",
              "done": false
            }
          ]
    }
//Time Counter
    componentDidMount() {
        this.timer = setInterval(() => {
          this.setState({ timeCounter: this.state.timeCounter + 1 }); 
        }, 1000);
    }
    

    addItem=(newItem)=>{
      let lastId;
      
      if (this.state.todos.length===0) {
        lastId=0;       
      } else{
        lastId=this.state.todos[this.state.todos.length-1].id;

      }
        const lastTask={id:lastId+1,description:newItem,done:false}
        const NewTodo=this.state.todos.concat(lastTask);
        this.setState({todos:NewTodo})
        console.log(NewTodo)

    }
    checkBox=(msg,id)=>{
       const editDoneItem = this.state.todos.map(todo => {
        if (todo.id === Number(id)) {
        todo = { ...todo, done: msg };
        }
        return todo;
      });
       this.setState({todos:editDoneItem})       

    }
    deleteItem=(idd)=>{
        const newTodos = this.state.todos.filter(toDo => toDo.idd !== idd);
        console.log(newTodos);
        this.setState({ todos: newTodos });
    
      }


    }


    render(){

        return(
              <div className="app">
              <h2>To Do List</h2>
            <p>Time Spent on this web Page {this.state.timeCounter} seconds</p>

              <Header addItem={this.addItem}/>
              <List  todos={this.state.todos} checkBox={this.checkBox} deleteItem={this.deleteItem}/> 
                           
              </div>
        )
    }

}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
