import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/AlbumFeature';
import Clock from './features/Clock';
import ColorPub from './features/ColorPub';
import PostList from './features/PostList';
import ToDo from './features/ToDo';
import TodoList2 from './features/TodoList2';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <nav>
        <ul className="main-menu">
          <li><NavLink to="todo">To do</NavLink></li>
          <li><NavLink to="todo2">To do 2</NavLink></li>
          <li><NavLink to="album">Album</NavLink></li>
          <li><NavLink to="color-pub">Color Pub</NavLink></li>
          <li><NavLink to="clock">Clock</NavLink></li>
          <li><NavLink to="post-list">Post List</NavLink></li>
        </ul>
      </nav>
      <div className="content">
        <Switch>
          <Route path="/" component={ToDo} exact/>
          <Route path="/todo" component={ToDo}/>
          <Route path="/color-pub" component={ColorPub}/>
          <Route path="/clock" component={Clock}/>
          <Route path="/todo2" component={TodoList2}/>
          <Route path="/album" component={AlbumFeature}/>
          <Route path="/post-list" component={PostList}/>
          
          <Route component={NotFound}></Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
