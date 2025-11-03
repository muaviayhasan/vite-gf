import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import store from '../../../store';

// import Custom Components
import SideBar from '../../features/sidebar/shop-filter';
import HeaderOne from '../../common/header/header-1';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import FooterOne from '../../common/footer/footer-one';
import FooterFour from '../../common/footer/footer-four';
import OuterOveraly from '../../common/overlay/outer-overlay';
import ProductListTwo from '../../features/product/common/product-list-two';
import ErrorPage from '../../main/pages/404';
import LayOut from '../../app';

import { initSettings } from '../../../utils/utils';
import { outerLoading, innerLoading } from '../../../actions';

class NoSideBar extends Component {

    componentDidMount() {
        initSettings();
        store.dispatch(outerLoading());    
    }

    componentDidUpdate() {
        if ( store.getState() && 'inner' === store.getState().overlay.type ) {
            store.dispatch(innerLoading());
        }
    }

    componentWillUnmount() {
        store.dispatch(outerLoading());
    }

    hideSideBar() {
        if (document.querySelector('body').classList.contains('sidebar-filter-active'))
           document.querySelector('body').classList.remove('sidebar-filter-active');
    }

    render() {
        const type = this.props.match.params.type;
        const title = { "boxed":"Boxed No Sidebar", "fullwidth":"Fullwidth No Sidebar" }
        const bread = { "boxed":"Boxed", "fullwidth":"Fullwidth" }

        if ( type !== 'boxed' && type !== 'fullwidth') {
            return (
                <LayOut>
                    <ErrorPage />
                </LayOut>
            )
        }

        return(
            <React.Fragment>
                <OuterOveraly />
                <div className ="page-wrapper">
                    <HeaderOne container={ type === 'boxed' ? 'container' : 'container-fluid'}/>

                    <div className="main">
                        <div className="page-header text-center" style={ {backgroundImage: `url('assets/images/page-header-bg.jpg')`} }>
                            <div className={ type === 'boxed' ? 'container' : 'container-fluid'  }>
                                <h1 className="page-title">{ title[type] }<span>Shop</span></h1>
                            </div>
                        </div>

                        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                            <div className={ type === 'boxed'? 'container' : 'container-fluid'  }>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/` }>Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Shop</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">No Sidebar</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{ bread[type] }</li>
                                </ol>
                            </div>
                        </nav>

                        <div className="page-content">
                            <div className={ type === 'boxed' ? 'container' : 'container-fluid'  }>
                                <ProductListTwo type={ type } />
                                <div className="sidebar-filter-overlay" onClick = { () => this.hideSideBar()  }></div>
                                <SideBar numbers = {50} />
                            </div>
                        </div>
                    </div>
                    { 
                        type === "boxed" ? 
                            <FooterOne /> :
                        type === "fullwidth" ?
                            <FooterFour /> : ''
                    }
                    <ToastContainer autoClose={ 3000 } className="toast-container" />
                </div>

                <MobileMenu />
            </React.Fragment>
        )
    }
}

export default NoSideBar;