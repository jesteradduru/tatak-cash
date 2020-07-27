import React from "react";
import { Container, Table, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
const Transactions = ({ transactions, onLogout, coh, sales, expenses }) => {
  const transaction_lists = transactions.map((transaction) => {
    return (
      <tr
        key={transaction.id}
        className={transaction.type === "Expenses" ? "bg-danger" : "bg-success"}
      >
        <td>{transaction.name}</td>
        <td>{transaction.trans_date}</td>
        <td>{transaction.transaction}</td>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  });
  return (
    <Container>
      <h1 className="text-center">Tatak Clothing Transactions</h1>
      <div className="d-flex">
        <Link to="/addtransaction" className="ml-auto">
          <Button color="primary">Add Transaction</Button>
        </Link>
        <Button
          color="danger"
          className="ml-3"
          onClick={() => {
            onLogout();
          }}
        >
          Logout
        </Button>
      </div>
      <Table className="mt-4" dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Transaction</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{transaction_lists}</tbody>
      </Table>
      <Row>
        <Col>
          <h4>
            Sales: <span className="text-info">{sales}</span>
          </h4>
        </Col>
        <Col>
          <h4>
            Expenses: <span className="text-danger">{expenses}</span>
          </h4>
        </Col>
        <Col>
          <h4>
            Cash-On-Hand: <span className="text-success">{coh}</span>
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions;
