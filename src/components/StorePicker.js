import React from "react";
import { getFunName } from '../helpers';
  
class StorePicker extends React.Component {
 
  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();

    // 1. get the text from the input 
    console.log(this.myInput.value.value);

    //2. change the page to /store/'what they entered' - push state, keeps memory
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);

  }
  
  render() {    
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={ getFunName() }
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
