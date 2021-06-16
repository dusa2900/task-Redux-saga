import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TitleAction } from '../../Redux/Action/TitleAction';
import { Link } from 'react-router-dom';

 const Update=({AddContent})=>
{

    let [title,setTitle]=useState('');
    let [body,setBody]=useState('');

    

    return(
        <div className="container m-5">
            <h2>Fill  form:</h2>
            <form >
                <div className="form-group">
                <label >Title:</label>
                <input type="text"
                 className="form-control w-50" id="title"
                  placeholder="Title" value={title}
                  onChange={ (e)=>setTitle(e.target.value)}  />
                </div>
                <br/>
                <div className="form-group">
                <label >Content:</label>
                <textarea type="text" 
                className="form-control w-50" placeholder="Type here...."
                 id="content" value={body}
                onChange={ (e)=>setBody(e.target.value) } />
                </div>
            <br/>
                <Link to="/posts-display">
                <button onClick={()=> AddContent(title,body)} className="btn btn-primary" >Submit</button>
                </Link>
            </form>
            </div>
            
    )
} 

const f2=(dispatch)=>
{
    return bindActionCreators({AddContent:TitleAction},dispatch);
}

export const UpdateHoc=connect(null,f2)(Update);