import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Col } from 'reactstrap';

const IMIQuestionnaire = (props) => {
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

                <Button color="primary" onClick={toggle}>IMI</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} backdrop={false} keyboard={true}>
                <ModalHeader >Choose your preferences</ModalHeader>
                <ModalBody>
                    I see myself as someone who…
            <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;I thought this activity was quite enjoyable </legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="reserved" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="reserved" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="reserved" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="reserved" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="reserved" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp; This activity does not hold my attention at all  </legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="trusting" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="trusting" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="trusting" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="trusting" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="trusting" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;I would describe this activity as very interesting  </legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="lazy" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="lazy" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="lazy" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="lazy" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="lazy" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;  I did not feel nervous at all while doing this </legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="relaxed" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="relaxed" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="relaxed" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="relaxed" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="relaxed" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;  I did this activity because I wanted to do.</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="artistic" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="artistic" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="artistic" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="artistic" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="artistic" />{'Agree strongly '}
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

export default IMIQuestionnaire;