<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project we will create a react application that solves computer science toy problems and showcases them in a feed. The file structure has already been created for us but none of the functionality works. At the end of this project you should have an understanding of the following topics:

- Components (Both class and functional)
- State
- Import / Export
- .gitignore
- NPM install

**Live Example**
<a href="https://devmountain.github.io/react-1-afternoon/">Click Here</a>

## Instructions

### Setup

- Open up your VS Code terminal, and ensure you are in the project's root directory.
- Run `npm install`
- After `npm install` has finished, run `npm start` to begin seeing your project in the browser.

## Step 1

**Summary**
In this step, we are going to dive into the functionality of the application. If we take a look into the `src` folder we’ll see that we have a `components` folder with a `TopicBrowser` and a `Topics` folder. Our `TopicBrowser` component will display a list of topics from the `Topics` folder. Each topic will be its own component.

**Instructions**

- Open `src/components/TopicBrowser/TopicBrowser.js`.

- Import `React` (and `Component` if you are using a class component) from `react`.

- Create a basic react component called `TopicBrowser`: - This component should render one `<p>` element that says “Hello World.”

- Export `TopicBrowser` by default.

- Open `src/App.js`.

- Import the `TopicBrowser` component after the `import` of `react`.

- Render the `TopicBrowser` component in the `return` method of `App`.

<img src="./assets/2-2.png" align="center"/>

**Class Component Solution**

<details>
  <summary><code>src/App.js</code></summary>

```js
import React, { Component } from "react";
import TopicBrowser from "./components/TopicBrowser/TopicBrowser.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <TopicBrowser />;
  }
}

export default App;
```

</details>
<details>
  <summary><code>src/components/TopicBrowser/TopicBrowser.js</code></summary>

```js
import React, { Component } from "react";

class TopicBrowser extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>Hello World</p>;
  }
}

export default TopicBrowser;
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/App.js</code></summary>

```js
import React from 'react'
import TopicBrowser from './components/TopicBrowser/TopicBrowser.js'
function App() {

  return (
    <TopicBrowser />
  )
}

export default App
```

</details>
<details>
  <summary><code>src/components/TopicBrowser/TopicBrowser.js</code></summary>

```js
import React from "react";

function TopicBrowser() {
  return <p>Hello World</p>;
}

export default TopicBrowser;
```

</details>

## Step 2

**Summary**
In this step, we’ll render all of our topics from the `Topics` folder, create the basic outlines for each of the topics ( the same exact way we did `TopicBrowser` ) with the only difference being the `<p>` element saying what the component name is, and then import and render those topic components into our `TopicBrowser` component.

**Instructions**

- Create a basic outline for each topic component (the same exact way we did the `TopicBrowser` component):

  - Make sure the name of the component is the same name as the file.

  - Have the component render a `<p>` element saying the name of the component.

- Open `src/components/TopicBrowser/TopicBrowser.js`.

- Import all the topic files from `src/components/Topics into src/components/TopicBrowser/TopicBrowser.js`.

- Render a parent `<div>` element containing all of the `Topic` components.

**Class Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/TopicBrowser.js</code></summary>

```js
import React, { Component } from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

class TopicBrowser extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="puzzleFeed">
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}

export default TopicBrowser;
```

</details>
<details>
  <summary><code>src/components/Topics/EvenAndOdd.js</code></summary>

```js
import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>EvenAndOdd</p>;
  }
}

export default EvenAndOdd;
```

</details>
<details>
  <summary><code>src/components/Topics/FilterObject.js</code></summary>

```js
import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>FilterObject</p>;
  }
}

export default FilterObject;
```

</details>
<details>
  <summary><code>src/components/Topics/FilterString.js</code></summary>

```js
import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>FilterString</p>;
  }
}

export default FilterString;
```

</details>
<details>
  <summary><code>src/components/Topics/Palindrome.js</code></summary>

```js
import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>Palindrome</p>;
  }
}

export default Palindrome;
```

</details>
<details>
  <summary><code>src/components/Topics/Sum.js</code></summary>

```js
import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>Sum</p>;
  }
}

export default Sum;
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/TopicBrowser.js</code></summary>

