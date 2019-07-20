import React, { Component } from 'react';
import propTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      display: 'flex',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #cc dotted',

      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  markComplete(e) {

  }



  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        {' '}
        <p>{title}</p>
      </div >
    )
  }
}


TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem;