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
- Run ```npm install```
- After ```npm install``` has finished, run ```npm start``` to begin seeing your project in the browser.

## Step 1
**Summary**
In this step, we are going to dive into the functionality of the application. If we take a look into the ```src``` folder we’ll see that we have a ```components``` folder with a ```TopicBrowser``` and a ```Topics``` folder. Our ```TopicBrowser``` component will display a list of topics from the ```Topics``` folder. Each topic will be its own component.

**Instructions**
- Open ```src/components/TopicBrowser/TopicBrowser.js```.

- Import ```React``` (and ```Component``` if you are using a class component) from ```react```.

- Create a basic react component called ```TopicBrowser```: - This component should render one ```<p>``` element that says “Hello World.”

- Export ```TopicBrowser``` by default.

- Open ```src/App.js```.

- Import the ```TopicBrowser``` component after the ```import``` of ```react```.

- Render the ```TopicBrowser``` component in the ```return``` method of ```App```.

## Step 2
**Summary**
In this step, we’ll render all of our topics from the ```Topics``` folder, create the basic outlines for each of the topics ( the same exact way we did ```TopicBrowser``` ) with the only difference being the ```<p>``` element saying what the component name is, and then import and render those topic components into our ```TopicBrowser``` component.

**Instructions**
- Create a basic outline for each topic component (the same exact way we did the ```TopicBrowser``` component):

  - Make sure the name of the component is the same name as the file.

  - Have the component render a ```<p>``` element saying the name of the component.

- Open ```src/components/TopicBrowser/TopicBrowser.js```.

- Import all the topic files from ```src/components/Topics into src/components/TopicBrowser/TopicBrowser.js```.

- Render a parent ```<div>``` element containing all of the ```Topic``` components.

## Step 3
**Summary**
In the following steps it’s important to understand that there is more than one way to solve a toy problem; if your solution doesn’t match mine, that’s okay. Also, since the following 5 components are very similiar in their structure, only step 3’s detailed instructions go into great detail. The other steps after that won’t go into much detail.

In this step, we’ll start with the first topic: ```EvenAndOdd```.

**Instructions**
*The problem summary*: Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.

*The component outline*: One parent ```<div>``` element, one ```<h4>``` element, one ```<input>``` element, one ```<button>``` element, and two ```<span>``` elements.

- Open ```src/components/Topics/EvenAndOdd.js```.

- Remove the ```<p>``` element from the return.

- Add the component outline (described above) to the return method.

- Add the following ```className``` props to the outline:

  - Div: ```className=”puzzleBox evenAndOddPB”```

  - Input: ```className=”inputLine”```

  - Button: ```className=”confirmationButton”```

  - Both spans: ```<span className=”resultsBox”>```

- Assign the ```<h4>``` element the value of “Evens and Odds”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - ```evenArray``` - This should default to an empty array.

  - ```oddArray``` - This should default to an empty array.

  - ```userInput``` - This should default to an empty string.

- Create an ```onChange``` prop for the ```<input>``` element that updates the value of ```userInput``` on state.

- Create an ```onClick``` prop for the ```<button>``` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of ```evenArray``` and ```oddArray``` on state.

- Assign one ```<span>``` element to display the value of ```evenArray```.

- Assign the other ```<span>``` element to display the value of ```oddArray```.

## Step 4
**Summary**
In this step, we’ll build out the ```FilterObject``` component.

**Instructions**
*The problem summary*: Using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects that do have the given property.

*The component outline*: One parent ```<div>``` element, one ```<h4>``` element, one ```<span>``` element, one ```<input>``` element, one ```<button>``` element, and one ```<span>``` element.

- Open ```src/components/Topics/FilterObject.js```.

- Remove the `<p>` element from the return.

- Add the component outline (detailed above) to the return method.

- Add the following ```className``` props to the outline:

  - Div: ```className=”puzzleBox filterObjectPB”```

  - The first Span: ```className=”puzzleText”```

  - Input: ```className=”inputLine”```

  - Button: ```className=”confirmationButton”```

  - The last Span: ```className=”resultsBox filterObjectRB”```

- Assign the ```<h4>``` element the value of “Filter Object”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - ```unFilteredArray``` - This should default to an array of objects. Try to pick an array of objects that share similiar propteries but they should not be indentical objects.

  - ```userInput``` - This should default to an empty string.

  - ```filteredArray``` - This should default to an empty array.

