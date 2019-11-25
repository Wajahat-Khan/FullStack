import React from 'react';
import Header from './Header';
import ContestList from './ContestList'



class App extends React.Component{
 
state = 
    {
      pageHeader:"Naming Contest", 
      contests : this.props.initialContests
    };
    render(){
    return(
        <div className="App">  
          <Header message={this.state.pageHeader} />
          <ContestList contest={this.state.contests} />
        </div>
        )
  }
};

export default App;
