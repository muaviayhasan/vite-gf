import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';
import PortfolioOne from '../../features/portfolio/portfolio-one';
import PortfolioTwo from '../../features/portfolio/portfolio-two';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils/utils';

class Portfolioes extends Component {
    
    componentDidMount() {
        isotopeLoad( isotope, imagesLoaded, '.portfolio-container', '.portfolio-item', '.portfolio-filter' );
    }
    
	render(){
        return(
            <div className="main">
                <PageHeader title="Portfolio" subTitle="Elements"/>
                <Breadcrumb title="Portfolio" parent1={ ["Elements","elements/list"] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title text-center mb-2">Grid 3 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*">All</Link></li>
                                <li><Link to="#" data-filter=".women">Women</Link></li>
                                <li><Link to="#" data-filter=".men">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
                            </ul>
                        </nav>
                        <div className="portfolio-container" data-layout="fitRows">
                            <div className="portfolio-item accessories women col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/item-1.jpg" category= "Accessories"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/item-2.jpg" category="Men"/>
                            </div>
                            <div className="portfolio-item accessories women col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/item-3.jpg" category="Women"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/item-4.jpg" category="Accessories"/>
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/item-5.jpg" category="Women"/>
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/item-6.jpg" category="Men"/>
                            </div>
                        </div>

                        <hr className="mb-4"/>

                        <h2 className="title text-center mb-2">Grid 4 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*">All</Link></li>
                                <li><Link to="#" data-filter=".women">Women</Link></li>
                                <li><Link to="#" data-filter=".men">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container" data-layout="fitRows" id="portfolio-2">
                            <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-1.jpg" category="Accessories"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-2.jpg" category="Men"/>
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-3.jpg" category="Women"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-4.jpg" category="Accessories"/>
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-5.jpg" category="Women"/>
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-6.jpg" category="Men"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-7.jpg" category="Men"/>
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/4cols/item-8.jpg" category="Women"/>
                            </div>
                        </div>

                        <hr className="mb-4"/>

                        <h2 className="title text-center mb-2">Masonry 3 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*">All</Link></li>
                                <li><Link to="#" data-filter=".women">Women</Link></li>
                                <li><Link to="#" data-filter=".men">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container">
                            <div className="portfolio-item accessories women col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/masonry-3cols/item-1.jpg" category="Accessories" type="center"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/masonry-3cols/item-2.jpg" category="Men" type="center"/>
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/masonry-3cols/item-3.jpg" category="Women" type="center"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/masonry-3cols/item-4.jpg" category="Accessories" type="center"/>
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/masonry-3cols/item-5.jpg" category="Women" type="center"/>
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-lg-4">
                                <PortfolioOne image="assets/images/portfolio/masonry-3cols/item-6.jpg" category="Men" type="center"/>
                            </div>
                        </div>

                        <hr className="mb-4"/>

                        <h2 className="title text-center mb-2">Masonry 4 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*">All</Link></li>
                                <li><Link to="#" data-filter=".women">Women</Link></li>
                                <li><Link to="#" data-filter=".men">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container">
                            <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-1.jpg" category="Accessories" type="center"/>
                            </div>

                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-2.jpg" category="Men" type="center"/>
                            </div>

                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-3.jpg" category="Women" type="center"/>
                            </div>

                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-4.jpg" category="Accessories" type="center"/>
                            </div>

                            <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-5.jpg" category="Women" type="center"/>
                            </div>

                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-6.jpg" category="Men" type="center"/>
                            </div>

                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-7.jpg" category="Men" type="center"/>
                            </div>

                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image="assets/images/portfolio/masonry-4cols/item-8.jpg" category="Women" type="center"/>
                            </div>
                        </div>

                        <hr className="mb-4"/>
                    </div>

                    <div className="container-fluid">
                        <h2 className="title text-center mb-2">Fullwidth with Text <span className="title-separator">(No space)</span></h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*">All</Link></li>
                                <li><Link to="#" data-filter=".women">Women</Link></li>
                                <li><Link to="#" data-filter=".men">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container portfolio-nogap" data-layout="fitRows">
                            <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-1.jpg" category="Accessories" title="Vestibulum auctor dapibus"/>
                            </div>
                            <div className="portfolio-item accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-2.jpg" category="Accessories"  title="Nunc dignissim risus"/>
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-3.jpg" category="Men"  title="Cras ornare tristique"/>
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-4.jpg" category="Men"  title="Vivamus vestibulum ntulla"/>
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-5.jpg" category="Women"  title="Vestibulum auctor dapibus"/>
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-6.jpg" category="Accessories"  title="Nunc dignissim risus"/>
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-7.jpg" category="Women"  title="Cras ornare tristique"/>
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image="assets/images/portfolio/fullwidth/item-8.jpg" category="Accessories" title="Vivamus vestibulum ntulla"/>
                            </div>
                        </div>
                    </div>
                </div>
                <ElementList />
           </div>
        )
    }
}

export default Portfolioes;