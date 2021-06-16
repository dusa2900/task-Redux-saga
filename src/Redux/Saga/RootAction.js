import axios from 'axios';
import {call,put } from 'redux-saga/effects';

function getCaller(url)
{
    return axios.get(url);
}

function addPoster(url,data)
{
    return axios.post(url,data)
}


export function* getInfo()
{
    let response=yield call(getCaller,"http://localhost:4000/info");
    
    yield put({type:"INFO_ACTION",records:response.data})

}

export function* addInfo(action)
{
    let member=action.data;
    let response=yield call(addPoster,"http://localhost:4000/info",member);
    console.log(response.data);
    yield getInfo();

}