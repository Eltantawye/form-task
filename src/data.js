import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';

class Data extends Component {

  render() {
    console.log(this.props);
    const {name,email,phone,apidata} = this.props;
    const showData = this.props.load ? (<img src={logo} alt="logo" className="App-logo" />) : (
      <div >
      <ul className="collection with-header">
        <li className="collection-header center"><h4>Info :</h4></li>
        <li className="collection-item teal lighten-2">Name : <span className="b">{name}</span></li>
        <li className="collection-item teal lighten-2">Email : {email}</li>
        <li className="collection-item teal lighten-2">phone : {phone}</li>
        <li className="collection-item teal lighten-5">Please Contact : {apidata}</li>
    </ul>
      </div>
    );
    return(
      <div className="container">
          {showData}
      </div>
    );
  }
}
const mapStateToProps =(state) =>{
return {
    ...state,
    loading:state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loading:dispatch({type:"LOADING_ASYNC"})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Data);
