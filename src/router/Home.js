import React, {Component} from 'react';
import {Form, Checkbox} from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'other', value: 'other'},
]

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            description: "",
            check: false,
        }
    }

    handleChange = (e, data) => {
        const {name, value} = data;
        this.setState({
            [name]: value
        })
    }
    onChangeCheckbox = (evt, data) => {
        let checked = data.checked
        this.setState({
            check: checked
        })
    }
    onSave = () => {
        const notify = () => toast.error("Thông tin quan trọng không thể bỏ trống");
        const error =() => toast.error('Bạn đã chắc chắn với các dữ liệu trên')
        const {firstName, lastName, gender, check} = this.state
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('gender', gender);
        if (firstName===''|| lastName==='' || gender===''){notify()}
        if (check===false){error()}
    }


    render() {
        const {firstName, lastName, gender, description} = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label={<label>{"First name"}<span>*</span></label>}
                        placeholder='First name'
                        name={"firstName"}
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label={<label>{"Last name"}<span className={'error'}>*</span></label>}
                        placeholder='Last name'
                        name={"lastName"}
                        value={lastName}
                        onChange={this.handleChange}
                    />
                    <Form.Select
                        fluid
                        label={<label>{"Gender"}<span className={'error-validate'}>*</span></label>}
                        options={options}
                        placeholder='Gender'
                        name={"gender"}
                        value={gender}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.TextArea
                    label='About'
                    placeholder='Tell us more about you...'
                    name={"description"}
                    value={description}
                    onChange={this.handleChange}
                />
                <Checkbox
                    label='TOI DONG Y VOI CAC DU LIEU '
                    onClick={(evt, data) => this.onChangeCheckbox(evt, data)}
                />
                <Form.Button onClick={this.onSave}>Submit</Form.Button>
                <ToastContainer />

            </Form>
        )
    }
}

export default Information