```js
import React from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

function TopicBrowser() {
  return (
    <div className="puzzleFeed">
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </div>
  );
}

export default TopicBrowser;
```

</details>
<details>
  <summary><code>src/components/Topics/EvenAndOdd.js</code></summary>

```js
import React from "react";

function EvenAndOdd() {
  return <p>EvenAndOdd</p>;
}

export default EvenAndOdd;
```

</details>
<details>
  <summary><code>src/components/Topics/FilterObject.js</code></summary>

```js
import React from "react";

function FilterObject() {
  return <p>FilterObject</p>;
}

export default FilterObject;
```

</details>
<details>
  <summary><code>src/components/Topics/FilterString.js</code></summary>

```js
import React from "react";

function FilterString() {
  return <p>FilterString</p>;
}

export default FilterString;
```

</details>
<details>
  <summary><code>src/components/Topics/Palindrome.js</code></summary>

```js
import React from "react";

function Palindrome() {
  return <p>Palindrome</p>;
}

export default Palindrome;
```

</details>
<details>
  <summary><code>src/components/Topics/Sum.js</code></summary>

```js
import React from "react";

function Sum() {
  return <p>Sum</p>;
}

export default Sum;
```

</details>

## Step 3

**Summary**
In the following steps it’s important to understand that there is more than one way to solve a toy problem; if your solution doesn’t match mine, that’s okay. Also, since the following 5 components are very similiar in their structure, only step 3’s detailed instructions go into great detail. The other steps after that won’t go into much detail.

In this step, we’ll start with the first topic: `EvenAndOdd`.

**Instructions**
_The problem summary_: Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.

_The component outline_: One parent `<div>` element, one `<h4>` element, one `<input>` element, one `<button>` element, and two `<span>` elements.

- Open `src/components/Topics/EvenAndOdd.js`.

- Remove the `<p>` element from the return.

- Add the component outline (described above) to the return method.

- Add the following `className` props to the outline:

  - Div: `className=”puzzleBox evenAndOddPB”`

  - Input: `className=”inputLine”`

  - Button: `className=”confirmationButton”`

  - Both spans: `<span className=”resultsBox”>`

- Assign the `<h4>` element the value of “Evens and Odds”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - `evenArray` - This should default to an empty array.

  - `oddArray` - This should default to an empty array.

  - `userInput` - This should default to an empty string.

- Create an `onChange` prop for the `<input>` element that updates the value of `userInput` on state.

- Create an `onClick` prop for the `<button>` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of `evenArray` and `oddArray` on state.

- Assign one `<span>` element to display the value of `evenArray`.

- Assign the other `<span>` element to display the value of `oddArray`.

<img src="./assets/1g.gif" align="center" />

**Class Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/EvenAndOdd.js</code></summary>

```js
import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/EvenAndOdd.js</code></summary>

```js
import React, {useState} from 'react'

function EvenAndOdd() {
  const [evensArray, setEvensArray] = useState([])
  const [oddsArray, setOddsArray] = useState([])
  const [userInput, setUserInput] = useState("")

  const clickHandler = () => {
    let evens = []
    let odds = []
    let str = userInput.split(",")
    for(let num of str) {
      if(num % 2 === 0) {
        evens.push(+num)
      } else {
        odds.push(+num)
      }
    }
    setEvensArray(evens)
    setOddsArray(odds)
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={(e) => setUserInput(e.target.value)} />
      <button className="confirmationButton" onClick={clickHandler}>Split</button>
      <span className="resultsBox">Evens: {JSON.stringify(evensArray)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(oddsArray)}</span>
    </div>
  )
}

