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

## React Fragment:

React fragment lets you group a list fo children without addg an extra node to the DOM.

`When we wrap multiple child components into a parent one it create an extra element in our HTML file.`

by using react fragment we can skip that element.

`e.g.`

```js
function App() {
  return (
    <>
      <Component></Component> // 1st way to call a component.
      <Component /> // 2nd way to call a component.
    </>
  );
}
```

We did not make some huge changes to our code, we just put blank brackets which works just like parent element but it does not make an extra node element inside our DOM.

## JSX with curly Braces:

When we wants to use pure JS in React we can use `{}` `curly braces`, cause code inside these braces are treated as pure JS code in JSX format.

`e.g.`

```js
function Table() {
  return <h2>2 * 2 = {2 * 2}</h2>;
}
```

**output :** `2 * 2 = 4`

## Structorng component:

If we are making a single card we can defined its structure inside a `Card.jsx` file and then export it to the `App.jsx` file for use, and if we want to dublicate this card structure multiple times instead of copy and pasting the card calling component we have to create another file name something like `CardLists.jsx` and there we would first export our card from card.jsx file then multiple it and after that export the `CardLists` function and then use it inside the `App.jsx` once and although the output would be the same but it would be more convinent and it is recommended.

## Styling:

To apply styling to our component we have to import the css file and `for every component file we create seprate css file with the same name`.

`e.g.`

for `Product.jsx` file we created `Product.css` file for styling.

To import a css file we only use the following command:

```js
import "./Product.css";
```

There is a functionality n React named as `WebPack` which handles the `import & export` functionality, and it also enables us to import these `file.css` files.

## Props (Arguments in React):

By default our defned product prints the same `tittle` and `description`, as it copy the product the ammount of times we copied which is 3, and as we have `arguments` in `JS` to make our functional dynamic and use it for different purposes and gets customized output with different inputs, we have `props` in JSX which works the same as arguments in JS.

```js
function Product({ tittle, price = 1 }) {
  return (
    <div className="Product">
      <h3>{tittle}</h3>
      <p>The Price is going to be: {price}</p>
    </div>
  );
}
```

```js
function ProductList() {
  return (
    <>
      <Product tittle="Tablet" price={200} />
      <Product tittle="Mobile" price={95000} />
      <Product tittle="Laptop" />
    </>
  );
}
```

Now you can see that while calling the `Product component` we give it some arguments which in result gives us different output from eachothers.

## Defining Array in JSX

```js
function ProductList() {
  let options = ["Hight", "wall"];
  let options1 = { a: "wooow", b: "muuuuuuuuuu" };

  return (
    <>
      <Product
        tittle="Tablet"
        price={200}
        features={options}
        features1={options1}
      />
      <Product tittle="Mobile" price={95000} />
      <Product tittle="Laptop" />
    </>
  );
}
```

remember to define tha array before using the return keyword.

## Rendering an Array:

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

````

```

```
````
