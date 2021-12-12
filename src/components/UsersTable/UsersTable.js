import React from 'react';

const UsersTable = ({order}) => {
    const {name, email, password} = order;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
        </tr>
    );
};

export default UsersTable;