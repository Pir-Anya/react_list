import React, {Component} from 'react';

const TableBody = props => { 
 //alert(props);
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
				<td>
			      <button onClick={() => props.editUser(row)}>Ред.</button>		
				  <button onClick={() => props.removeUser(index)}>Удалить</button>
				</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}
export default TableBody;