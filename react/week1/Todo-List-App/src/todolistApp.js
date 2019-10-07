import React, {Component} from 'react';
import TodoItems from "./todoItems";
import "./todoList.css";
class TodoList extends Component {
    constructor(props){
      super(props); 
     
      this.state = {
          todo : [
              'Get out of bed, Wed Sep 13 2017',
              'Brush teeth, Thu Sep 14 2017',
              'Eat breakfast, Fri Sep 15 2017'],
           //increasing array by adding new item 
          items :[]
      };
      this.addItem = this.addItem.bind(this);
        //deleting selected tasks from list despite of initial three tasks
      this.deleteItem=this.deleteItem.bind(this);
    }
    //will add items in the list
    addItem(e){
      if(this._inputElement.value !== ''){
          const newItem = {
              text :this._inputElement.value,
              key:Date.now()

          };
         this.setState((prevState) => {
             return {
                 items : prevState.items.concat(newItem)
             };
         } );
      }
      this._inputElement.value ="";
      console.log(this.state.items);
      e.preventDefault();
    }
    //will delete items from the list
    deleteItem(key){
        console.log('key in deleteItem: ' +key);
        console.log('items at delete: ' +this.state.items);
        console.log('todo at delete: ' +this.state.todo);
        const todosFiltered = this.state.todo.filter(function (item){
            return(item.key !== key)
        } );
        const filteredItems = this.state.items.filter(function (item){
         return(item.key!== key)   
        });
    this.setState({
        todo: todosFiltered,
        items : filteredItems
    })
    }
    render(){
        return(
           <div className='todoListMain'>
               <div className ='header'>
               <p className ='heading'>Todo List APP</p>
                <form onSubmit={this.addItem}>
                    <input ref = {(a) => this._inputElement=a}
                    placeholder='enter tasks'>
                    </input>
                    <button type='submit'>add Task</button>
                </form>
                
               </div>
               <div className ='todoInitial1'>
                      {this.state.todo[0]}

                </div>
                
                <div className ='todoInitial2'>
                     {this.state.todo[1]}
                </div>
                <div className ='todoInitial3'>
                     {this.state.todo[2]}
                </div>
               <TodoItems entry1={this.state.todo} entries = {this.state.items}
               delete={this.deleteItem}/>
          </div>
        );
    }
}

export default TodoList;
