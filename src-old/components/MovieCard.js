import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';

const MovieCard = ({title, category, likes, dislikes, onDelete, onLike, onDislike, id}) => {
    return (
        <Col md="auto">
            <Card className="my-2">
                <Card.Title className="mx-3">{title}</Card.Title>
                <Card.Body>
                    <Card.Text>
                        {`Category: ${category}`}
                    </Card.Text>
                    <Row className="mx-1">
                        <Button variant="light" as={Col}
                                onClick={() => onLike(id)}>
                            <i className="fas fa-thumbs-up"></i>
                        </Button>
                        <Button variant="light" as={Col} className="mx-2" disabled>{likes}</Button>
                        <Button variant="light" as={Col} onClick={() => onDislike(id)}>
                            <i className="fas fa-thumbs-down"></i>
                        </Button>
                        <Button variant="light" as={Col} className="mx-2" disabled>
                            {dislikes}
                        </Button>
                        <Button variant="light" as={Col} onClick={() => onDelete(id)}>
                            <i className="fas fa-trash"></i>
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MovieCard;
