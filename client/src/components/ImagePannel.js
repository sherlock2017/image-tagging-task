import React from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import TodoList from './TodoList';
import ImageRender from './ImageRender';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';
import image from './img/pic6.jpg';



const ImagePannel = (props) => {
    
    return (
        
           
        <CardGroup >
           
            <Card>
            
                <CardImg top width="80%" src={image} alt="Card image cap" />
            </Card>
            <Card>
                <CardBody width="80%">
                    <CardTitle tag="h5">List Image Tags here.</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">What do yo see on left?</CardSubtitle>
                    <CardText>Add as many tags you can think of. Press Enter to add tags. Click Next to move to next image.</CardText>
                    <TodoList /> 

                  {/*   */}
                    <Button color="primary"  >Next</Button>
                </CardBody>
            </Card>
            {/* <Card></Card> */}
	
        </CardGroup>
    );
};

export default ImagePannel;