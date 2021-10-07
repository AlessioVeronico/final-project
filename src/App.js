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

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className="row justify-content-center">
          <Switch>
            <Route path='/' exact>
              <PostList />
            </Route>
            <Route path='/:id-home' exact>
              <PostList />
            </Route>
            <Route path='/:id-:slug' exact>
              <SinglePage />
            </Route>
            <Route path='/posts/:id-:slug' exact>
              <PostsCateg />
            </Route>
            <Route path='/post/:id-:slug' exact>
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
