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

    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => this.setState({users : data,isLoaded: true, })
    );
  }
  
  render() {

    const FilterableTable = require('react-filterable-table');

    const fields = [
      { name: 'username', displayName: "Username", inputFilterable: true, sortable: true },
      { name: 'password', displayName: "Password", inputFilterable: false, sortable: false },
      { name: 'registerDateFormated', displayName: "Register Date", inputFilterable: false, sortable: false },
      { name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
      { name: 'surname', displayName: "Surname", inputFilterable: false, sortable: false },
      { name: 'email', displayName: "Email", inputFilterable: true, sortable: true },
      { name: 'fone', displayName: "Fone", inputFilterable: false, sortable: false },
      { name: 'enabledFormated', displayName: "Enabled", inputFilterable: false, sortable: false },
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
