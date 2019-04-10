import React,{Component} from 'react';
import {connect} from 'react-redux';

class Form extends Component {
  state = {
        fields: {},
        errors: {}
      }


  render() {
    const {editState,submit} =this.props;

    return (
      <div className="container" >
      <h1 className="center" > Fill all Information </h1>
      <form onSubmit={(e) => {e.preventDefault();  submit(this.props);}}>
        <label>
          Name:
          <input type="text" name="name" onChange={(event) => editState(event.target.name,event.target.value)}/>
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={(event) => editState(event.target.name,event.target.value)} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" onChange={(event) => editState(event.target.name,event.target.value)} />
        </label>
        <br />
        <span>{this.props.err}</span>
        <br />
        <input className=" right waves-effect waves-light btn" type="submit" value="Submit" />

      </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editState :(name,value) => dispatch({type:"EDIT",name: name, value:value} ),
    submit : (props) => dispatch({type:"SUBMIT",props:props}),
    loading : () => dispatch({type:'LOADING'})

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
