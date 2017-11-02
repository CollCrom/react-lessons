import React, { Component } from 'react';
import './edit.css';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps, 'next props')
    const state = this.state;
    state.inputValue = nextProps.editedItem;
    this.setState(state)
  }
  handleInput = (e) => {


    if(e.key === "Enter"){
      this.props.editMovie(this.state.inputValue)
    } else {
      const state = this.state;
      state.inputValue = e.target.value
      this.setState(state)
    }

  }
  render() {
    console.log(this.props, ' in render')
    const editClass = this.props.showEdit ? 'Edit' : 'Edit-Hidden';

    return (
      <div className={editClass}>
        <label>Edit Item</label>
        <input type="text" value={this.state.inputValue} onKeyPress={this.handleInput} onChange={this.handleInput}/>
      </div>
      )
  }
}

export default Edit;
