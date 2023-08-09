import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Detail from './views/detail/detail';
import Form from './views/form/form';
import Home from './views/home/home';
import Landing from './views/landing/landing';
import {Route} from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar className="navBar"/>}
    
      <Route exact path= "/" component={Landing} />
      
      <Route path="/home" render={() => <Home/>} />
      
      <Route path="/detail/:id" render={() => <Detail/>} />

      <Route path="/create" render={() => <Form/>} />
      
    </div>
  );
}

export default App;
