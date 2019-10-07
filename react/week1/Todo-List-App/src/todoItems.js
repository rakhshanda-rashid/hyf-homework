import React, {Component} from "react";
class TodoItems extends Component {
    constructor(props){
        super(props);
        this.createTasks =this.createTasks.bind(this);
       // this.todoInitialDelete=this.todoInitialDelete.bind(this);
    }
    delete(key){
        console.log('key is' +key);
        
        this.props.delete(key);
    }
    
    createTasks(item){
        return <li onClick={() =>this.delete(item.key)}
         key={item.key}>{item.text}</li>
    }
    // todoInitialDelete(item){
    //     this.props.delete(item);
    // }
    render(){
        const todoEntries = this.props.entries;
        //const todoInitialTasks = this.props.entry1;
        //const todoInitial=this.props.entry1;
        const listItems = todoEntries.map(this.createTasks);
        //const initialListItems = todoInitialTasks.map(this.todoInitialDelete);

        return(
             
            <ul className="theList">
             {listItems}
            </ul>
    );
}
}

export default TodoItems;