export default EvenAndOdd
```

</details>

## Step 4

**Summary**
In this step, we’ll build out the `FilterObject` component.

**Instructions**
_The problem summary_: Using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects that do have the given property.

_The component outline_: One parent `<div>` element, one `<h4>` element, one `<span>` element, one `<input>` element, one `<button>` element, and one `<span>` element.

- Open `src/components/Topics/FilterObject.js`.

- Remove the `<p>` element from the return.

- Add the component outline (detailed above) to the return method.

- Add the following `className` props to the outline:

  - Div: `className=”puzzleBox filterObjectPB”`

  - The first Span: `className=”puzzleText”`

  - Input: `className=”inputLine”`

  - Button: `className=”confirmationButton”`

  - The last Span: `className=”resultsBox filterObjectRB”`

- Assign the `<h4>` element the value of “Filter Object”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - `unFilteredArray` - This should default to an array of objects. Try to pick an array of objects that share similiar propteries but they should not be indentical objects.

  - `userInput` - This should default to an empty string.

  - `filteredArray` - This should default to an empty array.

- Create an `onChange` prop for the `<input>` element that updates the value of `userInput` on state.

- Create an `onClick` prop for the `<button>` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of `filteredArray` on state.

- Assign the first span element the value of `unFilteredArray`.

- Assign the last span element the value of `filteredArray`.

<img src="./assets/2g.gif" align="center"/>

**Class Component Solution**

<details>
  <summary><code>src/components/Topics/FilterObject.js</code></summary>

```js
import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      filteredArray: [],
      unfilteredArray: [
        { name: "Jimmy Joe", title: "Hacker", age: 12 },
        { name: "Reagan", title: "Pop Star", hairColor: "brown" },
        { name: "Andrew", title: "Web Developer", isCool: true },
      ],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    let results = [];
    this.state.unfilteredArray.map((person) => {
      person.hasOwnProperty(this.state.userInput) && results.push(person);
    });
    this.setState({ filteredArray: results });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={this.clickHandler}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/components/Topics/FilterObject.js</code></summary>

```js
import React, { useState } from "react";

function FilterObject() {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unfilteredArray, setUnfilteredArray] = useState([
    { name: "Jimmy Joe", title: "Hacker", age: 12 },
    { name: "Reagan", title: "Pop Star", hairColor: "brown" },
    { name: "Andrew", title: "Web Developer", isCool: true },
  ]);

  const clickHandler = () => {
    let results = [];
    unfilteredArray.map((person) => {
      person.hasOwnProperty(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(unfilteredArray)}</span>
      <input className='inputLine' type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button className='confirmationButton' onClick={clickHandler}>Filter</button>
      <span className='resultsBox filterStringRB'>{JSON.stringify(filteredArray)}</span>
    </div>
  );
}

export default FilterObject;
```

</details>

## Step 5

**Summary**
In this step, we’ll build out the `FilterString` component.

**Instructions**
_The problem summary_: Using a pre-determined array of strings, filter out strings that do not contain a given string. Display a new array populated with the strings that do contain the given string.

_The component outline_: One parent div element, one h4 element, one span element, one input element, one button element, and another span element.

- Open `src/components/Topics/FilterString.js`.

Remove the `<p>` element from the return method.

- Add the component outline (detailed above) to the return method.

- Add the following `className` props to the outline:

  - Div: `className=”puzzleBox filterStringPB”`

  - The first span: `className=”puzzleText”`

  - Input: `className=”inputLine”`

  - Button: `className=”confirmationButton”`

  - The last span: `className=”resultsBox filterStringRB”`

- Assign the `<h4>` element the value of “Filter String".

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - `unFilteredArray` - This should default to an array of strings. You choose what strings go in the array.

  - `userInput` - This should default to an empty string.

  - `filteredArray` - This should default to an empty array.

- Create an `onChange` prop for the `<input>` element that updates the value of `userInput` on state.

- Create an `onClick` prop for the `<button>` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of `filteredArray`.

- Assign the first `<span>` element the value of `unFilteredArray`.

- Assign the last `<span>` element the value of `filteredArray`

<img src="./assets/3g.gif" align="center"/>

**Class Component Solution**

<details>
  <summary><code>src/components/Topics/FilterString.js</code></summary>

```js
import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];

    for ( let i = 0; i < names.length; i++ ) {
      if ( names[i].includes(userInput) ) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
};

export default FilterString
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/components/Topics/FilterString.js</code></summary>

```js
import React, { useState } from "react";

