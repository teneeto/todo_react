import React, { Component } from 'react';
import propTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #cc dotted',

      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }



  render() {
    return (
      <div style={this.getStyle()}>
        <input type="chekbox" />
        <p>{this.props.todo.title}</p>
      </div >
    )
  }
}


TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem;