import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <body>
      <h1>Hello World!</h1>
      </body>
    );
  }
}

//Both shows same, but function works only as function and component can use the components easily.
//Recommend to use class form component when you display something.
//The same name of class & function automatically detected as 'component' in index.js for <App />
//Using component and the inner object 'state' requires to use 'setState()',
//to refresh(reload) render(). >> Dynamically chaning data and shows it immediately on HTML screen (not JS).
//If you don't need to refresh the screen, don't use state to boost the performance up,
//but any other variables, like const, let.

//The strongest feature of component platform coding :
//You can put components inside another components. WOW! COOL! AWESOME!

console.dir("Don't run with it.");

export default App;
