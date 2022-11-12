<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        userInfo,
        cart: { shippingAddress },
    } = state;

    const [ fullName, setFullName ] = useState(shippingAddress.fullName || '');
    const [ address, setAddress ] = useState(shippingAddress.address || '');
    const [ island, setIsland ] = useState(shippingAddress.island || '');
    const [ postalCode, setPostalCode ] = useState(shippingAddress.postalCode || '');
    const [ atoll, setAtoll ] = useState(shippingAddress.atoll || '');

    useEffect( () => {
        if (!userInfo) {
            navigate('/signin?redirect=/shipping');
        };
    }, [userInfo, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                fullName,
                address,
                island,
                postalCode,
                atoll,
            },
        });
        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({
                fullName,
                address,
                island,
                postalCode,
                atoll,
            })
        );
        navigate('/payment');
    };

    return (
        <div>
            <Helmet>
                <title>Shipping Address</title>
            </Helmet>

            <CheckoutSteps step1 step2></CheckoutSteps>

            <div className='container small-container'>
                <h1 className='my-3'>Shippinng Address</h1>

                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control value={fullName} onChange={ (e) => setFullName (e.target.value) } required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={address} onChange={ (e) => setAddress(e.target.value) } required />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controId="island">
                        <Form.Label>Island</Form.Label>
                        <Form.Control value={island} onChange={ (e) => setIsland(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controId="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control value={postalCode} onChange={ (e) => setPostalCode(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controId="atoll">
                        <Form.Label>Atoll</Form.Label>
                        <Form.Control value={atoll} onChange={ (e) => setAtoll(e.target.value)} required />
                    </Form.Group>

                    <div className="mb-3">
                        <Button variant="primary" type="submit">
                            Continue
                        </Button>
                    </div>
                
                </Form>
            </div>
        </div>
    );
};
=======
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        userInfo,
        cart: { shippingAddress },
    } = state;

    const [ fullName, setFullName ] = useState(shippingAddress.fullName || '');
    const [ address, setAddress ] = useState(shippingAddress.address || '');
    const [ island, setIsland ] = useState(shippingAddress.island || '');
    const [ postalCode, setPostalCode ] = useState(shippingAddress.postalCode || '');
    const [ atoll, setAtoll ] = useState(shippingAddress.atoll || '');

    useEffect( () => {
        if (!userInfo) {
            navigate('/signin?redirect=/shipping');
        };
    }, [userInfo, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                fullName,
                address,
                island,
                postalCode,
                atoll,
            },
        });
        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({
                fullName,
                address,
                island,
                postalCode,
                atoll,
            })
        );
        navigate('/payment');
    };

    return (
        <div>
            <Helmet>
                <title>Shipping Address</title>
            </Helmet>

            <CheckoutSteps step1 step2></CheckoutSteps>

            <div className='container small-container'>
                <h1 className='my-3'>Shippinng Address</h1>

                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control value={fullName} onChange={ (e) => setFullName (e.target.value) } required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={address} onChange={ (e) => setAddress(e.target.value) } required />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controId="island">
                        <Form.Label>Island</Form.Label>
                        <Form.Control value={island} onChange={ (e) => setIsland(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controId="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control value={postalCode} onChange={ (e) => setPostalCode(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controId="atoll">
                        <Form.Label>Atoll</Form.Label>
                        <Form.Control value={atoll} onChange={ (e) => setAtoll(e.target.value)} required />
                    </Form.Group>

                    <div className="mb-3">
                        <Button variant="primary" type="submit">
                            Continue
                        </Button>
                    </div>
                
                </Form>
            </div>
        </div>
    );
};
>>>>>>> 2b4833ffffdad0c81e5751f306088b469beb9cdd
