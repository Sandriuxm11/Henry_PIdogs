import './App.css';
import Detail from './views/detail/detail';
import Form from './views/form/form';
import Home from './views/home/home';
import Landing from './views/landing/landing';

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>

      <Landing/>
      <Home/>
      <Detail/>
      <Form/>

    </div>
  );
}

export default App;
