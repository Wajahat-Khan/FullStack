import PropTypes from 'prop-types';
import React, { Component } from 'react';



class ContestPreview extends Component {
    handleClick=()=>{
        console.log(this.props.categoryName)
    }
    render() {
        return (
            <div className="ContestPreview link" onClick={this.handleClick}>
            <div className="category-name">
                {this.props.categoryName}
            </div>
            <div className="contest-name">
                {this.props.contestName}
            </div>
        </div>
        );
    }
}


ContestPreview.propTypes={
categoryName: PropTypes.string.isRequired,
contestName: PropTypes.string.isRequired
}
export default ContestPreview;