import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UsersTable from '../UsersTable/UsersTable';

const UsersInfo = () => {
    const [allOrders, setAllOrders]= useState([]);

    useEffect(()=>{
        fetch(`https://fast-savannah-55812.herokuapp.com/users`)
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
        console.log('loaded data');
    }, [])

    return (
        <div>
            <h1 className="text-center text-primary my-5">All Notty Users</h1>
            <div className="mb-5 p-5 table-container">
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th className="p-4">Name</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(order=><UsersTable
                            key={order._id}
                            order={order}
                        ></UsersTable>
                            
                        )
                    }  
                </tbody>
                </Table>
            </div>
        </div>
    );
};

export default UsersInfo;