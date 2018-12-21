import React from 'react';

// Lecture #35 Dynamic content 
// I am a person and I am {Math.floor(Math.random()*30)} years old! curly braces are used for the Javascript expression

const person = (props) => {
return (
    <div>
  <p>I am a {props.name} and I am {props.age} 
    years old! and I like {Math.floor(Math.random()*10)} apples pies!</p>

    <p>{props.children}</p>
    </div>
  

)
};


export default person;
