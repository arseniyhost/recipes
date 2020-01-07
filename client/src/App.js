import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import ListShop from './Components/ListContainer';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import { Container } from 'reactstrap';
import { loadUser } from './store/actions/authActions';
import { Route } from 'react-router-dom';
import AddRecipeContainer from './Components/AddRecipe/AddRecipeContainer';
import RecipeContainer from './Components/Recipe/RecipeContainer';
import Footer from './Components/Footer/Footer';
import ScrollTop from "react-scrolltop-button";
import { Button } from "reactstrap";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Container>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/recipes" render={() => {
                return <div>

                  <ListShop />
                </div>
              }} />
              <Route path="/addrecipe" render={() => {
                return <AddRecipeContainer />
              }} />
              <Route path="/recipe/:id" render={() => {
                return <RecipeContainer />
              }} />
            </Container>
            <ScrollTop
              text={"UP"}
              distance={200}
              speed={500}
              
            />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
