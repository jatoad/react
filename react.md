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

