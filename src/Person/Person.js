import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name}. And I'm {props.age} year's old.</p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name}></input>
    </div>
  )
}

export default person
