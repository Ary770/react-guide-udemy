import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person'
import Persons from './Person/Persons'

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
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

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
    let person = null;
    let btnClass = '';

    if (this.state.showPersons) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <header className={classes['App-header']}>
        <img src={logo} className={classes['App-logo']} alt="logo" />
          <h1 className={classes['App-title']}>Hi, I'm a React App</h1>
        </header>
        <p className={assignedClasses.join(" ")}>This is really working!</p>

        {console.log('state.pesons.lenght:', this.state.persons.length)}
        <br></br>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {person}

     </div>
    );
  }
}

export default App;
// export default Radium(App)
