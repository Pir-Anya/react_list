import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
			tel: '',
			adress: ''
        };

        this.state = this.initialState;		
		
    }
	
	
	
	handleChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name] : value
		});
    }
	
	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	}
	
	render() {
		const { name, job,tel,adress } = this.state; 

		return (
			<form >
				<label>Имя</label>
				<input 
					type="text" 
					name="name" 
					value={name} 
					onChange={this.handleChange} />
				<label>Должность</label>
				<input 
					type="text" 
					name="job" 
					value={job} 
					onChange={this.handleChange}/>		
				<label>Телефон</label>
				<input 
					type="text" 
					name="tel" 
					value={tel} 
					onChange={this.handleChange}/>	
				<label>Адрес</label>		
				<input 
					type="text" 
					name="adress" 
					value={adress} 
					onChange={this.handleChange}/>		
				<input 
					type="button" 
					value="Добавить" 
					onClick={this.submitForm} />	
			</form>
		);
	}
}

export default AddUser;