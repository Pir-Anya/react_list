import React, { Component } from 'react'

class EditUser extends Component {
    constructor(props) {
        super(props);	
		
		const user = this.props.user;	
		
		this.initialState = {
            name: user.name,
            job: user.job,
			tel: user.tel,
			adress: user.adress,
			id: user.id
        };

        this.state = this.initialState;
		

    }
	
	
	handleInputChange = event => {
		const { name, value } = event.target
		
		this.setState({
			[name] : value
		});
		
		
	}
	
	

	render() {
		
		const user = this.props.user;	
		return (
		
			<form onSubmit={event => {
				event.preventDefault()
				//alert(user.id);
				this.props.updateUser(user.id, this.state)
				
			    }}>
				<label>Имя</label>
				<input 
				    type="hidden" 
					name="id"
					value = {user.id}
					/>
				<input 
					type="text" 
					name="name" 
					defaultValue={user.name}
					onChange={this.handleInputChange}
					/>
				<label>Должность</label>
				<input 
					type="text" 
					name="job" 
					defaultValue={user.job}
					onChange={this.handleInputChange}
					/>		
				<label>Телефон</label>
				<input 
					type="text" 
					name="tel" 
					defaultValue={user.tel}
					onChange={this.handleInputChange}
					/>	
				<label>Адрес</label>		
				<input 
					type="text" 
					name="adress" 
					defaultValue={user.adress}
					onChange={this.handleInputChange}
					/>		
				<input 
					type="submit" 
					value="Сохранить" 
					 />	
				<input 
					type="button" 
					value="Отмена" 
					/>
			</form>
			
		)	
		
	}
}

export default EditUser