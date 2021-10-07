import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Post from './components/Post';
import PostList from './components/PostList';
import PostsCateg from './components/PostsCateg';
import SinglePage from './components/SinglePage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div className="container justify-content-center">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="row justify-content-center">
            <Switch>
              <Route path='/' exact>
                <PostList />
              </Route>
              <Route path='/page-home' exact>
                <PostList />
              </Route>
              <Route path='/page-:slug'>
                <SinglePage />
              </Route>
              <Route path='/posts/:id-:slug'>
                <PostsCateg />
              </Route>
              <Route path='/post/:slug'>
                <Post />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
