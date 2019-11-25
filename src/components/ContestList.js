import React, { Component } from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';


const ContestList = ({ contests, onContestClick}) => {

    return (
        <div>
            {contests.map(element =>
                <ContestPreview onClick={onContestClick} key={element.id} {...element} />
            )}
        </div>
    );

}


export default ContestList