import React, { Component } from 'react';
import {
    Container, Col, Form, FormGroup, Label, Button, Input, Alert
} from 'reactstrap';
import {withRouter } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import ConsentToggler from './ConsentToggler';
import ExpData from './ExpData';
import Tutorial from './Tutorial';
import axios from 'axios';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerData } from '../actions/authActions';
import {clearErrors } from '../actions/errorActions';
class UserIndex extends Component {
    state = {
        id:null,
        isConsent: 'false',
        age: '',
        gender: '',
        msg:null
    };

    onConsentValueChange = this.onConsentValueChange.bind(this);
    onGenValueChange = this.onGenValueChange.bind(this);
    onAgeValueChange = this.onAgeValueChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    
    static propTypes ={
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        registerData: PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
     }

     componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
          //check for register error
          if(error.id === 'REGISTER_FAIL'){
            this.setState({msg:error.msg.msg})
          }else{
            this.setState({msg:null})
          }
        }

       
        // if(this.state.modal){
        //   if(isAuthenticated){
        //    // this.toggle();
        //   }
        // }
      }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //             id:null,
    //             isConsent: 'false',
    //             agegroup: '',
    //             gender: '',
    //     };

    //     this.onConsentValueChange = this.onConsentValueChange.bind(this);
    //     this.onGenValueChange = this.onGenValueChange.bind(this);
    //     this.onAgeValueChange = this.onAgeValueChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
       
    // }
 
    onConsentValueChange(event) {
        this.setState(
            { isConsent: event.target.value === "on"? true :false });
     
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
        alert("here")
        event.preventDefault();
        const {isConsent, age, gender} =this.state;
        const formdata= {
                isConsent,
                age,
                gender
           }
           this.props.registerData(formdata);
            
           alert('there')
           // axios.post('api/userdata', formdata)
            // .then(res => console.log("form submitted")); 
            this.props.history.push('/imgaeTask'); //
           // ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));
          /*  return  <Redirect  to="/ImagePannel/" />  */      
    }
    
   
    render() {
        return (
            <div>
                <Container>
                {this.state.msg ? (<Alert color="danger" >{this.state.msg}</Alert>):null}
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
                        <FormGroup row> <Button color="primary" >Start Session</Button></FormGroup>
                        
                    </Form>
                   {/*  <ImagePannel/> */}
                </Container>
               
            </div>

        )
    }

}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    error:state.error
})


export default withRouter(connect(mapStateToProps,{registerData,clearErrors})(UserIndex));
//export default withRouter(UserIndex); 