import React from 'react';
import { connect } from 'react-redux';
import StudentAction from './redux/student/actions';

const dispatcher = StudentAction.dispatcher;



class Student extends React.Component {

    state = {
        std : [
            { id: 0, name: " ", surname: " ", major: " ", gpa: 0 }

        ]
    }
    




    render() {
        console.log("cccc"+this.props.Student.students.id)
        return (
            <div>
                {
                    this.props.Student.students.map((student, index) => student && (
                        <li key={index}>
                            {student.id} |
                            {student.name} |
                            {student.surname} |
                            {student.major} |
                            {student.gpa} | 
                            <button id={index} onClick={() => this.handleEdit(student.id)}>Edit</button>
                            <button id={index} onClick={this.handleUpdate}>update</button>
                            <button id={index} onClick={this.handleDelete}>delete</button>
                            <br />
                            <br />
                        </li>
                    ))
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchStudents();
        console.log('okokokokok')
    }

    handleEdit = (id) => {
        console.log(id)
        let index = this.props.Student.students.findIndex( (std) => std.id === id)
        console.log("index="+index)
        this.setState({
            // ...std,
             std : this.state.std[index].name

            
        })
        console.log(this.state.std)
     
    }

    handleUpdate = (e) => {
        const student = this.props.Input;
        this.props.updateStudent(e.target.id, student);

    }

    handleDelete = (e) => {
        this.props.deleteStudent(e.target.id)
    }

    
}

// const mapStateToProps = (state) => {
//     return {
//         value : state.Student
//     }
// }

export default connect(state => state, dispatcher)(Student);
