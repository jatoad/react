import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className='App'>
      <StatefulGreeting greeting="i am your lord and saviour"/>
    </div>
  )
}

export default App;
