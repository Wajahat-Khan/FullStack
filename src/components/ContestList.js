import React, { Component } from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';


const ContestList = ({ contest }) => {

    return (
        <div>
            {contest.map(element =>
                <ContestPreview key={element.id} {...element} />
            )}
        </div>
    );

}

ContestList.propTypes = {
    contests: PropTypes.array
};
export default ContestList