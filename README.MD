# React:

React is like a UI library for frontend, React apps are made out of component(A coponent is a reusable piece of code), a compoent is a piece of UI(User interface) that has its own logic and apperance, a component can be as small as a button and, as large as a entire webpage.

## installation

```bash
npm create vite@latest
```

It will gives you options like what is going to be your project name, what framework you are going to use(in our case `React`), what language are we going to use (`JavaScript` in our case), then it will aske to start installing the `npm packages`, or you will do it later.

`React components are JavaScript functions that return markup`

```js
function MyButton() {
  return <button>I'm a button</button>;
}
```

## Creating our 1st component:

```js
import "./App.css";

// Creating our 1st component
function Tittle() {
  return <h1>I am the Tittle!</h1>;
}

function Description() {
  return <p>I am the Description!</p>;
}

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Title />
      <Description />
    </div>
  );
}

export default App;
```

Creatig a component is very similar to creatign a function in JS, the only difference is that A component name has to be starts with a capital latter, and every expression can only have one parent element.

`e.g.`

```js
function Description() {
  return <p>I am the Description!</p>;
}
```

if we accidently write something like:

```js
function Description() {
  return <h1>I am the Title!</h1> <p>I am the Description!</p>;
}
```

The following expression will always gives us an error because we cannot render 2 parent element in an expression, in case we have to render more the one element then we have to wrap them in one parent element and then return them, which will enables us to achieve what we want to do.

<a id="writing-markup-example"></a>

```js
function Description() {
  return (
    <div>
      <h1>I am the Tittle!</h1>
      <p>I am the Description!</p>
    </div>
  );
}
```

we can also call a component in different ways:

`e.g.`

```js
function Component() {
  return <p>I am a Component!</p>;
}

function Component() {
  return <p>I am a Component!</p>;
}

function App() {
  return (
    <div>
      <Component></Component> // 1st way to call a component.
      <Component /> // 2nd way to call a component.
    </div>
  );
}
```

## ‼Note:

In `React` every indevidual component have its own file, e.g. `Tittle` compoent should be in a different file named as `tittle.jsx`;

Now that you’ve declared MyButton, you can nest it into another component.

## Import & export:

`Import` to use a compoent defined in a seprate file, we have to import it from its file into the one in which it it going to be used.

```js
import Tittle from "./Tittle.jsx";
```

It simply import the compoent in the document.

`export` to import a component we have to first export it inside the document.

```js
export default Tittle;
```

using this default export we can be able to import the component with a custom name, or with the same name if we wants, but we can only export only one component with it.

```js
export { Tittle };
```

Using this method we can export as many component we want but we have to be carefull as to use the coponent in another file they have to be import with the same name and inside the same parenthesis.

`e.g.`

```js
import { Tittle } from "./Tittle.jsx";
```

## Writing markup in JSX:

