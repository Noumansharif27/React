# React:

React is like a UI library for frontend, React apps are made out of component(A coponent is a reusable piece of code), a compoent is a piece of UI(User interface) that has its own logic and apperance, a component can be as small as a button and, as large as a entire webpage.

React components are JavaScript functions that return markup

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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
