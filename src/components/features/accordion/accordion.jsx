import React, { Component } from 'react';

class Accordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    onHandleClick(e) {
        if ( e.target.classList.contains("toggle-button") || e.target.querySelector(".toggle-button") ) {
            if (e.target.classList.contains("collapsed") || ( e.target.querySelector(".toggle-button") && e.target.querySelector(".toggle-button").classList.contains("collapsed") ) || e.target.classList.contains("collapsing") || ( e.target.querySelector(".toggle-button") && e.target.querySelector(".toggle-button").classList.contains("collapsing"))) {
                if (e.currentTarget.querySelector(".toggle-button.expanded")) { 
                    e.currentTarget.querySelector(".toggle-button.expanded").click();
                }

                if (e.currentTarget.querySelector(".toggle-button.expanding")) {
                    e.currentTarget.querySelector(".toggle-button.expanding").click();
                }
            }
        }
    }
    
    render() {
        const { adClass, type = "normal" } = this.props;

        return (
            "normal" === type ?
                <div className = {`accordion  ${adClass}`} onClick={ this.onHandleClick} >
                    { this.props.children }
                </div> :
            "checkout" === type ?
                <div className = "accordion-summary" onClick={ this.onHandleClick} >
                    { this.props.children }
                </div> : ''
        );
    }
}

export default Accordion;