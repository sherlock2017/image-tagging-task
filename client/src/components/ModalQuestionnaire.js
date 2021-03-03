import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup ,Col} from 'reactstrap';

const ModalQuestionnaire = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  

  const toggle = () => setModal(!modal);
    // see Fade for more details
    //backdropTransition: PropTypes.shape(Fade.propTypes)

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        
        <Button color="primary" onClick={toggle}>Submit</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={false} keyboard={true}>
        <ModalHeader >Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
          <FormGroup tag="fieldset" row> 
                            <legend className="col-form-label col-sm-2">Gender</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                    <Label check>
                                        <Input required type="radio" name="gender" />{'Male'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input required type="radio" name="gender" />{'Female '}
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup tag="fieldset" row>
                            <legend className="col-form-label col-sm-2">Age</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                    <Label check>
                                        <Input required type="radio" name="age" />{'Under 18'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input required type="radio" name="age" />{'Between 18 to 40'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input required type="radio" name="age" />{'Above 35'}
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                       
                        

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalQuestionnaire;