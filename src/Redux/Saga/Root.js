import {  takeEvery } from 'redux-saga/effects'
import { addInfo, getInfo } from './RootAction';

export function* RootSaga()
{
    yield takeEvery("INFO_DATA_ACTION",getInfo);
    yield takeEvery("ADD_INFO",addInfo);
}