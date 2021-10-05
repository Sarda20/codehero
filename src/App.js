import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Component/Home/Home';
import About from '../src/Component/About/About';
import Service from '../src/Component/Service/Service';
import Contact from '../src/Component/Contact/Contact';
import Header from './Component/Header/Header';
import Notfound from './Component/Notfound/Notfound';
import Footer from './Component/Footer/Footer';

function App() {
  return (

    //Router used for all the navigations

    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home>
          </Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/service'>
          <Service></Service>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
