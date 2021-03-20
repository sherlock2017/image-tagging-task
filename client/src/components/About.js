import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormGroup} from 'reactstrap';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';
import { RegisterModal } from './auth/RegisterModal';
import BFIQuestionnaire from './BFIQuestionnaire';
import HexadQuestionnaire from './HexadQuestionnaire';
import IMIQuestionnaire from './IMIQuestionnaire';
import ModalQuestionnaire from './ModalQuestionnaire';
function About() {
  return (
      <Container>
      <h1>Extra Features</h1>
{/*      
       <Form >
      <FormGroup row><ItemModal></ItemModal></FormGroup>
      
      <FormGroup row><ShoppingList></ShoppingList></FormGroup>
      
      <FormGroup row><ModalQuestionnaire></ModalQuestionnaire></FormGroup>
      
      <FormGroup row><BFIQuestionnaire></BFIQuestionnaire></FormGroup>
      
      <FormGroup row><HexadQuestionnaire></HexadQuestionnaire></FormGroup>
      
      <FormGroup row><IMIQuestionnaire></IMIQuestionnaire></FormGroup>
      
      </Form>  */}
      </Container>
     
  );
}

export default About;
