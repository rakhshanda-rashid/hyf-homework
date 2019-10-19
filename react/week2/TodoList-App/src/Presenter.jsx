import React from 'react'

const Presenter = (props) => {
    const todo = props.todo
    var options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
    }

    return <div id="mainContainer">
        <form id="form">
            <label className="label">Enter description:</label><br />
            <input placeholder="title" className='input'
                onChange={props.onChange}></input><br />
            {/* <input placeholder="data" className='input'
                onChange2={props.onChange2}></input><br /> */}
            <button onClick={props.addTodo} className="button">add</button>
        </form>

        <div>
            <h1 id='title'>My ToDo List</h1>
            <ul id='container'>
                {todo.map((item, idx) =>
                    <div id={`todoContainer${idx}`} className='todos'>
                        <li className="firstLi" style={item.done ? { color: "blue" } : { textDecoration: "line-through", color: "red" }} key={idx}>ToDo: {item.title}</li>
                        <li key={idx}
                            style={item.done ? { color: "black" } : { textDecoration: "line-through" }}>
                            Date: {item.date.toLocaleDateString('en-US', options)}
                        </li>
                        <div className="ActionBtn">
                            <button onClick={() => { props.onClick2(idx) }} id="editBtn">done</button>
                            <button key={idx} id="deleteBtn" onClick={() => { props.onClick(idx) }}>delete</button>
                        </div>
                    </div>)}
            </ul>
        </div>
    </div>
}

export default Presenter