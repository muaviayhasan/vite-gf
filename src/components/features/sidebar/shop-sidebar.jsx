import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import SlideToggle from 'react-slide-toggle';
import { Link } from 'react-router-dom';
import 'react-input-range/lib/css/index.css';

import _data from '../../../mock_data/data';
import { getCountByCategory } from '../../../services';
import { toggleCategoryFilter, resetFilter, toggleSizeFilter, toggleBrandFilter, toggleColorFilter, filterPrice } from '../../../actions';
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
        const sizes = [ "XS", "S", "M", "L", "XL", "XXL" ];
        const brands = [ "Next", "River Island", "Geox", "New Balance", "UGG", "F&F", "Nike" ];
        const colors = [ "#b87145", "#f0c04a", "#333333", "#cc3333", "#3399cc", "#669933", "#f2719c", "#ebebeb" ];
        let categoryCountArr = [];
        const { filters, products } = this.props;

        _data.categories.wears.map((item, index) => {
            return categoryCountArr.push(getCountByCategory(products.slice(0,47), item.name))
        });

        return(
            <React.Fragment>
                <aside className={ `${ this.state.toggle ? 'sidebar-filter' : 'sidebar' } sidebar-shop` }>
                    <div className={ this.state.toggle ? 'sidebar-filter-wrapper' : ''  }>
                        <div className="widget widget-clean">
                            <label>Filters:</label>
                            <a href="#a" className="sidebar-filter-clear" onClick = {(e) => this.clearAll(e) }>Clean All</a>
                        </div>

                        <SlideToggle collapsed = {false }>
                            {({onToggle, setCollapsibleElement}) => (
                                <div className="widget widget-collapsible">
                                    <h3 className = "widget-title"><a href="#category" onClick = {(e) => {onToggle(e); this.changeIcon(e); e.preventDefault() }} role="button" aria-expanded="true" aria-controls="widget-1">Category</a></h3>
                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <div className="filter-items filter-items-count">
                                                {
                                                    _data.categories.wears.map ( ( item, index ) => 

                                                        <div className="filter-item" key={ item.id }>
                                                            <div className="custom-control custom-checkbox">

                                                                <input type="checkbox" 
                                                                    className="custom-control-input" 
                                                                    id={ `cat-${index+1}`} 
                                                                    onClick={ (e) => this.props.toggleCategoryFilter(item.name) } 
                                                                    defaultChecked={ -1 < findIndex( filters['category'], filter => filter === item.name ) ? true : false }
                                                                />

                                                                <label className="custom-control-label" htmlFor={ `cat-${index+1}` }>{ item.name}</label>

                                                            </div>
                                                            <span className="item-count">{categoryCountArr[index] }</span>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle>
                        
                        <SlideToggle collapsed = {false }>
                            {({onToggle, setCollapsibleElement}) => (
                                <div className="widget widget-collapsible">
                                    <h3 className = "widget-title"><a href="#Size" onClick = {(e) => {onToggle(e); this.changeIcon(e); e.preventDefault() }} role="button" aria-expanded="true" aria-controls="widget-1">Size</a></h3>
                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <div className="filter-items">
                                                { sizes.map((item, index) => (

                                                    <div className="filter-item" key={ index }>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox"
                                                                className="custom-control-input" 
                                                                id={ `size-${index+1}`} 
                                                                onClick={ (e) => this.props.toggleSizeFilter(item) } 
                                                                defaultChecked={ -1 < findIndex( filters['size'], filter => filter === item ) ? true : false }
                                                            />
                                                            <label className="custom-control-label" htmlFor={ `size-${index+1}` }>{ item}</label>
                                                        </div>
                                                    </div>
                                                )) }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle>

                        <SlideToggle collapsed = {false }>
                            {({onToggle, setCollapsibleElement}) => (
                                <div className="widget widget-collapsible">
                                    <h3 className = "widget-title"><a href="#colour" onClick = {(e) => {onToggle(e); this.changeIcon(e); e.preventDefault() }} role="button" aria-expanded="true" aria-controls="widget-1">Colour</a></h3>
                                    <div ref={ setCollapsibleElement }>
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
                                </div>
                            ) }
                        </SlideToggle>

                        <SlideToggle collapsed = {false }>
                            {({onToggle, setCollapsibleElement}) => (
                                <div className="widget widget-collapsible">
                                    <h3 className = "widget-title"><a href="#brand" onClick = {(e) => {onToggle(e); this.changeIcon(e); e.preventDefault() }} role="button" aria-expanded="true" aria-controls="widget-1">Brand</a></h3>
                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <div className="filter-items">
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
                                    </div>
                                </div>
                            ) }
                        </SlideToggle>

                        <SlideToggle collapsed = {false }>
                            {({onToggle, setCollapsibleElement}) => (
                                <div className="widget widget-collapsible">
                                    <h3 className = "widget-title">
                                        <a href="#price" onClick = {(e) => {onToggle(e); this.changeIcon(e); e.preventDefault() }} role="button" aria-expanded="true" aria-controls="widget-1">Price</a>
                                    </h3>

                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <div className="filter-price">
                                                <div className="filter-price-text">
                                                    Price Range:&nbsp;
                                                    <span className = "filter-price-range">${ this.state.value.min} - ${ this.state.value.max}</span>
                                                </div>

                                                <div className = "price-slider">
                                                    <InputRange
                                                        formatLabel={ value => `$${value}`}
                                                        maxValue = { 1000 }
                                                        minValue = { 0 }
                                                        step = {50}
                                                        value = { this.state.value}
                                                        onChange = { value => { this.setState({ value }); this.props.filterPrice(value);} } key={ this.state.max}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle>
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
    return {
        filters: state.filters,
        products: state.data.products ? state.data.products: []
    }
}

export default connect(mapStateToProps, { toggleCategoryFilter, toggleSizeFilter, toggleBrandFilter, toggleColorFilter, filterPrice, resetFilter })(ShopSidebar);