import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';

class Banners extends Component {

    render() {
        return (
            <div className="main">
                <PageHeader title="Banners" subTitle="Elements"/>
                <Breadcrumb title="Banners" parent1={ ["Elements","elements/list"] } />

                <div className="page-content">
					<div className="container">
						<h2 className="title text-center mb-3">2 Columns</h2>

						<div className="row">
							<div className="col-md-6">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/banner-1.jpg` } alt="Banner" width="570" height="280"/>
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Praesent elementum <br />hendrerit tortor.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/banner-2.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Donec consectetuer <br />ligula vulputate.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>
						</div>

						<hr className="mb-4" />

						<h2 className="title text-center mb-3">3 Columns</h2>

						<div className="row justify-content-center">
							<div className="col-md-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/3cols/banner-1.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Praesent elementum <br />hendrerit tortor.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
						</div>

							<div className="col-md-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/3cols/banner-2.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Donec consectetuer <br />ligula vulputate.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/3cols/banner-3.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title text-white">Phasellus ultrices <br />nulla quisnibh.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>
						</div>

						<hr className="mb-4" />
					</div>

					<div className="container-fluid">
						<h2 className="title text-center mb-3">3 Columns Fullwidth</h2>

						<div className="row justify-content-center">
							<div className="col-md-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/3cols/banner-4.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Praesent elementum <br />hendrerit tortor.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/3cols/banner-5.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Donec consectetuer <br />ligula vulputate.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/3cols/banner-6.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title text-white">Phasellus ultrices <br />nulla quisnibh.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="container">
						<hr className="mb-4" />

						<h2 className="title text-center mb-3">Large Banner</h2>

						<div className="row">
							<div className="col-12">
								<div className="banner banner-big">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/banner-fullwidth.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle text-primary">Quisque a lectus</h4>
										<h3 className="banner-title text-white">Morbi interdum <br />mollis sapien.</h3>
										<p className="d-none d-lg-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, posuere a, pede.</p> 

										<Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>

						<hr className="mb-4" />

						<h2 className="title text-center mb-3">Grid (3 Banners)</h2>

						<div className="row ">
							<div className="col-lg-8">
								<div className="banner banner-big">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/3cols/banner-1.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Morbi in sem <br />placerat.</h3>
										<Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="row">
									<div className="col-sm-6 col-lg-12">
										<div className="banner">
											<Link to="#">
												<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/3cols/banner-2.jpg` } alt="Banner" />
											</Link>

											<div className="banner-content">
												<h4 className="banner-subtitle">Quisque a lectus</h4>
												<h3 className="banner-title text-white">Donec consectetuer <br />ligula vulputate.</h3>
												<Link to="#" className="banner-link">Click here</Link>
											</div>
										</div>
									</div>

									<div className="col-sm-6 col-lg-12">
										<div className="banner">
											<Link to="#">
												<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/3cols/banner-3.jpg` } alt="Banner" />
											</Link>

											<div className="banner-content">
												<h4 className="banner-subtitle">Quisque a lectus</h4>
												<h3 className="banner-title">Phasellus <br />ultrices nulla.</h3>
												<Link to="#" className="banner-link">Click here</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<hr className="mb-4" />

						<h2 className="title text-center mb-3">Grid (4 Banners)</h2>

						<div className="row justify-content-center">
							<div className="col-sm-6 col-lg-4">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/4cols/banner-1.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title">Phasellus <br />ultrices nulla.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-lg-4 order-lg-last">
								<div className="banner">
									<Link to="#">
										<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/4cols/banner-4.jpg` } alt="Banner" />
									</Link>

									<div className="banner-content">
										<h4 className="banner-subtitle">Quisque a lectus</h4>
										<h3 className="banner-title text-white">Donec consectetuer <br />ligula vulputate.</h3>
										<Link to="#" className="banner-link">Click here</Link>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="row">
									<div className="col-sm-6 col-lg-12">
										<div className="banner">
											<Link to="#">
												<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/4cols/banner-2.jpg` } alt="Banner" />
											</Link>

											<div className="banner-content">
												<h4 className="banner-subtitle">Quisque a lectus</h4>
												<h3 className="banner-title">Phasellus <br />ultrices nulla.</h3>
												<Link to="#" className="banner-link">Click here</Link>
											</div>
										</div>
									</div>

									<div className="col-sm-6 col-lg-12">
										<div className="banner">
											<Link to="#">
												<img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/banners/grid/4cols/banner-3.jpg` } alt="Banner" />
											</Link>

											<div className="banner-content">
												<h4 className="banner-subtitle">Quisque a lectus</h4>
												<h3 className="banner-title text-white">Donec consectetuer <br />ligula vulputate.</h3>
												<Link to="#" className="banner-link">Click here</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

                <ElementList />
            </div>
        );
    }
}

export default Banners;