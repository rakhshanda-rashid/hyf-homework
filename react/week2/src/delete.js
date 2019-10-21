import React from 'react';

class Delete extends React.Component{


     delete=(e)=>{
        const idNumLi=e.target.parentElement.id;
        console.log(idNumLi)
        this.props.myschedule.deleteItem(idNumLi)

     }

    render(){
        return(
            
            
               <button style={{ marginLeft: "100px"}} onClick={this.delete}>Delete</button>
            
              
            
        )
    }
}

export default Delete;
