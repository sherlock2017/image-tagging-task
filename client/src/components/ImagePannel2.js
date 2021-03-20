import React , { Component } from 'react';
import {
    Card,CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import TodoList from './TodoList';

class ImagePannel2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // imgaeid:''
        };
    }
    
    render(){
        var imgid = this.props.imgid;
        var imgsrc = this.props.imgsrc;

    return (
        
           
        <CardGroup >
           
            <Card>
            
                <CardImg id={imgid} top width="80%" src={imgsrc} alt="Card image cap" />
            </Card>
            <Card>
                <CardBody width="80%">
                    <CardTitle tag="h5">List Image Tags here.</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">What do yo see on left?</CardSubtitle>
                    <CardText>Add as many tags you can think of. Press Enter to add tags. Click Next to move to next image.</CardText>
                    <TodoList imgid={imgid} /> 

                </CardBody>
            </Card>
            {/* <Card></Card> */}
	
        </CardGroup>
    );
    }
};

export default ImagePannel2;