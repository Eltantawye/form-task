
const initState = {
  name : '',
  email : '',
  phone : ''
}

const reducer = (state =initState,action) => {
  let newState = {...state}
  let props;
  if(action.type==='EDIT') {
    newState = {
      ...newState,
      [action.name] : action.value
    }
    return newState;
  }

  if(action.type === 'SUBMIT'){
    props = action.props;
    if(newState.name && newState.email &&newState.phone){
      props.history.push('/data');
    }
    newState.err="Please , input all fields";
  }

  if(action.type === 'LOADING'){
    newState.apidata=action.data;
    //reload page after 4 seconds
    newState.load=false;
  }

  if(action.type === 'LOADING_ASYNC'){
    newState.load=true;
  }
  return newState;
}


export default reducer;
