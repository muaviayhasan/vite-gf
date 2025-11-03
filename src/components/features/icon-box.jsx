import React, { Component } from 'react';

import { safeContent } from '../../utils/utils';

class IconBox extends Component {
    render() {
        const { boxStyle, iconClass, title, text } = this.props;
        return (
            <div className={ `icon-box ${ boxStyle }` }>
                <span className={ `icon-box-icon` }>
                    <i className={ iconClass }></i>
                </span>
                
                <div className="icon-box-content">
                    <h3 className="icon-box-title">{ title }</h3>
                    <p dangerouslySetInnerHTML={ safeContent(text)  }></p>
                </div>
            </div>
        )
    }
}

export default IconBox;