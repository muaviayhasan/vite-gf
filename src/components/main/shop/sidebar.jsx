import React, { Component } from 'react';
import store from '../../../store';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ShopSidebar from '../../features/sidebar/shop-sidebar';
import ProductList from '../../features/product/common/product-list';
import ErrorPage from '../pages/404';

import { innerLoading, outerLoading } from '../../../actions';

class ShopList extends Component {

    componentDidUpdate() {
        store.dispatch(innerLoading());
    }

    componentWillUnmount() {
        store.dispatch(outerLoading());
    }

    render() {
        let grid = this.props.match.params.grid;
        const titles = { "list": "List", "2cols": "Grid 2 Columns", "3cols": "Grid 3 Columns", "4cols": "Grid 4 Columns" };

        if( grid !== "list" && grid !== "2cols" && grid !== "3cols" && grid !== "4cols") {
            return (
                <ErrorPage />
            )
        }
        
        return (
            <div className="main">
                <PageHeader title={ titles[grid] } subTitle="Shop"/>
                <Breadcrumb title={ titles[grid] } parent1={ ["Shop","shop/sidebar/list"] } adClass="mb-2"/>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <ProductList column={ grid }/>
                            </div>

                            <div className="col-lg-3 order-lg-first">
                                <ShopSidebar adClass="sidebar sidebar-shop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopList;