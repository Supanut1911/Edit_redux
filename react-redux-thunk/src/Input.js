import React from 'react';
import { connect } from 'react-redux';
import InputAction from './redux/input/actions';
import StudentAction from './redux/student/actions';

const inputDispatch = InputAction.dispatcher;
const studentDispatch = StudentAction.dispatcher;

class Input extends React.Component {

  render() {
    console.log("AAA"+this.props.Student.students)
    return (
      <div>
        <input type='number' onChange={this.handleChange} value={this.props.Student.students.id} name='id' placeholder='id'/> <br/>
        <input type='text' onChange={this.handleChange} value={this.props.Student.students.name} name='name' placeholder='name'/> <br/>
        <input type='text' onChange={this.handleChange} value={this.props.Student.students.surname} name='surname' placeholder='surname'/> <br/>
        <input type='text' onChange={this.handleChange} value={this.props.Student.students.major} name='major' placeholder='major'/> <br/>
        <input type='text' onChange={this.handleChange} value={this.props.Student.students.gpa} name='gpa' placeholder='gpa'/> <br/>
        <br/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }

  handleChange = (e) => {
      const {name, value} = e.target;
      switch (name) {
          case 'id': this.props.updateId(value); break;
          case 'name': this.props.updateName(value); break;
          case 'surname': this.props.updateSurname(value); break;
          case 'major': this.props.updateMajor(value); break;
          case 'gpa': this.props.updateGpa(value); break;
      }
  }

  handleAdd = () => {
      const {
          id,
          name,
          surname,
          major,
          gpa
      } = this.props.Input;
      this.props.addStudent({
          id,
          name,
          surname,
          major,
          gpa
      })
  }

}

export default connect(state => state, {
    ...inputDispatch,
    ...studentDispatch
})(Input);
