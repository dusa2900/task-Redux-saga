import { connect } from "react-redux";

export const Display=({user})=>

{
   const Duser=user.map(
       x=>
       {
        const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1b6NumgqTPC22Q_x8Dcb7XSYm0X9q-tgSA&usqp=CAU";
        return(
        <div className="container mt-4">
        <div className="media border p-4">
        <img src={url} alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
        <div className="media-body" key={x.id}>
        <h4> <span style={{color:"red"}}>Title:</span> {x.title}</h4>
        <p><span style={{color:"green",fontWeight:"bold"}}>Body:</span> &nbsp;{x.body}</p>      
        </div>
        </div>
        </div>
       )
        }
   )

   
    return(        
        <>
        {Duser}
        </>
          )
}

const f1=(store)=>
{
    return {user:store.f1.info}
}

export const DisplayHoc=connect(f1,null)(Display);