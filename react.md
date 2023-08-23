## creating a react app
- install **npm** 
- in the command line type: **npx create-react-app my-app --use-npm** (this will mean that the app will run via **npm** rather than **yarn**)

## running a react app 
- make sure you are inn the **app directroy**
- in the command line: **npm start** 

## react developer tools 
- install **react developer tools** to extensions via google
- allows us to identify sites that use react 
- allows selection of specific react **components** usisng google developer tools via inspect element
- on **settings** in **components** you can select **highlight updates when components render** to highlight components when updated or re-rendered

## react components
- two types: **stateless functional** or **stateful class** components
#### stateless functional
- for stable **non-changing** components
- **javascript functon** that returns **html** 
- can take **perameters**
- once rendered, **cannot change**
#### stateful class
- for interactive or **changing** components
- has the **ability to change** at any time once rendered
- this is done via **updating the state**, a javascript **object** that contains various properties
#### react hook
- built-in react components that can be added to stateless functional components in order for them to behave like stateful class components
- a hook enables us to create a **state component with a method to update it**. for example:
    - **const [count, setCount] = userState(0);**
    - we can then **call** this hook when an **action** occurs such as a **button click** 
- accomplishes the same thing as a stateful component with a lot **less code**
#### writing components 
- in **src** folder create a **components** folder with a **FunctionalGreeting.js** file inside 
    - calling the file and component **FunctionalGreeting** is not imperrative but is **industry standard**
- in FunctionalGreeting, **import react** 
- wrap all components **inside FunctionalGreeting** component
- **export** FunctionalGreeting component and **import in App.js**
    - **export default FunctionalGreeting;**
- write **simple** functions as arrow **functions** 
- only one component can be returned at the same time. this means that if **two or more components** are to be returned in the same function, they must be nested within the **same div**
- **props**
    - **perameters** put into component in order to tell it **what and how to render**
    - props are written in **jsx** like: **name="Mike"** in a similar way to class or id methods in html
    - they should look like: **Hello, {props.name}!** when rendered

## css in react
- Within the component file, import the appropriate css file, e.g. import css from "./css/Sidebar.module.css"
- Add the className to the outermost div in the component file e.g. < div className = {css.sidebar} >
- Note: After adding classname and link to css module, your output in the preview should change to look like the example given above.
- The convention for naming CSS files linked to specific React components is: 'component.module.css'
