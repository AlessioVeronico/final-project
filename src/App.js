import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import PostList from './components/PostList';
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
            <Route path='/post' exact>
              <PostList />
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
