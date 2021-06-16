import React from 'react';
import { Link } from 'react-router-dom';


class Routings extends React.Component{

    render()
    {
        return(<>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link active" to="">Active</Link>
                    </li>
                    <li className="nav-item active" style={{paddingLeft:"100px"}}>
                    <Link className="nav-link active" to="/posts-update">Add UserInfo</Link>
                    </li>
                    <li className="nav-item active" style={{paddingLeft:"100px"}}>
                    <Link className="nav-link active" to="/posts-display">View UserInfo</Link>
                    </li>
                   
                </ul>
                </nav>

        </>
        )
    }
}

export default Routings;