import React from "react";
import Transactions from "./components/Transactions/Transactions";
import AddTransactionForm from "./components/AddTransactionForm/AddTransactionForm";
import Login from "./components/Login/Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      sales: 0,
      expenses: 0,
      coh: 0,
      isSignedIn: false,
    };
  }

  onLogin = () => {
    cookies.set("isSignedIn", true);
    this.setState({
      isSignedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isSignedIn: false,
    });
  };

  loadTransactions = () => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ transactions: data });
        this.computeTransactions();
      })
      .catch(console.log);
  };

  componentDidMount() {
    if (cookies.get("isSignedIn")) {
      this.onLogin();
      this.loadTransactions();
    }
  }

  computeTransactions = () => {
    const SALES = this.state.transactions
      .filter((transaction) => transaction.type === "Sales")
      .reduce((accumulator, transaction) => {
        return accumulator + Number(transaction.amount);
      }, 0);
    const EXPENSES = this.state.transactions
      .filter((transaction) => transaction.type === "Expenses")
      .reduce((accumulator, transaction) => {
        return accumulator + Number(transaction.amount);
      }, 0);
    const CASHONHAND = SALES - EXPENSES;

    this.setState({ coh: CASHONHAND, sales: SALES, expenses: EXPENSES });
  };
  render() {
    if (this.state.isSignedIn) {
      return (
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              children={
                <Transactions
                  transactions={this.state.transactions}
                  onLogout={this.onLogout}
                  sales={this.state.sales}
                  coh={this.state.coh}
                  expenses={this.state.expenses}
                />
              }
            />
            <Route
              exact
              path="/addtransaction"
              children={
                <AddTransactionForm
                  goBack={this.prevPage}
                  loadTransactions={this.loadTransactions}
                />
              }
            />
          </Switch>
        </Router>
      );
    } else {
      return (
        <Login
          onLogin={this.onLogin}
          loadTransactions={this.loadTransactions}
        />
      );
    }
  }
}

export default App;
