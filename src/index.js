import React from 'react';
import ReactDOM from 'react-dom';

const Header=({message})=>{
  return(
    <div className="Header">
      <h2 className="text-center">
        {message}
      </h2>
    </div>
  )
}

const App=()=>{
  return(
  <div className="App">  
    <Header message="Naming Contest" />
  <div>
    ...
  </div>
  </div>
  )
};

ReactDOM.render(
<App />,
  document.getElementById('abc')
);

