import React, { Component} from 'react'

class NavBar extends Component { 
     render(){  
     return(
        <div><nav className ="navbar navbar-inverse">
        <div className ="container-fluid">
          <div className="navbar-header">
          <button type="button" className="btn" className ="navbar-toogle" data-toogle="collapse" data-target="#MyNavbar" >
            <span className="icon-bar"> </span>
            <span className="icon-bar"> </span>
            <span className="icon-bar"> </span>
          </button>   
          </div>
          </div> 
        </nav>
      </div>    
    )
}
};
export default NavBar