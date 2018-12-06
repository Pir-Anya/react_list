import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import AddUser  from './AddUser';
import Pager from './Pager';
import EditUser from './EditUser'
import customData from './data.json';


class App extends Component {
	
	
    state = {
        //данные из файла
		characters : customData,	
		current_page : 1,
		cnt_on_page  : 7,		
		//режим окна(adding или editing)
		action : 'adding',
		edit_user : null		
	}
	
	//удаление 
	removeUser = index => {		
      const { characters } = this.state;
      this.setState({
        characters: characters.filter((character, i) => { 
            return i !== index;
        })
      });
    }
	
	//переход в режим редактирования
	editUser = user => {
		this.setState({ 
			action : 'editing',
			edit_user :user
		});
		this.render();
    }
	
	//здесь происходит апдейт записи
	updateUser = (id, updatedUser) => {
	    this.setState({ 
			action : 'adding',
			edit_user : updatedUser,
			characters : this.state.characters.map(user => (user.id === updatedUser.id ? updatedUser : user))
		});
		this.state.characters.map(user => (user.id === id ? updatedUser : user));
	}
	
	//переход на другую страницу
	changePageClick =  event => {
		this.setState({
		  current_page: Number(event.target.id)
		});
    }
	
	//переход в режим добавления
	setAdding = event => {
		this.setState({action : 'adding'});
	}
	
	//добавление
	handleSubmit = character => {
		this.setState({characters: [...this.state.characters, character]});
	}
	
    render() {	
	
		const start = this.state.cnt_on_page *(this.state.current_page - 1);
		return (
		<div>
		<div class="container-fluid rc-intro">
			<div class="container">
					  
				<img src={logo} className="App-logo" alt="logo" />
				<h1 class="rc-title">Список сотрудников</h1>

				<p class="rc-description">CRUD</p>
			</div>
		</div>
		
			<div className="container">
			
		
			    <div className="half">
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
				<div className="manage" >
				  {this.state.action == 'editing' ? (
					<div>
					  <h2>Изменить</h2>
					  <EditUser 
					     editUser={this.editUser}
						 updateUser={this.updateUser}
						 user = {this.state.edit_user}
						 setAdding = {this.setAdding}
					  />
					</div>
				  ) : (
					<div>
					  <h2>Добавить</h2>
					  <AddUser handleSubmit={this.handleSubmit}/>
					</div>
				  )}
				</div>	
				
			</div>	
		</div>		
		);   
    }
}

export default App;
