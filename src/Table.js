import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render() {
        const { characterData, removeUser, editUser, updateUser } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeUser={removeUser} 
					editUser={editUser}
					updateUser={updateUser}
                />
            </table>
        );
    }
}

export default Table;