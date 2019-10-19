import React from 'react'
import Presenter from './Presenter'

const todos = [
    {
        title: 'Eat breakfast',
        date: new Date(),
        done: true
    },
    {
        title: 'Brush teeth',
        date: new Date(),
        done: true
    },
    {
        title: 'Read book',
        date: new Date(),
        done: true
    },
    {
        title: 'Get out of bed',
        date: new Date(),
        done: true
    },
]

// 

class Title extends React.Component {
    state = {
        title: '',
        time: '',
        array: todos,
    }

    addTodo = (e) => {
        const test = {
            title: this.state.title,
            date: this.state.time,
            done: true
        }

        this.setState({ array: [...this.state.array, test] })
        e.preventDefault()
    }

    deleteItem = (idx) => {
        console.log(idx)
        const array = [...this.state.array]
        array.splice(idx, 1)
        // const arr = [...this.state.array].filter((item,index) => {
        //   return  index !== idx
        // }) 
        this.setState({ array })
    }

    makeDone = (idx) => {
        console.log(idx)
        // const array = [...this.state.array].map((item, index) => {
        //     if (index == idx) {

        //     }
        // })
        const obj = {...this.state.array[idx]}
        obj.done = false

        const newArray = [...this.state.array]
        newArray[idx] = obj

        this.setState({array: newArray})
      
    }

    render() {
        return <Presenter
            todo={this.state.array}
            addTodo={this.addTodo}
            onChange={(e) => {
                this.setState({ title: e.target.value },
                    () => { console.log(this.state.title) })
            }}
            // onChange2={(e) => {
            //     this.setState({time: Date(e.target.value).toDateString()}, console.log(this.state.time))
            // }}
            onClick={this.deleteItem}
            onClick2={this.makeDone}
        />
    }
}

export default Title;