import React from "react";
import { Container, Input, FormGroup, Label, Button, Form } from "reactstrap";
import PrevPage from "../PrevPage/PrevPage";
import Loader from "../Loader/Loader";

class AddTransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      transaction: "",
      type: "Sales",
      amount: 0,
      isLoading: false,
      loaderHidden: true,
    };
  }

  loadTransactions = () => {};
  onFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTransaction = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, loaderHidden: false });
    fetch("https://tatak-cash-api.herokuapp.com/addtransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        date: new Date(),
        transaction: this.state.transaction,
        type: this.state.type,
        amount: this.state.amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ isLoading: false });
        this.props.loadTransactions();
      })
      .catch(console.log);
  };
  render() {
    return (
      <Container>
        <h1 className="text-center mb-3">Transaction Form</h1>
        <Container className="w-75 mx-auto">
          <Form onSubmit={(e) => this.addTransaction(e)}>
            <FormGroup>
              <Label>Name:</Label>
              <Input
                type="text"
                required
                name="name"
                onKeyUp={this.onFieldChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Transaction/Description:</Label>
              <Input
                type="textarea"
                required
                name="transaction"
                onKeyUp={this.onFieldChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Transaction Type:</Label>
              <Input
                type="select"
                required
                name="type"
                onChange={this.onFieldChange}
              >
                <option value="Sales">Sales</option>
                <option value="Expenses">Expenses</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Amount:</Label>
              <Input
                type="number"
                required
                name="amount"
                onKeyUp={this.onFieldChange}
              />
            </FormGroup>
            <FormGroup>
              <Loader
                isLoading={this.state.isLoading}
                text="Saved!"
                hidden={this.state.loaderHidden}
              />
            </FormGroup>
            <PrevPage color="primary">Cancel</PrevPage>
            <Button type="submit" color="success" className="ml-3">
              Save
            </Button>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default AddTransactionForm;
