import React , { Component }  from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import { v4 as uuid } from 'uuid';
class ImagePannel extends Component {
    // const ImagePannel = (props) => {
        
        constructor(props) {
            super(props);
            this.state = {
                    };    
           // this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleClick = (e) => {
            e.preventDefault();
             // save ssid, img id , taglist
            const formdata= {
                    id:uuid(),
                    name:"tagtest"
               }
            
              
          };
        
    
    render() {
        //var imgId = this.props.imgId;
    return (
        
        <div> 
 
            {this.state.imageArray.map((img, index) => (
            // <Form onSubmit={this.handleSubmit}>
        <CardGroup>
        
            <Card>
            
            <CardImg key={index} top width="80%" src={img.imgurl} alt="Card image cap" />
            {/* <p key={index}>Hello, {img.id} from {img.imgsrc}!</p> 
                      //  <div>
            //     {this.state.images ? this.state.images.map(img => 
            //     (<div key={img._id}> {img ? <img src={this.state.imgsrc} 
            //     alt={img.name}/>:<span>deleted</span>}</div>)): 
            //     <h3>loading</h3>}
            //     </div> 
            
            */}
    
            </Card>
            
            <Card>
                <CardBody width="80%">
                    <CardTitle tag="h5">List Tags here.</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Describe the image in one word?</CardSubtitle>
                    <CardText>Add as many tags you can think of. Press Enter to add tags. Click Next to move to next image.</CardText>
                    {/* <TodoList callbackFromTodoList={this.myCallbackTodoList}/>  */}
                    <Button color="primary"  onClick={this.handleClick}>Next</Button>
                </CardBody>
            </Card>
            {/* <Card></Card> */}
           
        </CardGroup>
        // </Form>
        ))}
       
       </div>
        )
    }
}
export default ImagePannel;