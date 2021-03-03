import React, { Component } from 'react';
import {
    Container, Row, Col, Form, FormGroup, Label, Button, ButtonToggle, Input
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import consentToggler from './ConsentToggler';
import ConsentToggler from './ConsentToggler';
import ExpData from './ExpData';
import TodoList from './TodoList';
import ImageRender from './ImageRender';
import ModalQuestionnaire from './ModalQuestionnaire';
import ImagePannel from './ImagePannel';
import Tutorial from './Tutorial';
import BFIQuestionnaire from './BFIQuestionnaire';
import IMIQuestionnaire from './IMIQuestionnaire';
import HexadQuestionnaire from './HexadQuestionnaire';
class ConsentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
   
    render() {
        return (
            <div>
                <Container>
                
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row><ExpData></ExpData></FormGroup>
                        <FormGroup row><Tutorial></Tutorial></FormGroup>

                        <FormGroup row>
                            <ConsentToggler></ConsentToggler>
                            <Col sm="2">
                                <FormGroup check>
                                    <Label check style={{ marginTop: '1rem' }}>
                                        <Input value={this.state.value} onChange={this.handleChange} required type="checkbox" id="checkbox2" />{'*'}
                                            I agree
                                        </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
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
                        <FormGroup row> <Button color="primary" >Submit</Button></FormGroup>
                        <FormGroup row> <ModalQuestionnaire></ModalQuestionnaire></FormGroup>
                        <FormGroup row> <BFIQuestionnaire></BFIQuestionnaire></FormGroup>
                        <FormGroup row> <HexadQuestionnaire></HexadQuestionnaire></FormGroup> 
                        <FormGroup row> <IMIQuestionnaire></IMIQuestionnaire></FormGroup>
                    </Form>
                   
                    <ImagePannel/>
                </Container>
               
            </div>

        )
    }

}

export default ConsentForm;