- Return a sigle root element, [Jump to the example](#writing-markup)
- Close all tags:
  - we have to make sure that all of our tags are perfectly closed with their closing tags.
- camelCase most of the thing.

  - In JSX we mostly use camel text for many thing like to assign a class to a perticular element we have to write it like

  ```js
  function App(
  return (
    <div className="div">
      <button>It is a button!</button>
    </div>
  )
  );
  ```

## Conditions in React:

As we have conditions in `JS` we can also use them in JSX

```js
{
  price > 3000 ? <p>Discount 5%</p> : null;
}
```

## Event Object:

In event function we have an event object which contain so much data and methods.

```js
function handleFormSubmition(event) {
  event.preventDefault();
  console.log("Form Submited successfully!");
  console.log(event);
}

function Form() {
  return (
    <form>
      <input placeholder="write something" />
      <button onClick={handleFormSubmition}>Submit</button>
    </form>
  );
}

export default Form;
```

## States:

In react a state of an elements changes based on the user interaction, but by default it has no affect on the UI, we have to define it manually.

```js
export default function Counter() {
  let count = 0;

  function InCount() {
    count += 1;
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={InCount}>Increase Count</button>
    </div>
  );
}
```

```js
import "./App.css";
import Counter from "./Count.jsx";

function App() {
  return (
    <>
      <h1>States in React</h1>
      <Counter />
    </>
  );
}

export default App;
```

IN the above code we had maked a counter variable which increses based on the user clicks on the button bellow it, it works the counter changes from 0 to 1 and so, but the counter = 0, so we have to change its states maually.

## Hooks:

Hooks were a new addition in React 16.8

they let you use state and other react features without writting a class.

`In starting we use to defined every functionality and even states of an object in class, but hooks enables us to use all of these without a need of class.`

## useState():

This function is used to reRender an element when its states get changes.

```js
import { useState } from "react";

export default function Counter() {
  let arr = useState(0); // useState(initialVale)
  console.log(arr);

  return (
    <div>
      <h3>Count = {0}</h3>
      <button>Increase Count</button>
    </div>
  );
}
```

we have to first import it from react before use, and it always return us an array that consist of 2 values `[theVariableInitaialValue, setFunction]` we always defined the function name based on the initial value variable name. the `set` function is also known as `updater function`.

`e.g.`

```js
let [count, setCount] = usestate(0);
```

we always decode the array before using it.

```js
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
```

In the above code we reRender the count value once it gets changes, we not usually use the `setFunction: setCount` like that but for now we just use it.

and in the render fuctionality out render value and console.log value has difference like in our case our counter get 1 after its first clicks but the console.log value of count get 0 and on the secound click it gets 1 and in render it gets 2.

## Activity:

```js
import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setisLiked] = useState("flase");

  function IsClicked() {
    setisLiked(!isLiked);
    console.log(isLiked);
  }

  let likedStyle = {
    color: "red",
  };

  return (
    <>
      <p onClick={IsClicked}>
        {isLiked ? ( // if true then render the regular heart
          <i class="fa-regular fa-heart"></i>
        ) : (
          <i class="fa-solid fa-heart" style={likedStyle}></i> // if false the render the filled heart
        )}
      </p>
    </>
  );
}
```

In the above code we implementing a like button which changes based on the user click.

‼ A state variable can only be written inside the component, if it is outside your code would gets errors.

## Closure:

Closure is a feature in JS where an inner function has access to the outer(enclosing) function's variables.

‼ In JS when a function completes its execution, any variable that were defined inside the function scope ease to exists.

as we know the concept that variables defined in a function, get erased once after the function did its work, but in a closure consept that enables us that even after the execution of a father function , the inner function still has access to the outer function's variables.

```js
function outerFunction() {
  var x = 10;
  return function innerFunction() {
    // Inner function has access to x from the outer function
    var y = 20;
    console.log(x + y);
  };
  return innerFunction;
}
```

## Re-Rendering:

when we re-render a code or an element the entire code gets re-render not just the perticular element or a component, that why when we rendered the counter out page show 1 but our console prints 0 and one the second go the page prints 2 but the console prints 1, because we can only access a variable or change after the page gets re render.

## Call-backs in Updater:

guess the output of the following function.

```js
import { useState } from "react";
import LikeButton from "./LikeButton";

export default function Counter() {
  let [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
      <LikeButton />
    </div>
  );
}
```

by sense of the we can say that whenever we click on the `increase button` the counter amount of its variable should change with the increment of `+3`, but the twist here is that it only changes to 1.

- why is that? It is because, the updater function is an `asyncronous` function and it only updated the value once the button clicks so it only add 1 once the button click and then 1 again on the second click.
- To solve this we use callBacks in it as we use in other `async` functions.

```js
setCount((currCount) => {
  return currCount + 1;
});

setCount((currCount) => {
  return currCount + 1;
});
```

istead of using the static count we can use the callback one which will allows us to increment 2 on every time we clicks on the button.

- We use the call back when the new value depends on the current or an old value.
- we use static when we just use random values on every click.

## Object States in React:

### LuddoProject:

`inside LudoBoard.jsx file 👇`

```js
import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

  let updateBlue = () => {
    console.log(`moves.blue = ${moves.blue}`);
    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  };

  let updateGreen = () => {
    console.log(`moves.green = ${moves.green}`);
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  };

  let updateRed = () => {
    console.log(`moves.red = ${moves.red}`);
    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
  };

  let updateYellow = () => {
    console.log(`moves.yellow = ${moves.yellow}`);
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  };

  return (
    <div>
      <p>Blue moves: {moves.blue}</p>
      <button style={{ background: "blue" }} onClick={updateBlue}>
        +1
      </button>

      <p>Green moves: {moves.green}</p>
      <button style={{ background: "green" }} onClick={updateGreen}>
        +1
      </button>

      <p>Red moves: {moves.red}</p>
      <button style={{ background: "red" }} onClick={updateRed}>
        +1
      </button>

      <p>Yellow moves: {moves.yellow}</p>
      <button
        style={{ background: "yellow", color: "black" }}
        onClick={updateYellow}
      >
        +1
      </button>
    </div>
  );
}
```

`App.jsx file 👇`

```js
import "./App.css";
import LudoBoard from "./LudoBoard";

function App() {
  return (
    <>
      <LudoBoard />
    </>
  );
}

export default App;
```

in our current exercise we can see that we changes the state of our objects differently, not like we do with our notmal variables.

first of we have `4` different board colors, `Red`, `Blue`, `Green` & `Yellow`.now if we have to defined states variable for each of these, we are going to repeat so much code without any reason:

`e.g.`:

```js
let [moveBlue, setMovesBlue] = useState(0);
let [moveRed, setMovesRed] = useState(0);
let [moveGreen, setMovesGreen] = useState(0);
let [moveYellow, setMovesYellow] = useState(0);
```

`it is so much code without any reasone, so much repetation of code`

we know that we can also use `arrays` & `Objects` in `React`, so instead of all these for lines which almost looks useless and identical, we are using the following.

`e.g.`:

```js
let [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });
```

now we stores all the colors with their initial values inside a variable called `moves` and their `updater` function called `setMoves`

> but we have some issues here, now we cannot use normal updater logic

```js
import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

  let updateBlue = () => {
    moves.blue += 1;
    setMoves(moves.blue);

    console.log(`moves.blue = ${moves.blue}`);
  };
}
```

In our normal logic this code should've worked but it did'nt, we gets the console.log updating from `1` to so on as we `clicked`, but react is not `re-rendering` the change.

**Why?** The reason is because when we change the value of `blue` it gets changed inside the actual object and we know about the `refrencing` inside `memory`, when an object is stored inside the memory we only gets its refrencing value which points to the exact memory location of each object's element. so now when we increase the object's element value, `Reacy` dose not finds any changes in the object and it doesnot `re-render` the object, to solve this we always use `...` `(spreat Oprator)` to uupdate the value of object, because it generate a new copy of updated object and that's how react `tract` the changes inside the object and we gets our component re-rendered.

`‼ Same logic goes for arrays`

`e.g.`:

```js
let updateBlue = () => {
  console.log(`moves.blue = ${moves.blue}`);
  setMoves((preMoves) => {
    return { ...preMoves, blue: preMoves.blue + 1 };
  });
};
```

This way our code will re-render the object element once its value gets changed.

## New TodoApp:

```js
import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo([""]);
  };

  let updateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>
      <br />
      <br />
      <input type="text" value={newTodo} onChange={updateNewTodo} />
      <button
        style={{ display: "block", margin: "1rem auto 0" }}
        onClick={addNewTodo}
      >
        Add Todo
      </button>
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
```

The goal is to create an app that track what user had typed into the input and then we will be updating their todo task once they press the submit button.

**Structure** we have to create two variables one to track the user input and one to hold all of their tasks, so we created `todos` `array` to store all the todo tasks and one `newTodo` to store the currenntly input task.

then in our `addNewTodo` we find the user input task with the help of `event` object, we also have to put `newTodo` as a value for the input. then in our `addTodo` we update our `todos` list by adding our new inputed todo.
and at the end we printed out our todos array with using `map` function.
