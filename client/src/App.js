import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import ImageTagList from './components/ImageTagList';
import ConsentForm from './components/ConsentForm';
import ExpData from './components/ExpData';
import Tutorial from './components/Tutorial';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { Accordion, Card,Button} from 'react-bootstrap';
import Index from './components/Index';
import ImgaeTask from './components/ImgaeTask';
import ImgaeTask2 from './components/ImgaeTask2';
function App() {
  return (
     <Provider store={store}>
    <Router>

      <div className="App" >
        <Route path="/about" exact component= {About}></Route>
        <Container>
    
       <Route path="/" exact component= {Index}></Route>
       <Route path="/imgaeTask" exact component= {ImgaeTask}></Route>
       <Route path="/imgaeTask2" exact component= {ImgaeTask2}></Route>
        </Container>

      </div>
    </Router>
     </Provider>
  );
}

export default App;
