import React from 'react';
import { Button } from 'react-bootstrap';

const home = () => {
    return (
        <div className="container">
            <h1 className="home__header">Home Page</h1>
            <Button variant="secondary">Secondary</Button>
        </div>
    );
};

export default home;