function FilterString() {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unfilteredArray, setUnfilteredArray] = useState([
    "Brady", "Andrew", "Cameron", "Katie", "Michelle", "Jessica", "Athena", "Chalon"
  ]);

  const clickHandler = () => {
    let results = [];
    unfilteredArray.map((person) => {
      person.includes(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        Names: {JSON.stringify(unfilteredArray)}
      </span>
      <input
        className="inputLine"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}

export default FilterString;
```

</details>

## Step 6

**Summary**
In this step, we’ll build out the `Palindrome` component. A Palindrome is a word that reads the same backwards as it does forwards. _ex: "Bob", "Hannah", "Racecar"._

**Instructions**
_The problem summary_: Using a given string, determine if it is spelt the same backwards as it is forwards.

_The component outline_: One parent `<div>` element, one `<h4>` element, one `<input>` element, one `<button>` element, and one `<span>` element.

- Open `src/components/Topics/Palindrome.js`.

- Remove the `<p>` element from the return method.

- Add the component outline to the return method.

- Add the following `className` props to the outline:

  - Div: `className=”puzzleBox filterStringPB”`

  - Input: `className=”inputLine”`

  - Button: `className=”confirmationButton”`

  - Span: `className=”resultsBox”`

- Assign the `<h4>` element the value of “Palindrome”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - `userInput` - This should default to an empty string.

  - `palindrome` - This should default to an empty string.

- Create an `onChange` prop for the `<input>` element that updates the value of `userInput` on state.

- Create an `onClick` prop for the `<button>` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of `palindrome`.

- Assign the `<span>` element the value of `palindrome`.

<img src="./assets/4g.gif" align="center"/>

**Class Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/Palindrome.js</code></summary>

```js
import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  isPalindrome(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}

export default Palindrome
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/Palindrome.js</code></summary>

```js
import React, {useState} from 'react'

function Palindrome() {
  const [userInput, setUserInput] = useState("")
  const [palindrome, setPalindrome] = useState("")

  const handleChange = (value) => setUserInput(value)

  const isPalindrome = () => {
    let forwards = userInput
    let backwards = userInput
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');
    if ( forwards === backwards ) {
      setPalindrome("True")
    } else {
      setPalindrome("False")
    }
  }

  return (
    <div className="puzzleBox palindromePB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={ (e) => handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => isPalindrome(userInput) }> Check </button>
      <span className="resultsBox"> Palindrome: {palindrome} </span>
    </div>
  )
}

export default Palindrome
```

</details>

## Step 7

**Summary**
In this step, we’ll build out the `Sum` component.

**Instructions**
_The problem summary_: Given two numbers, calculate the sum and display it.

_The component outline_: One parent `<div>` element, one `<h4>` element, two `<input>` elements, one `<button>` element, and one `<span>` element.

- Open `src/components/Topics/Sum.js`.

- Remove the `<p>` element from the return method.

- Add the component outline to the return method.

- Add the following `className` props to the outline:

  - Div: `className=”puzzleBox sumPB”`

  - The two input: `className=”inputLine”`

  - Button: `className=”confirmationButton”`

  - Span: `className=”resultsBox”`

- Assign the `<h4>` element the value of “Sum”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

- `number1` - This should default to 0.

- `number2` - This should default to 0.

- `sum` - This should default to null.

- Create an `onChange` prop for the first `<input>` element that updates the value of `number1` on state.

- Create an `onChange` prop for the second `<input>` element that updates the value of `number2` on state.

- Create an `onClick` prop for the `<button>` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of `sum`.

- Assign the `<span>` element the value of `sum`.

<img src="./assets/5g.gif" align="center"/>

**Class Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/Sum.js</code></summary>

```js
import React, { Component } from 'react';

export default class Sum extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
}
```

</details>

**Functional Component Solution**

<details>
  <summary><code>src/components/TopicBrowser/Sum.js</code></summary>

```js
import React, { useState } from "react";

function Sum() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(null);

  const updateNumber1 = (value) => setNumber1(value);
  const updateNumber2 = (value) => setNumber2(value);
  const add = () => {
    let newSum = +number1 + +number2;
    setSum(newSum);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        type="number"
        onChange={(e) => updateNumber1(e.target.value)}
      ></input>
      <input
        className="inputLine"
        type="number"
        onChange={(e) => updateNumber2(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={add}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox"> Sum: {sum} </span>
    </div>
  );
}

export default Sum;
```

</details>

**Going Further**
To take this project a step further try to add more toy problems to the project throughout your time at DevMountain. This is completely optional, however this project has the potential to be a showcase of your knowledge to solve CS problems.