- Create an ```onChange``` prop for the ```<input>``` element that updates the value of ```userInput``` on state.

- Create an ```onClick``` prop for the ```<button>``` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of ```filteredArray``` on state.

- Assign the first span element the value of ```unFilteredArray```.

- Assign the last span element the value of ```filteredArray```.

## Step 5
**Summary**
In this step, we’ll build out the ```FilterString``` component.

**Instructions**
*The problem summary*: Using a pre-determined array of strings, filter out strings that do not contain a given string. Display a new array populated with the strings that do contain the given string.

*The component outline*: One parent div element, one h4 element, one span element, one input element, one button element, and another span element.

- Open ```src/components/Topics/FilterString.js```.

Remove the ```<p>``` element from the return method.

- Add the component outline (detailed above) to the return method.

- Add the following ```className``` props to the outline:

  - Div: ```className=”puzzleBox filterStringPB”```

  - The first span: ```className=”puzzleText”```

  - Input: ```className=”inputLine”```

  - Button: ```className=”confirmationButton”```

  - The last span: ```className=”resultsBox filterStringRB”```

- Assign the ```<h4>``` element the value of “Filter String".

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - ```unFilteredArray``` - This should default to an array of strings. You choose what strings go in the array.

  - ```userInput``` - This should default to an empty string.

  - ```filteredArray``` - This should default to an empty array.

- Create an ```onChange``` prop for the ```<input>``` element that updates the value of ```userInput``` on state.

- Create an ```onClick``` prop for the ```<button>``` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of ```filteredArray```.

- Assign the first ```<span>``` element the value of ```unFilteredArray```.

- Assign the last ```<span>``` element the value of ```filteredArray```

## Step 6
**Summary**
In this step, we’ll build out the ```Palindrome``` component. A Palindrome is a word that reads the same backwards as it does forwards. *ex: "Bob", "Hannah", "Racecar".*

**Instructions** 
*The problem summary*: Using a given string, determine if it is spelt the same backwards as it is forwards.

*The component outline*: One parent ```<div>``` element, one ```<h4>``` element, one ```<input>``` element, one ```<button>``` element, and one ```<span>``` element.

- Open ```src/components/Topics/Palindrome.js```.

- Remove the ```<p>``` element from the return method.

- Add the component outline to the return method.

- Add the following ```className``` props to the outline:

  - Div: ```className=”puzzleBox filterStringPB”```

  - Input: ```className=”inputLine”```

  - Button: ```className=”confirmationButton”```

  - Span: ```className=”resultsBox”```

- Assign the ```<h4>``` element the value of “Palindrome”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

  - ```userInput``` - This should default to an empty string.

  - ```palindrome``` - This should default to an empty string.

- Create an ```onChange``` prop for the ```<input>``` element that updates the value of ```userInput``` on state.

- Create an ```onClick``` prop for the ```<button>``` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of ```palindrome```.

- Assign the ```<span>``` element the value of ```palindrome```.

## Step 7
**Summary**
In this step, we’ll build out the ```Sum``` component.

**Instructions**
*The problem summary*: Given two numbers, calculate the sum and display it.

*The component outline*: One parent ```<div>``` element, one ```<h4>``` element, two ```<input>``` elements, one ```<button>``` element, and one ```<span>``` element.

- Open ```src/components/Topics/Sum.js```.

- Remove the ```<p>``` element from the return method.

- Add the component outline to the return method.

- Add the following ```className``` props to the outline:

  - Div: ```className=”puzzleBox sumPB”```

  - The two input: ```className=”inputLine”```

  - Button: ```className=”confirmationButton”```

  - Span: ```className=”resultsBox”```

- Assign the ```<h4>``` element the value of “Sum”.

- Initialize the following states (via useState for functional components, or a constructor method for class components):

- ```number1``` - This should default to 0.

- ```number2``` - This should default to 0.

- ```sum``` - This should default to null.

- Create an ```onChange``` prop for the first ```<input>``` element that updates the value of ```number1``` on state.

- Create an ```onChange``` prop for the second ```<input>``` element that updates the value of ```number2``` on state.

- Create an ```onClick``` prop for the ```<button>``` element that calls a function/method:

  - This function/method should solve the toy problem.

  - This function/method should update the value of ```sum```.

- Assign the ```<span>``` element the value of ```sum```.

**Going Further**
To take this project a step further try to add more toy problems to the project throughout your time at DevMountain. This is completely optional, however this project has the potential to be a showcase of your knowledge to solve CS problems.