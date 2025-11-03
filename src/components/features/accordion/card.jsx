import React, { Component } from 'react';

import SlideToggle from 'react-slide-toggle';
import { safeContent } from '../../../utils/utils';

class Card extends Component {

    render() {
        const { title, expanded, adClass, type = "default" } = this.props;

        return (
            "default" === type ?
            
            <SlideToggle
                onExpanded = {() => {}}
                onExpanding={ () => {}}
                collapsed = {expanded ? false : true} >
                { ( {onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className={ `card ${ adClass }`  }>
                            <div className="card-header" onClick={ onToggle } >
                                <h2 className="card-title">
                                    <span className={ `toggle-button ${toggleState.toLowerCase() }`} dangerouslySetInnerHTML={ safeContent(title) } style={ {height: 'auto'} }></span>
                                </h2>
                            </div>
                            <div ref={ setCollapsibleElement }>
                                <div className="card-body">
                                    { this.props.children }
                                </div>
                            </div>
                        </div>
                    )
                 }
            </SlideToggle> : 

            <SlideToggle
                collapsed = {expanded ? false : true} >
                {  ( {onToggle, setCollapsibleElement, toggleState } ) => (
                    <div className={ `acc-item ${ adClass }`  }>
                        <h5>
                            <span className={ `toggle-button ${toggleState.toLowerCase() }`} dangerouslySetInnerHTML={ safeContent(title) }  onClick={ onToggle } style={ {height: 'auto'} }></span>
                        </h5>
                        <div ref={ setCollapsibleElement }>
                            <div className="collapse-wrap">
                                { this.props.children }
                            </div>
                        </div>

                    </div>
                ) }
            </SlideToggle>
        );
    }
}

export default Card;