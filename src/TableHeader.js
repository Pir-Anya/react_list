import React, {Component} from 'react';
const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>ФИО сотрудника</th>
                <th>Должность</th>
				<th>Действия</th>
            </tr>
        </thead>
    );
}

export default TableHeader;