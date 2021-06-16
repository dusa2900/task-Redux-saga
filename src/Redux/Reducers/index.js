import { combineReducers } from 'redux';
import { FirstReducer } from './FirstReducer';

export const combineStore=combineReducers(
    {
        f1:FirstReducer
    }
)