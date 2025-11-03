import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        const {title, subTitle, background="url(assets/images/page-header-bg.jpg)" } =  this.props;
        return (
            <div className="page-header text-center" style={ {backgroundImage: background }} >
        		<div className="container">
        			<h1 className="page-title">{title}<span>{subTitle}</span></h1>
        		</div>
        	</div>
        );
    }
}

export default PageHeader;