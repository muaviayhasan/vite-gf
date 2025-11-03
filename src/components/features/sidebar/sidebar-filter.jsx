import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import SlideToggle from 'react-slide-toggle';
import { Link } from 'react-router-dom';
import 'react-input-range/lib/css/index.css';

// import Actions
import { getCountByCategory } from '../../../services';
import { toggleCategoryFilter, resetFilter, toggleSizeFilter, toggleBrandFilter, toggleColorFilter, filterPrice, filterSort } from '../../../actions';

// import Utils
import { findIndex } from '../../../utils/utils';

class SideBarFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: { max: 3000, min: 0 }
        };
        
        this.showSideBar = this.showSideBar.bind(this);
        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    clearAll(e) {
        let items = document.querySelector('.filter-area-wrapper').querySelectorAll('input');
        
        for( let i = 0 ; i < items.length ; i ++ ) {
            items[i].checked = false;
        }

        items = document.querySelector('.filter-area-wrapper').querySelectorAll('input[type="radio"]');
        items[0].checked = true;

        items = document.querySelector('.filter-area-wrapper').querySelectorAll('.selected');

        for( let i = 0 ; i < items.length ; i ++ ){
            items[i].classList.remove('selected');
        }
        
        this.setState({value:{max:3000, min:0}});
        this.props.resetFilter();
        e.preventDefault();
    }

    showSideBar() {
        document.querySelector('.widget-filter-area').classList.add('active');

        if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
            document.querySelector('body').classList.remove('sidebar-filter-active'); 
        } else {
            document.querySelector('body').classList.add('sidebar-filter-active');
        }
    }

    toggleSideBar() {
        if( !document.querySelector('.widget-filter-area').classList.contains('active')) {
            this.showSideBar();
        }
        else {
            this.hideSideBar();
        }
    }

    selectColor(e) {
        if (e.currentTarget.classList.contains('selected')) {
            e.currentTarget.classList.remove('selected');
        } else { 
            e.currentTarget.classList.add('selected');
        }
        e.preventDefault();
    }

    onToggle() {
        if ( !document.querySelector('.filter-toggler').classList.contains('active')) {
            document.querySelector('.filter-toggler').classList.add('active');
            document.querySelector('.nav-filter.product-filter').style.opacity = 0;
            setTimeout(() => {
                document.querySelector('.nav-filter.product-filter').style.display = "none";
                document.querySelector('.widget-filter-clear').style.display = "block";                
            }, 400);
        } else {
            document.querySelector('.filter-toggler').classList.remove('active');
            document.querySelector('.nav-filter.product-filter').style.opacity = 1;
            document.querySelector('.nav-filter.product-filter').style.display = "flex";
            document.querySelector('.widget-filter-clear').style.display = "none";
        }
    }

    hideSideBar(){
        if (document.querySelector('body').classList.contains('sidebar-filter-active'))
            document.querySelector('body').classList.remove('sidebar-filter-active'); 
        document.querySelector('.widget-filter-area').classList.remove('active');
    }

    render() {
        const sortby = [ "Default", "Popularity", "Average Rating", "Newness", "Price: Low to High", "Price: High to Low" ];
        const colors = [ "#b87145", "#f0c04a", "#333333", "#cc3333", "#ebebeb" ];
        const colorNames = [ "Brown", "Yellow", "Black", "Red", "White" ];
        const sortObj = {"Default": "default", "Popularity": "popularity", "Average Rating": "rating", "Newness": "newness", "Price: Low to High": "price: low to high", "Price: High to Low": "price: high to low"};
        const categories = ["All", "Furniture", "Lighting", "Accessories", "Sale"];

        const { products, filters } = this.props;

        let categoryCountArr = [];
        categories.map((item, index) => {
            return categoryCountArr.push( getCountByCategory(products.slice(170,182), item) );
        });

        return(
            <div>
                <button className="sidebar-fixed-toggler" onClick={ this.toggleSideBar }>
                    <i className="icon-cog"></i>
                </button>

                <SlideToggle collapsed = {true} duration = {400 }>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="my-collapsible">
                            <div className="toolbox toolbox-filter">
                                <div className="toolbox-left">
                                    <button className="button filter-toggler" onClick={ (e) => { this.onToggle(); onToggle();} }>Filters</button>
                                    <button className="button filter-toggler mobile-mode" onClick={ this.showSideBar }>Filters</button>
                                </div>
                            
                                <div className="toolbox-right">
                                    <ul className="nav-filter product-filter">
                                        <li className="active"><Link to="#" data-filter="*">All</Link></li>
                                        <li><Link to="#" data-filter=".Furniture">Furniture</Link></li>
                                        <li><Link to="#" data-filter=".Lighting">Lighting</Link></li>
                                        <li><Link to="#" data-filter=".Accessories">Accessories</Link></li>
                                        <li><Link to="#" data-filter=".Sale">Sale</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="my-collapsible__content" ref={ setCollapsibleElement }>
                                <div className="my-collapsible__content-inner">
                                    <div className="widget-filter-area" id="product-filter-area">
                                        <div className="clean-close">
                                            <Link to="#"  onClick={ (e) => this.clearAll(e) } className="widget-filter-clear">Clean All</Link>

                                            <Link to="#"  onClick={ (e) => this.hideSideBar(e) } className="widget-close"><i className="icon-close"></i></Link>
                                        </div>

                                        <div className="filter-area-wrapper">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Category:
                                                        </h3>

                                                        <div className="filter-items filter-items-count">
                                                            { categories.map((cat, index) => 
                                                                <div className="filter-item" key={ `category_${index}` }>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" 
                                                                        className="custom-control-input" 
                                                                        id={ `cat-${index}`} 
                                                                        onClick = {(e) => this.props.toggleCategoryFilter(cat) } 
                                                                        defaultChecked={ -1 < findIndex( filters["category"], filter => filter === cat ) ? true : false } />
                                                                        <label className="custom-control-label" htmlFor={ `cat-${index}` }>{cat}</label>
                                                                    </div>

                                                                    <span className="item-count">{categoryCountArr[parseInt(index)] }</span>
                                                                </div>
                                                            ) }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Sort by:
                                                        </h3>

                                                        <div className="filter-items">
                                                            { sortby.map((item, index) => 
                                                                <div className="filter-item" key={ `sortBy_${index}` }>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio" 
                                                                        className="custom-control-input" 
                                                                        id={ `sort-${index}`} 
                                                                        name="sortby"
                                                                        defaultChecked={ 
                                                                            filters["sortBy"] === '' && parseInt(index) === 0 ? true :
                                                                            filters["sortBy"] === sortObj[item] ? true : false }
                                                                            onClick = {(e) => this.props.filterSort(sortObj[item]) }/>
                                                                        <label className="custom-control-label" htmlFor={ `sort-${index}` }>{ item}</label>
                                                                    </div>
                                                                </div>
                                                            ) }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Colour:
                                                        </h3>

                                                        <div className="filter-colors filter-colors-vertical">
                                                            { colors.map((col, index) => 
                                                                <Link to="#" 
                                                                style={ {background: col}} 
                                                                className={ -1 < findIndex( filters["color"], filter => filter === col ) ? "selected" : "" } 
                                                                onClick = {(e) => { this.selectColor(e); this.props.toggleColorFilter(col);}}
                                                                key = {`color_item_${index}`}
                                                                ><span>
                                                                {colorNames[parseInt(index)] }</span></Link>
                                                            ) }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Price:
                                                        </h3>

                                                        <div className="filter-price">
                                                            <div className="filter-price-text">
                                                                Price Range:&nbsp;
                                                                <span className = "filter-price-range">${ this.state.value.min} - ${ this.state.value.max}</span>
                                                            </div>
                                                        </div>

                                                        <div className = "price-slider">
                                                            <InputRange
                                                                formatLabel={ value => `$${value}`}
                                                                maxValue = { 3000 }
                                                                minValue = { 0 }
                                                                step = {50}
                                                                value = { this.state.value}
                                                                onChange = {value => { this.setState({ value }); this.props.filterPrice(value);}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) }
                </SlideToggle>
            </div>
        );
    }
}

export const mapStateToProps = ( state ) => {  
    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters
    }
}

export default connect(mapStateToProps, { toggleCategoryFilter, toggleSizeFilter, toggleBrandFilter, toggleColorFilter, filterPrice, resetFilter, filterSort })(SideBarFilter);