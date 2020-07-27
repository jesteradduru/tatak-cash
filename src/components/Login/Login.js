import React from "react";
import { Input, Button, Card, FormGroup, Form } from "reactstrap";
import ErrorMessage from "../ErroMessage/ErrorMessage";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }
  onLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.verified) {
          this.props.onLogin();
          this.props.loadTransactions();
        } else {
          this.setState({ error: data });
        }
      })
      .catch(console.log);
  };

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Card
        className="mx-auto py-5 px-4 shadow mt-md-5 my-5"
        style={{ maxWidth: "330px" }}
      >
        <h1 className="text-center text-primary">Login</h1>
        <hr />
        <Form
          onSubmit={(event) => {
            this.onLogin(event);
          }}
        >
          <FormGroup>
            <Input
              type="text"
              placeholder="Username"
              onKeyUp={this.onUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Password"
              onKeyUp={this.onPasswordChange}
            />
          </FormGroup>
          <ErrorMessage errMsg={this.state.error} />
          <Button color="primary" type="submit" className="mx-auto d-block">
            Login
          </Button>
        </Form>
      </Card>
    );
  }
}

export default Login;
