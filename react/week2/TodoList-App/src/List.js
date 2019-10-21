import React from "react";
import Checkbox from "./checkbox";
import Delete from "./delete";


class List extends React.Component{
    

    render(){
      const  {todos}=this.props;
      let noLength;
      todos.length===0?noLength=true:noLength=false;

        return (       
            <div>

            { noLength
              ? <b>No items...</b>
              :<ul>

              {todos.map(item => (
                <li id={item.id} key={item.id}><Checkbox todos={this.props} />{item.description}<Delete myschedule={this.props} /></li>
              ))}
             </ul>  
            }

        
         
           </div>
        )
    }
}

export default List;