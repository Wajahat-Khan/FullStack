import React, { Component } from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';



class ContestList extends Component {
    render() {
 
        return (
            <div>
                  {contest.map(element=>
                      <ContestPreview key={element.id} {...element} />
                  )}
                </div>
        );
     
    }
}
export default ContestList;
const ContestList =({contest})=>{



}


ContestList.propTypes = {
    contests: PropTypes.array
  };
export default ContestList