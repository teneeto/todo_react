import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }
onSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({title: ''});
}

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
        <input type="text" name='title' value = {this.state.title} onChange={this.onChange} placeholder="Add Todo ..." style={{ flex: '10', padding: '10px' }} />
        <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
      </form>
    )
  }
}
export default AddTodo;