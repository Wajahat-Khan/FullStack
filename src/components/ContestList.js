import React, { Component } from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';


const ContestList = ({ contest, onContestClick}) => {

    return (
        <div>
            {contest.map(element =>
                <ContestPreview onClick={onContestClick} key={element.id} {...element} />
            )}
        </div>
    );

}

ContestList.propTypes = {
    contests: PropTypes.array,
    onContestClick:PropTypes.func.isRequired
};
export default ContestList