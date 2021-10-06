import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import PostsCateg from './components/PostsCateg';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className='row'>
        <div className='col-lg-12'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/home' exact>
              <Home />
            </Route>
            <Route path='/about-us' exact>
              <About />
            </Route>
            <Route path='/posts/:id' exact>
              <PostsCateg />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
