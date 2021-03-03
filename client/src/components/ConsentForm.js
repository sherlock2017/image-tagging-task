import React, { Component } from 'react';
import {
    Container, Row, Col, Form, FormGroup, Label, Button, ButtonToggle, Input
} from 'reactstrap';
import {withRouter,Redirect } from "react-router-dom";
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
import axios from 'axios';
class ConsentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:null,
                isConsent: 'false',
                agegroup: '',
                gender: '',
                images: []
                
        };

        this.onConsentValueChange = this.onConsentValueChange.bind(this);
        this.onGenValueChange = this.onGenValueChange.bind(this);
        this.onAgeValueChange = this.onAgeValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    componentDidMount() {
        axios.get('api/images')
            .then(response => {
                this.setState({ images: response.data });
                console.log('img');
            })
            .catch(function (error){
                console.log(error);
            })
    }
    onConsentValueChange(event) {
        this.setState(
            { isConsent: event.target.value == "on"? true :false });
     
    }

    onGenValueChange(event) {
        this.setState({
            selectedGenOption: event.target.value
        });
    }
    
    onAgeValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        const formdata= {
                id:uuid(),
                isConsent: this.state.isConsent,
                agegroup: this.state.selectedOption,
                gender: this.state.selectedGenOption
           }
        
         //alert('An essay was submitted: ' + this.state.isConsent +this.state.selectedGenOption + this.state.selectedOption  + formdata.id);
       
            axios.post('api/userdata', formdata)
            .then(res => console.log("form submitted")); 
            
           this.props.history.push('/imgaeTask');
           // ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));
          /*  return  <Redirect  to="/ImagePannel/" />  */      
    }
    
   
    render() {
        return (
            <div>
                <Container>
                
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row></FormGroup>
                        <FormGroup row><ExpData></ExpData></FormGroup>
                        <FormGroup row><Col xl="12" md={{ size: 6, offset: 2}}><Tutorial ></Tutorial></Col></FormGroup>

                        <FormGroup row>
                            <ConsentToggler></ConsentToggler>
                            <Col sm="2">
                                <FormGroup check>
                                    <Label check style={{ marginTop: '1rem' }}>
                                        <Input checked={this.state.isChecked} name="checkbox2" required onChange={this.onConsentValueChange}  type="checkbox" id="checkbox2" />{'*'}
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
                                        <Input value="male" 
                                            checked={this.state.selectedGenOption === "male"}
                                            onChange={this.onGenValueChange} required type="radio" name="gender" />{'Male'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input value="female" checked={this.state.selectedGenOption === "female"}
                                            onChange={this.onGenValueChange} required type="radio"  name="gender" />{'Female '}
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup tag="fieldset" row>
                            <legend className="col-form-label col-sm-2">Age</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                    <Label check>
                                        <Input value="below18" checked={this.state.selectedOption === "below18"}
                                            onChange={this.onAgeValueChange} required type="radio" name="age" />{'Under 18'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input value="18-40" checked={this.state.selectedOption === "18-40"}
                                            onChange={this.onAgeValueChange} required type="radio" name="age" />{'Between 18 to 40'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input value="above40" checked={this.state.selectedOption === "above40"}
                                            onChange={this.onAgeValueChange} required type="radio" name="age" />{'Above 40'}
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row> <Button color="primary" >Submit</Button></FormGroup>
                        
                    </Form>
                   {/*  <ImagePannel/> */}
                </Container>
               
            </div>

        )
    }

}
export default withRouter(ConsentForm); 