// this is the root component with sub-components
//nav bar, 
//routes: home page, create, blogdetails

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar will always show because it is not in the Switch */}
        <Navbar />
        <div className="content">
          {/* create routes with react-router */}
          <Switch>
            {/*show Home in div content when visit path / */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* create new page */}
            <Route path="/create">
              <Create />
            </Route>
            {/* access blogs by id - route parameter */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
