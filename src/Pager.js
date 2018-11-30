import React, {Component} from 'react';

const Pager = props => {

	var children = [];
	//alert(props.cnt_pages);
	for (var i = 1; i <= props.cnt_pages; i++){
		if (i == props.current_page) {				
		    children.push(<span className = 'cur_page'>{i}</span>);
		}  
		else children.push(
		     <span key={i}
                   id={i}
                   onClick={props.changePageClick}>{i}
			 </span>);
			 
	};	
	
    return (
	   //React.createElement('div', null, children), document.getElementById('container')
	    
	    <div className = 'pager'>Страницы:{children.map(item => <span>{item}</span>)}</div>
            
	);   
}
export default Pager;