import 'bootstrap/dist/css/bootstrap.min.css';
import React , { Component }  from 'react';
import ImagePannel2 from './ImagePannel2';
import axios from 'axios';

class ImgaeTask extends Component{
                arrayBufferToBase64(buffer) {
                  var binary = '';
                  var bytes = [].slice.call(new Uint8Array(buffer));
                  bytes.forEach((b) => binary += String.fromCharCode(b));
                  return window.btoa(binary);
                }
                  
                // Function to generate random number  
                randomNumber(min, max) {  
                  return Math.floor(Math.random() * (max - min) + min); 
                }  
                
                constructor(props) {
                  super(props);
                  this.state = {
                          images: [],  //whole data
                          imageArray: [] //id,src
                          };   
                }
                componentDidMount() {
                    axios.get('api/images')
                        .then(response => {
                            this.setState({ images: response.data });
                            var base64Flag = 'data:image/png;base64,';
                            var imagelist = [];
                            if(this.state.images){
                                this.state.images.map((img, index) => 
                                imagelist.push({
                                    id: img._id,
                                    imgurl: base64Flag + this.arrayBufferToBase64(response.data[index].img.data.data)
                                })
                            )
                            
                            this.setState({imageArray : imagelist});
                            }
                        })
                        .catch(function (error){
                            console.log(error);
                        })
                }

  render(){
    var i= this.randomNumber(0, 10);
  return (
 
  //pass random id 3 times to create pannel
    //  <ImagePannel entries={this.state.imgId}></ImagePannel>
    <div>
       {this.state.imageArray.map((img,index) => (
            
         <div>
          {/* <p>{i}{this.state.imageArray.id}</p> */}
          <ImagePannel2  key={index} imgid={img.id} imgsrc={img.imgurl}></ImagePannel2> 
          </div> 
    ))}
        </div>
  );
  }
}

export default ImgaeTask;
