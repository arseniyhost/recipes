import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import ListShop from './Components/ListContainer';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import ItemsModal from './Components/ItemsModal';
import { Container } from 'reactstrap';
import { loadUser } from './store/actions/authActions';
import { Route } from 'react-router-dom';
import AddRecipeContainer from './Components/AddRecipe/AddRecipeContainer';
import RecipeContainer from './Components/Recipe/RecipeContainer';
import { withRouter } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Container>
            <Route exact path="/" render={() => <Home /> } />
            <Route path="/recipes" render={() => {
              return <div>
                <ItemsModal />
                <ListShop />
              </div>
            }} />
            <Route path="/addrecipe" render={() => {
              return <AddRecipeContainer />
            }} />
              <Route path="/recipe/:id" render={() => {
                return <RecipeContainer /> }} />
          </Container>
        </div>
      </Provider>
    );
  }
}


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default App;
