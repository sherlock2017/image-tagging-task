import { React, Component } from "react";
import { Button} from 'reactstrap';
import TodoItems from "./TodoItems";
import "./TodoList.css";
import axios from 'axios';
import {withRouter } from "react-router-dom";


 
class TodoList extends Component {
 constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentImgId:""
  	};
 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state.currentImgId= this.props.imgid;
    //this.handleClick= this.handleClick.bind(this)
    
  }
 
  addItem(e) {
	  if (this._inputElement.value !== "") {
	    var newItem = {
	      text: this._inputElement.value,
	      key: Date.now()
	    };
	 
	    this.setState((prevState) => {
	      return { 
	      	items: prevState.items.concat(newItem) 
	      };
	    });
	   
	    this._inputElement.value = "";
	  }
	     
    e.preventDefault();
}
deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}
handleClick = (e) => {
  e.preventDefault();
   // save ssid, img id , taglist
   if(this.state.items){
      this.state.items.map((tag, index) =>{
        const formdata= {
          id:this.state.currentImgId,
          name:tag.text
        }
           axios.post('api/imagetags', formdata)
            .then(res => console.log(tag.text+"  submitted")); 
            this.props.history.push('/imageTask');  //
      })
   }
   
  
};

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
             placeholder="enter tag">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        <div>
      <Button color="primary" onClick={this.handleClick} >Next</Button></div>
      </div>
    );
  }
}
 
export default withRouter(TodoList); 
