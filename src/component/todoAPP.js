import React, { Component } from 'react';
import './todoAPP.css';

export default class TodoApp extends Component {
  state = {
    newInput: '', 
    editInput: '', 
    arr: [],
    editingIndex: null,
    showmodal: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  dataFetching = event => {
    event.preventDefault();
    const { newInput } = this.state;

    this.setState(prevState => ({
      arr: [...prevState.arr, newInput],
      newInput: ''
    }));
  };

  deleteData = key => {
    this.setState(prevState => ({
      arr: prevState.arr.filter((data, index) => index !== key)
    }));
  };

  updateData = index => {
    this.setState({
      editingIndex: index,
      showmodal: true,
      editInput: this.state.arr[index] 
    });
  };

  handleUpdateItem = () => {
    const { arr, editingIndex, editInput } = this.state;
    const newItems = [...arr];
    newItems[editingIndex] = editInput;

    this.setState({
      arr: newItems,
      editingIndex: null,
      showmodal: false
    });
  };

  handleCloseModal = () => {
    this.setState({
      showmodal: false
    });
  };

  render() {
    const { newInput, arr, editingIndex, editInput, showmodal } = this.state;

    return (
      <div className="todo-container">
        <h1>Todo APP</h1>

        <form onSubmit={this.dataFetching}>
          <input
            
              type="text"
              name="newInput"
              value={newInput}
              onChange={this.handleChange}
              placeholder="Enter your name"
              
            />
        </form>

        <ul className="todo-list">
          {arr.map((item, index) => (
            <li key={index}>
              {index === editingIndex && showmodal ? (
                <>
                  <input
                    id='in'
                    type="text"
                    name="editInput"
                    value={editInput}
                    onChange={this.handleChange}
                  />
                  <button onClick={this.handleCloseModal}>Cancel</button>
                  <button onClick={this.handleUpdateItem}>Update</button>
                  </>
              ) : (
                <>
                  {item}
                  <div className="icon">
                    <i
                      id="icon-delete"
                      onClick={() => this.deleteData(index)}
                      className="fa-solid fa-trash"
                    ></i>
                    <i
                      id="icon-edit"
                      onClick={() => this.updateData(index)}
                      className="fa-solid fa-pen-to-square"
                    ></i>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
