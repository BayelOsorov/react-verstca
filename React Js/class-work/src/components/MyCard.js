import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCard = ({ item }) => {
    return (

        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>County: {item.name}</Card.Title>
                    <Card.Text>
                        Capital: {item.capital} <br />
                        Population: {item.population}
                    </Card.Text>


                </Card.Body>
                <Card.Footer>
                    <Link to={`/edit/${item.id}`}>
                        <Button variant='warning' >Edit</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default MyCard;