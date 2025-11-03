import React, { Component } from 'react';
// import Custom Components

import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';

class Elements extends Component {

    render() {
        return (
            <div className="main">

                <PageHeader title="Elements List" subTitle="Elements"/>
                <Breadcrumb title="Elements" />
                <ElementList />
                
            </div>
        );
    }
}

export default Elements;
