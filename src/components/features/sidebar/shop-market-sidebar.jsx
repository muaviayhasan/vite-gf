import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-input-range/lib/css/index.css';

// import components 
import Accordion from '../../features/accordion/accordion';
import Card from '../../features/accordion/card';

import { getCountByRating } from '../../../services';
import { toggleBrandFilter, toggleColorFilter, toggleRatingFilter, filterPrice } from '../../../actions';
import { findIndex } from '../../../utils/utils';

class ShopSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: { max: 1000, min: 0 },
            toggle: false
        };

        this.resizeHandle = this.resizeHandle.bind(this);
    }

    componentDidMount() {
        window.addEventListener( "resize", this.resizeHandle );
        this.resizeHandle();
    }

    componentWillUnmount() {
        window.removeEventListener( "resize", this.resizeHandle );
    }

    resizeHandle() {
        if ( document.querySelector("body").offsetWidth < 992 )
            this.setState({toggle: true});
        else
            this.setState({toggle: false});
    }

    changeIcon(e){
        e.target.classList.toggle('collapsed');
    }

    hideSideBar(){
        if (document.querySelector('body').classList.contains('sidebar-filter-active'))
          document.querySelector('body').classList.remove('sidebar-filter-active');
    }

    toggleSideBar(){
        if (document.querySelector('body').classList.contains('sidebar-filter-active'))
            document.querySelector('body').classList.remove('sidebar-filter-active');
        else
            document.querySelector('body').classList.add('sidebar-filter-active');
    }

    getWidth() {
        return document.querySelector("body").offsetWidth;
    }

    clearAll(e){
        let items = document.querySelector('.sidebar-shop').querySelectorAll('input');
        for( let i = 0 ; i < items.length ; i ++ ){
            items[i].checked = false;
        }

        items = document.querySelector('.sidebar-shop').querySelectorAll('.selected');
        for( let i = 0 ; i < items.length ; i ++ ){
            items[i].classList.remove('selected');
        }
        
        this.setState({value:{ max: 1000, min: 0}});
        this.props.resetFilter();
        e.preventDefault();
    }
    
    selectColor(e){
        e.currentTarget.classList.toggle('selected');
        e.preventDefault();
    }

    render() {        
        const colors = [ "#b87145", "#f0c04a", "#333333", "#cc3333", "#3399cc", "#669933", "#f2719c", "#ebebeb" ];
        const brands = [ "Next", "River Island", "Geox", "New Balance", "UGG", "F&F", "Nike" ];
        const ratings = [ 5, 4, 3, 2, 1 ];
        const priceTitleArr = [ "Under $25", "$25 to $50", "$50 to $100", "$100 to $200", "$200 & Above" ];
        const priceRangeArr = [ 
            {
                min: 0,
                max: 24
            },
            {
                min: 25,
                max: 50
            },
            {
                min: 50,
                max: 100
            },
            {
                min: 100,
                max: 200
            },
            {
                min: 200,
                max: 10000
            } 
        ];

        let ratingCountArr = [];
        let { filters, products } = this.props;

        for( let i = 5 ; i >=1 ; i -- ) {
            ratingCountArr.push(getCountByRating(products.slice(0,74), i));
        }
        products = products.slice(66,74);

        return (
            <React.Fragment>
                <aside className={ `${ this.state.toggle ? 'sidebar-filter' : 'sidebar' } sidebar-shop` }>
                    <div className={ this.state.toggle ? 'sidebar-filter-wrapper' : ''  }>
                        
                        <div className="widget widget-categories">
                            <h3 className="widget-title">Electronics</h3>

                            <div className="widget-body">
                                <Accordion>
                                    <Card title="Laptops & Computers" type="acc-item" expanded={ true  }>
                                        <ul>
                                            <li><Link to="#">Desktop Computers</Link></li>
                                            <li><Link to="#">Monitors</Link></li>
                                            <li><Link to="#">Laptops</Link></li>
                                            <li><Link to="#">iPad &amp; Tablets</Link></li>
                                            <li><Link to="#">Hard Drives &amp; Storage</Link></li>
                                            <li><Link to="#">Printers &amp; Supplies</Link></li>
                                            <li><Link to="#">Computer Accessories</Link></li>
                                        </ul>
                                    </Card>
                                    <Card title="TV & Video" type="acc-item">
                                        <ul>    
                                            <li><Link to="#">AV Receivers &amp; Amplifiers</Link></li>
                                            <li><Link to="#">Blu-ray Players &amp; Recorders</Link></li>
                                            <li><Link to="#">DVD Players &amp; Recorders</Link></li>
                                            <li><Link to="#">HD DVD Players</Link></li>
                                            <li><Link to="#">Home Theater Systems</Link></li>
                                            <li><Link to="#">Projection Screens</Link></li>
                                            <li><Link to="#">Projectors</Link></li>
                                            <li><Link to="#">Satellite Television</Link></li>
                                            <li><Link to="#">Televisions</Link></li>
                                            <li><Link to="#">TV-DVD Combos</Link></li>
                                            <li><Link to="#">Streaming Media Players</Link></li>
                                        </ul>
                                    </Card>
                                    <Card title="Cell Phone" type="acc-item">
                                        <ul>
                                            <li><Link to="#">Carrier Cell Phones</Link></li>
                                            <li><Link to="#">Unlocked Cell Phones</Link></li>
                                            <li><Link to="#">Mobile Broadband</Link></li>
                                            <li><Link to="#">Accessories</Link></li>
                                            <li><Link to="#">Cases, Holsters &amp; Clips</Link></li>
                                        </ul>
                                    </Card>
                                    <Card title="Digital Cameras" type="acc-item">
                                        <ul>
                                            <li><Link to="#">AV Receivers &amp; Amplifiers</Link></li>
                                            <li><Link to="#">Blu-ray Players &amp; Recorders</Link></li>
                                            <li><Link to="#">DVD Players &amp; Recorders</Link></li>
                                            <li><Link to="#">HD DVD Players</Link></li>
                                            <li><Link to="#">Home Theater Systems</Link></li>
                                            <li><Link to="#">Projection Screens</Link></li>
                                            <li><Link to="#">Projectors</Link></li>
                                            <li><Link to="#">Satellite Television</Link></li>
                                            <li><Link to="#">Televisions</Link></li>
                                            <li><Link to="#">TV-DVD Combos</Link></li>
                                            <li><Link to="#">Streaming Media Players</Link></li>
                                        </ul>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Brands</h3>

                            <div className="widget-body">

                                {  brands.map((item, index) => (
                            
                                    <div className="filter-item" key={ index }>
                                        <div className="custom-control custom-checkbox">

                                            <input type="checkbox" 
                                                className="custom-control-input" 
                                                id={ `brand-${index+1}`}
                                                onClick={ (e) => this.props.toggleBrandFilter(item) } 
                                                defaultChecked={ -1 < findIndex( filters['brand'], 
                                                filter => filter === item ) ? true : false }
                                            />

                                            <label className="custom-control-label" htmlFor={ `brand-${index+1}` }>{ item}</label>

                                        </div>
                                    </div>

                                )) }

                            </div>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Price</h3>

                            <div className="widget-body">
                                <div className="filter-items">
                                    {
                                        priceTitleArr.map( ( item, index ) => 
                                            <div className="filter-item" key={ index  }>
                                                <div className="custom-control custom-radio">
                                                    <input 
                                                        type="radio" 
                                                        className="custom-control-input" 
                                                        id={ `price-${ index + 1 }` }
                                                        name="filter-price"
                                                        onClick={ (e) => { this.props.filterPrice( priceRangeArr[index] ); } }
                                                        defaultChecked={ filters['value'].min === priceRangeArr[index].min && filters['value'].max === priceRangeArr[index].max ? true : false }
                                                />
                                                    <label className="custom-control-label" htmlFor={ `price-${ index + 1 }`  }>{ priceTitleArr[index] }</label>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Customer Rating</h3>

                            <div className="widget-body">
                                <div className="filter-items">
                                    {
                                        ratings.map( (item, index) => 

                                            <div className="filter-item" key={ index } >
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" 
                                                        className="custom-control-input" 
                                                        id={ `cus-rating-${index}` }
                                                        onClick={ (e) => this.props.toggleRatingFilter(item) }
                                                        defaultChecked={ -1 < findIndex( filters['rating'], 
                                                filter => filter === item ) ? true : false }
                                                    />
                                                    <label className="custom-control-label" htmlFor={ `cus-rating-${index}`  }>
                                                        <span className="ratings-container">
                                                            <span className="ratings">
                                                                <span className="ratings-val" style={ { width: 20 * item + "%" } }></span>
                                                            </span>
                                                            <span className="ratings-text">( { ratingCountArr[index] } )</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Colour</h3>

                            <div className="widget-body">
                                <div className="filter-colors">
                                    {
                                        colors.map((item, index) => (
                                            <Link to="#" className={ -1 < findIndex( filters['color'], filter => filter === item ) ? "selected" : "" } style={ {background:item}} onClick={ (e) => { this.props.toggleColorFilter(item); e.preventDefault(); }} key={ index }>
                                                <span className="sr-only">Colour Name</span>
                                            </Link>
                                        ) )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="widget widget-banner-sidebar">
                            <div className="banner-sidebar-title">ad banner 218 x 430px</div>
                            
                            <div className="banner-sidebar banner-overlay">
                                <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                    <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-13/banners/banner-6.jpg` } alt="banner"/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </aside>
                { this.state.toggle ?
                    <button className="sidebar-fixed-toggler" onClick={ this.toggleSideBar }><i className="icon-cog"></i></button> :
                    ''
                }
                <div className="sidebar-filter-overlay" onClick={ this.hideSideBar }></div>
            </React.Fragment>
        );
    }
}

export const mapStateToProps = ( state ) => {
    let rat_count = [];
    for( let i = 5 ; i >=1 ; i -- ) {
        rat_count.push( getCountByRating(state.data.products.slice(0,74), i) );
    }
    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters
    }    
}

export default connect(mapStateToProps, { toggleBrandFilter, toggleColorFilter, toggleRatingFilter, filterPrice })(ShopSidebar);