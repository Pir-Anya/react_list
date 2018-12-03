import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import AddUser  from './AddUser';
import Pager from './Pager';
import EditUser from './EditUser'


class App extends Component {
    state = {
       characters : [
				{
					'id' : 1,
					'name': 'Иван Васильевич',
					'job': 'санитар',
					'tel': '',
					'adress': ''
				},
				{
					'id' : 2,
					'name': 'Денис Игоревич',
					'job': 'врач',
					'tel': '',
					'adress': ''
				},
				{
					'id' : 3,
					'name': 'Роман Петрович',
					'job': 'программист','tel': '',
					'adress': ''
				},
				{
					'id' : 4,
					'name': 'Марь Иванна',
					'job': 'бухгалтер',
					'tel': '',
					'adress': ''
				},
				{
					'id' : 5,
					'name': 'Карен Араевич',
					'job': 'инструктор',
					'tel': '',
					'adress': ''
				},
				{
					'id' : 6,
					'name': 'Василиса Петровна',
					'job': 'кадровик',
					'tel': '',
					'adress': ''
				},
				{
					'id' : 7,
					'name': 'Иван Иванович',
					'job': 'сантехник',
					'tel': '',
					'adress': ''
				},
				{
					'id' : 8,
					'name': 'Алексей',
					'job': 'водитель',
					'tel': '',
					'adress': ''
				}
			],
		current_page : 1,
		cnt_on_page  : 5,
		action : 'adding',
		edit_user : null
		
	}	
	
	
	
	removeUser = index => {
      const { characters } = this.state;

      this.setState({
        characters: characters.filter((character, i) => { 
            return i !== index;
        })
      });
    }
	
	editUser = user => {
     
	// alert(user.id);
		this.setState({ 
			action : 'editing',
			edit_user :user
		});
		
		//setCurrentUser({ id: user.id, name: user.name, adress: user.adress, tel: user.tel, job: user.job })
		//return true;
    }
	
	updateUser = (id, updatedUser) => {
	    this.setState({ 
			action : 'adding',
			edit_user : updatedUser,
			characters : this.state.characters.map(user => (user.id === id ? updatedUser : user))
		});
		this.state.characters.map(user => (user.id === id ? updatedUser : user));
		
		//alert(updatedUser.id);
	    //setUsers(characters.map(user => (user.id === id ? updatedUser : user)))
	}
	
	changePageClick =  event => {
		this.setState({
		  current_page: Number(event.target.id)
		});
    }
	
	handleSubmit = character => {
		this.setState({characters: [...this.state.characters, character]});
	}
	
    render() {	

		const start = this.state.cnt_on_page *(this.state.current_page - 1);
		return (
			<div className="container">
			    <div className="flex-large">
					<Table				    
						characterData={this.state.characters.slice(start,start+this.state.cnt_on_page)}
						removeUser={this.removeUser} 
						editUser={this.editUser} 
						updateUser={this.updateUser} 
					/>
					<Pager 
						current_page={this.state.current_page}
						cnt_pages={Math.ceil(this.state.characters.length/this.state.cnt_on_page)}
						changePageClick={this.changePageClick} 					
					/>
					
				</div>	
				<div className="flex-large">
				  {this.state.action == 'editing' ? (
					<div>
					  <h2>Редактирование</h2>
					  <EditUser 
					     editUser={this.editUser}
						 updateUser={this.updateUser}
						 user = {this.state.edit_user}
						
					  />
					</div>
				  ) : (
					<div>
					  <h2>Добавление</h2>
					  <AddUser handleSubmit={this.handleSubmit}/>
					</div>
				  )}
				</div>	
				
			</div>	
		);   
    }
}

export default App;
