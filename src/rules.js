import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function Rules() {
  return (
    <div>
      <h1>How to Play</h1>

      <ListGroup variant="flush">
        <ListGroup.Item>Make an account to track your crosswords.</ListGroup.Item>
        <ListGroup.Item>Play alone or with friends!</ListGroup.Item>
        <ListGroup.Item>Find a random game to play against others, or join a game.</ListGroup.Item>
        <ListGroup.Item>Test your vocabulary with puzzles.</ListGroup.Item>
        <ListGroup.Item>Have Fun!</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Rules;