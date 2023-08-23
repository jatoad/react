import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div>
    <FunctionalGreetingWithProps greeeting="Hello, nice to meet you" name="Mike" age="32" />
  </div>
  )
}

export default App;
