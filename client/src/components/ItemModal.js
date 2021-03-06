
import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component { 
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }
        this.props.addItem(newItem);

        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                color="dark"
                onClick={this.toggle}>
                Add Tags</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Image Tags</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="item">Tag</Label>
                      <Input
                        type="text"
                        name="name"
                        id="item"
                        placeholder="Add shopping item"
                        onChange={this.onChange}
                      />
                      <Button color="dark" style={{ marginTop: '2rem' }} block>
                        Add 
                      </Button>
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>

            </div>
        )
    }

}

const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps,{addItem})(ItemModal);