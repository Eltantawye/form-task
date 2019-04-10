import {takeLatest,put,delay} from 'redux-saga/effects';
import axios from 'axios';

function* asyncSubmit() {
  let person ='';
  //fake API call using axios to get name of person
  yield axios.get(`https://jsonplaceholder.typicode.com/users/1`)
      .then(res => {
        person=res.data.email;
      })
  yield delay(4000);
  yield put({type:'LOADING' ,data:person});
}

export function* watchSubmit() {
  yield takeLatest('LOADING_ASYNC',asyncSubmit)
}
