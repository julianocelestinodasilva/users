import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    fetch("http://172.19.0.2:8080/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.items
          });
        },
        (error) => {
          console.log('Erro ao consultar os Usuarios --> ' + error.message);
          this.setState({
            isLoaded: true,
          });
        }
      )
  }
  
  render() {

    const FilterableTable = require('react-filterable-table');

    const data = [
      { name: "Steve", age: 27, job: "Sandwich Eater" },
      { name: "Gary", age: 35, job: "Falafeler" },
      { name: "Greg", age: 24, job: "Jelly Bean Juggler" },
      { name: "Jeb", age: 39, job: "Burrito Racer" },
      { name: "Jeff", age: 48, job: "Hot Dog Wrangler" }
    ];

    const fields = [
      { name: 'username', displayName: "Username", inputFilterable: true, sortable: true },
      { name: 'password', displayName: "Password", inputFilterable: false, sortable: false },
      { name: 'registerDate', displayName: "Register Date", inputFilterable: false, sortable: false },
      { name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
      { name: 'surname', displayName: "Surname", inputFilterable: false, sortable: false },
      { name: 'email', displayName: "Email", inputFilterable: true, sortable: true },
      { name: 'fone', displayName: "Fone", inputFilterable: false, sortable: false },
      { name: 'enabled', displayName: "Enabled", inputFilterable: false, sortable: false },
    ];

    return (
      <div className="App">
        <header className="App-header">
        </header>

        <p>
          <div>
           <FilterableTable
              initialSort="name"
              data={this.state.users}
              fields={fields}
              noRecordsMessage="There are no people to display"
              noFilteredRecordsMessage="No people match your filters!"
            />
          </div>  
        </p>  

      </div>
    );
  }
}

export default App;
