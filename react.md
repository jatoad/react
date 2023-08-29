# creating a react app
- install **npm** 
- in the command line type: **npx create-react-app my-app --use-npm** (this will mean that the app will run via **npm** rather than **yarn**)

# running a react app 
- make sure you are inn the **app directroy**
- in the command line: **npm start** 

# react developer tools 
- install **react developer tools** to extensions via google
- allows us to identify sites that use react 
- allows selection of specific react **components** usisng google developer tools via inspect element
- on **settings** in **components** you can select **highlight updates when components render** to highlight components when updated or re-rendered

# react components
- two types: **stateless functional** or **stateful class** components
### stateless functional
- for stable **non-changing** components
- **javascript functon** that returns **html** 
- can take **perameters**
- once rendered, **cannot change**
### stateful class
- for interactive or **changing** components
- has the **ability to change** at any time once rendered
- this is done via **updating the state**, a javascript **object** that contains various properties

# ES7 snippets
- **rfce** creates **functional component**
- **rafce** creates **functional component** as an **arrow function**
- **rce** creates **class component**
- **rconst** creates **constructor**
- **clg** creates **console.log()**
- **clo** creates **console.log()** with object **name**


# css in react
- Within the component file, import the appropriate css file, e.g. **import css from "./css/Sidebar.module.css"**
- Add the className to the outermost div in the component file e.g. **< div className = {css.sidebar} >**
- The convention for naming CSS files linked to specific React components is: **'component.module.css'**

# writing components 

## functional components
- in **src** folder create a **components** folder with a **ComponentName.js** file inside 
    - calling the file and component **ComponentName** is not imperrative but is **industry standard**
- in ComponentName, **import react** 
- wrap all components **inside ComponentName** component
- **export** FunctionalGreeting component and **import in App.js**
    - **export default ComponentName;**
- write **simple** functions as arrow **functions** 
- only one component can be returned at the same time. this means that if **two or more components** are to be returned in the same function, they must be nested within the **same div**
- **props**
    - **perameters** put into component in order to tell it **what and how to render**
    - props are written in **jsx** like: **name="Mike"** in a similar way to class or id methods in html
    - they should look like: **Hello, {props.name}!** when rendered
### react hook
- built-in react components that can be added to stateless functional components in order for them to behave like stateful class components
- a hook enables us to create a **state component with a method to update it**. for example:
    - **const [count, setCount] = userState(0);**
    - we can then **call** this hook when an **action** occurs such as a **button click** 
- accomplishes the same thing as a stateful component with a lot **less code**
## class components
- set up in much the same way as the functional component with imports and exports 
- should be written as **class ComponentName extends React.Component {}**
- as class components are **unable to return a value**, a **render method** must be setup 
    - **render() { return html/jsx content }**
- **props**
    - mostly the same as with functional components however is written as **{this.props.name}**
### adding and updating the state within a class component
- defined within the **constructor**
    - **constructor(props){ super(props); this.state = {};}**
    -  the state can be changed or set. this is written in the curley brackets {}
- the **setState()** method is used to **update the state**
    - **this.setState({ name: "value", });**
    - to log to the console the updated values, console .logs must be written as:
        - **this.setState({}, ()=>{ console.log(); });**
    - to update the state based on a previous state, use a callback function:
        - **this.setState((prevState, prevProps) => {})**
## handling events
- event handlers are written in **camel case** in react **eg. onclick**
### class
### event handlers need to be bound to the class
1. **arrow functions** in the call to an event handler 
    - e.g **onClick={() => this.handleClick()}**
    - this is gernerally the best method to use if the event will take perameters 
2. call bind on the handler with **this**
    - e.g **onClick={this.handleClick.bind(this)}**
3. bind the event handler in the **constructor**
    - e.g **this.handleClick = this.handleClick.bind(this)** in the constructor
    - **eventHandler={this.handleClick}** in the call to the event handler
4. **define the event handler** by using an **arrow function**
    - **handleClick = () => {content}** 
    - **eventHandler={this.handleClick}** in the call to the event handler
    - in regular use case this is the easiest method to use
### functional
- **onClick={eventHandler}**
## conditional rendering 
- uses **terniary conditionals** which are essentially **shorthand if statements** 
    - e.g functional: **{props.connected ? 'Connected' : 'Not Connected'}** 
    - e.g class: (after setting the state in constructor) **{this.state.isLaoded ? 'data loaded' : 'loading...'}**
- html/jsx elements can be rendered using this method 
    - eg. **{this.state.isLoaded ? (html/jsx element) : (html/jsx element)}**
## nesting components
- **import** the **child component** at the top of the parent component file
- the **child component** is **returned as a tag** in the **same form as in the App.js file**
### passing the props down
- to pass the **props**, add in the form: **isLoggedIn={this.state.isLoggedIn}** to the tag
### updating the parent from a child
- in general, information should only be passed down. i.e. from parent to child
- there are some exceptions
    - eg. a child forcing the parent to pass props down th another child
- **contacting the parent component**
    1. create a new method
    2. pass down as a prop
    3. call method from child component