import React, { Component } from 'react';
import { connect } from 'react-redux';

class InnerOverlay extends Component {
    render() {
        return (
            <React.Fragment>
            {
                this.props.isLoading ? 
                    <div className="loading-overlay">
                        <div className="bounce-loader">
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
        isLoading: state.overlay.isInnerLoading
    }
}

export default connect( mapStateToProps ) ( InnerOverlay );