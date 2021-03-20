import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { loadUser, loadUserData } from "./actions/authActions";
import store from './store';
import './App.css';
import About from './components/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './components/Index';
import ImgaeTask from './components/ImgaeTask';
import ImgaeTask2 from './components/ImgaeTask2';
import ImagePannel2 from './components/ImagePannel2';
import { Component } from 'react';
import AppNavbar from './components/AppNavbar';
  class App extends Component{
    componentDidMount(){

      store.dispatch(loadUser());
      store.dispatch(loadUserData());
    }
  render() {

  return (
     <Provider store={store}>
    <Router>

      <div className="App" >
        <Route path="/about" exact component= {About}></Route>
        <Container>
        <AppNavbar/>
       <Route path="/" exact component= {Index}></Route>
       <Route path="/imgaeTask" exact component= {ImgaeTask}></Route>
       <Route path="/imgaeTask2" exact component= {ImgaeTask2}></Route>
       <Route path="/ImagePannel2" exact component= {ImagePannel2}></Route>
        </Container>

      </div>
    </Router>
     </Provider>
  );
}
}
  export default App;
