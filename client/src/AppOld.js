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
function App() {
  return (
    <Provider store={store}>
    <div className="App" >

      
      <Container>
      {/* <AppNavbar/>
      <ItemModal></ItemModal>
      <ShoppingList></ShoppingList> */}
      <ConsentForm></ConsentForm>
      <ImageTagList></ImageTagList>
      </Container>
     
    </div>
    </Provider>
  );
}

export default App;
