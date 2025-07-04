"use client";
import { Card, ListGroup } from "react-bootstrap";

const actions = [
  "Arjun Sharma assigned to Project Yantra",
  "Priya Kapoor promoted to Sr. Developer",
  "Rohan Verma joined the team",
  "Remote work policy updated",
  "Q3 Performance reviews completed",
];

export default function RecentActivity() {
  return (
    <Card>
      <Card.Header>Recent Actions</Card.Header>
      <ListGroup variant="flush">
        {actions.map((item, i) => (
          <ListGroup.Item key={i}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
