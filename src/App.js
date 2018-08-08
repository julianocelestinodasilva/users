import React, { Component } from 'react';
import './App.css';

class App extends Component {

  
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
      { name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
      { name: 'age', displayName: "Age", inputFilterable: true, exactFilterable: true, sortable: true },
      { name: 'job', displayName: "Occupation", inputFilterable: true, exactFilterable: true, sortable: true }
    ];

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <FilterableTable
            initialSort="name"
            data={data}
            fields={fields}
            noRecordsMessage="There are no people to display"
            noFilteredRecordsMessage="No people match your filters!"
          />
        </div>  

      </div>
    );
  }
}

export default App;
