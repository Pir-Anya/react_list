import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import Pager from './Pager';


class App extends Component {
    state = {
       characters : [
				{
					'name': 'Иван Васильевич',
					'job': 'санитар'
				},
				{
					'name': 'Денис Игоревич',
					'job': 'врач'
				},
				{
					'name': 'Роман Петрович',
					'job': 'программист'
				},
				{
					'name': 'Марь Иванна',
					'job': 'бухгалтер'
				},
				{
					'name': 'Карен Араевич',
					'job': 'инструктор'
				},
				{
					'name': 'Василиса Петровна',
					'job': 'кадровик'
				},
				{
					'name': 'Иван Иванович',
					'job': 'сантехник'
				},
				{
					'name': 'Алексей',
					'job': 'водитель'
				}
			],
		current_page : 1,
		cnt_on_page  : 5
		
	};	
	
	removeCharacter = index => {
      const { characters } = this.state;

      this.setState({
        characters: characters.filter((character, i) => { 
            return i !== index;
        })
      });
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
	//	const cnt_pages = Math.floor(this.state.characters/this.state.cnt_on_page) ;
		return (
			<div className="container">
				<Table				    
					characterData={this.state.characters.slice(start,start+this.state.cnt_on_page)}
					removeCharacter={this.removeCharacter} 
				/>
				
				<Form handleSubmit={this.handleSubmit}/>
			
				<Pager 
					current_page={this.state.current_page}
					cnt_pages={Math.ceil(this.state.characters.length/this.state.cnt_on_page)}
					changePageClick={this.changePageClick} 					
				/>
			</div>	
		);   
    }
}

export default App;
