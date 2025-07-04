"use client";
import { Card, Row, Col } from "react-bootstrap";

const stats = [
  { title: "Total Employees", value: 750 },
  { title: "New Joinees This Month", value: 15 },
  { title: "Ongoing Projects", value: 10 },
  { title: "Contracts Due", value: 5 },
  { title: "Total Employees", value: 750 },
  { title: "New Joinees This Month", value: 15 },
  { title: "Ongoing Projects", value: 10 },
  { title: "Contracts Due", value: 5 },
  { title: "Total Employees", value: 750 },
  { title: "New Joinees This Month", value: 15 },
  { title: "Ongoing Projects", value: 10 },
  { title: "Contracts Due", value: 5 },
];

export default function DashboardStats() {
  return (
    <Row>
      {stats.map((stat, i) => (
        <Col md={3} key={i}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="fs-6 text-muted">{stat.title}</Card.Title>
              <Card.Text className="fs-3 fw-bold">{stat.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
