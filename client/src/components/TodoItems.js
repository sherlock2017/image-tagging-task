import React, { Component } from "react";
import {Badge} from 'reactstrap';

class TodoItems extends Component {
   constructor(props) {
    super(props);
    this.state={
      currentImgId:"",
      taglist:[]
    }
    this.createTasks = this.createTasks.bind(this);
  }
  
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return <li class="fa fa-trash" onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Badge pill>X</Badge></li>
              
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
  
    return (
      <ul className="theList">
          {listItems} 
      </ul>
    );
  }
};
 
export default TodoItems;
