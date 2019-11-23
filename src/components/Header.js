import React from 'react';

const Header=({message})=>{
    return(
      <div className="Header">
        <h2 className="text-center">
          {message}
        </h2>
      </div>
    )
  }

export default Header;