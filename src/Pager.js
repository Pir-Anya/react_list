import React, {Component} from 'react';

const Pager = props => {

	var children = [];
	//alert(props.cnt_pages);
	for (var i = 1; i <= props.cnt_pages; i++){
		children.push(React.createElement('span',null,i));
	};	
	
    return (
	   //React.createElement('div', null, children), document.getElementById('container')
	   
	    <div>{children.map(item => <span>{item}</span>)}</div>
            
	);   
}
export default Pager;