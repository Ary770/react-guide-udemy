import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '1', name:"Max", age:"30"},
      {id: '2', name:"Manu", age:"28"},
      {id: '3', name:"Sara", age:"26"}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid',
      padding: '8px',
      curson: 'pointer',
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={this.deletePersonHandler.bind(index)}
              changeName={(event) => this.changeNameHandler(event, person.id)}
              />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, I'm a React App</h1>
        </header>
        <p className={classes.join(" ")}>This is really working!</p>
        {console.log(classes)}
        {console.log(this.state.persons.length)}
        <br></br>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {person}

     </div>
    );
  }
}

export default App;
// export default Radium(App)
