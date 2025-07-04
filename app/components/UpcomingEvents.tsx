"use client";
import { Card, ListGroup } from "react-bootstrap";

const events = [
  "Upcoming birthday: [Employee Name]",
  "Project Zenith Kick-off - 5th July",
  "Contract due soon: [Project Name]",
  "Performance reviews completed",
];

export default function UpcomingEvents() {
  return (
    <Card>
      <Card.Header>Upcoming Events</Card.Header>
      <ListGroup variant="flush">
        {events.map((event, i) => (
          <ListGroup.Item key={i}>{event}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
