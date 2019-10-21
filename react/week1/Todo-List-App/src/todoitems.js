import React from 'react';

// rendering item from the list
class Task extends React.Component {
    render() {
    const { task: { title, date } } = this.props;
    console.log(this.props);
        return ( 
            <label className="item">
            <input type="checkbox"/> {title}, {date}
            </label>
        )
    }
}

export default Task;