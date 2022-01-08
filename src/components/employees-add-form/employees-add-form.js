import { v4 as uuidv4 } from 'uuid';
import './employees-add-form.css';
import { Component } from 'react/cjs/react.production.min';

export default class EmployeesAddForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            salary: '',
            id: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            increase: false,
            id: uuidv4()
        })
    }
    resetForm = () => {
        this.setState({
            name: '',
            salary: '',
            id: ''
        })
    }

    render() {
        const { addList } = this.props
        const { name, salary } = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} 
                    />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => {
                                e.preventDefault()
                                addList(this.state)
                                this.resetForm()
                            } }
                    >Добавить</button>
                </form>
            </div>
        )
    }

}