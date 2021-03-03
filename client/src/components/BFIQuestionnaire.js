import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Col } from 'reactstrap';

const BFIQuestionnaire = (props) => {
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

                <Button color="primary" onClick={toggle}>BFI</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} backdrop={false} keyboard={true}>
                <ModalHeader >Choose your preferences</ModalHeader>
                <ModalBody>
                    I see myself as someone who…
            <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;…is reserved</legend>
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
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp; …is generally trusting</legend>
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
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;…tends to be lazy</legend>
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
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;…is relaxed, handles stress well</legend>
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
                        <legend className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp; …has few artistic interests</legend>
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
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label "> &nbsp;&nbsp;&nbsp;&nbsp;…is outgoing, sociable</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="outgoing" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="outgoing" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="outgoing" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="outgoing" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="outgoing" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp;…tends to find fault with others</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="faulty" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="faulty" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="faulty" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="faulty" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="faulty" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp; …does a thorough job</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="jobdone" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="jobdone" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="jobdone" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="jobdone" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="jobdone" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label ">&nbsp;&nbsp;&nbsp;&nbsp; …gets nervous easily</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="nervous" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="nervous" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="nervous" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="nervous" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="nervous" />{'Agree strongly '}
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label">&nbsp;&nbsp;&nbsp;&nbsp;…has an active imagination</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="imaginary" />{'Disagree strongly '}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="imaginary" />{'Disagree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="imaginary" />{'Neither agree nor disagree'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="imaginary" />{'Agree a little'}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input required type="radio" name="imaginary" />{'Agree strongly '}
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

export default BFIQuestionnaire;