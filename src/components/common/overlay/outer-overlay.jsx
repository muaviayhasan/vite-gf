import React, { Component } from 'react';
import { connect } from 'react-redux';

class OuterOverlay extends Component {
    render() {
        const { isLoading } = this.props;
        return (
            <React.Fragment>
            {
                isLoading ? 
                    <div className="loading-overlay">
                        <div className="root-loader bounce-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div> 
                    </div>
                : ''
            }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.overlay.isOuterLoading
    }
}

export default connect( mapStateToProps )( OuterOverlay );