import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Breadcrumb extends Component {
  render() {
    const {
      title,
      demo,
      products,
      adClass,
      type = "normal",
      slug = "default",
      container = "container",
      productId,
      ...parent
    } = this.props;
    let path = [];
    let x,
      prevProducts,
      prevProduct,
      currentProducts,
      nextProducts,
      nextProduct;

    for (x in parent) {
      if ("function" !== typeof parent[x]) path.push(parent[x]);
    }

    currentProducts = products.filter((item) => item.id === productId);

    // get product for prev button.
    prevProducts = products.filter(
      (item) => item.id < parseInt(productId) && item.lgPictures
    );
    if (!prevProducts || !prevProducts.length) prevProduct = currentProducts[0];
    else prevProduct = prevProducts[prevProducts.length - 1];

    // get product for next button.
    nextProducts = products.filter(
      (item) => item.id > parseInt(productId) && item.lgPictures
    );
    if (!nextProducts || nextProducts.length === 0)
      nextProduct = currentProducts[0];
    else nextProduct = nextProducts[0];

    return (
      <nav aria-label="breadcrumb" className={`breadcrumb-nav ${adClass}`}>
        {type === "normal" ? (
          <div className={container}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}`}>Home</Link>
              </li>
              {path.map((item) => (
                <li className="breadcrumb-item" key={item[0]}>
                  <a>{item[0]}</a>
                </li>
              ))}
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </div>
        ) : type === "product" ? (
          <div className={`${container}  d-flex align-items-center`}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/`}>Home</Link>
              </li>
              {path.map((item, index) => (
                <li className="breadcrumb-item" key={index}>
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/${item[1]}/default/27`}>
                    {item[0]}
                  </Link>
                </li>
              ))}
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>

            <nav className="product-pager ml-auto" aria-label="Product">
              <Link
                className="product-pager-link product-pager-prev"
                to={`${import.meta.env.VITE_PUBLIC_URL}/${type}/${slug}/${prevProduct.id}`}
                aria-label="Previous"
                tabIndex="-1"
              >
                <i className="icon-angle-left"></i>
                <span>Prev</span>
                {prevProduct ? (
                  <div className="product-detail">
                    <figure>
                      <img
                        src={
                          import.meta.env.VITE_PUBLIC_URL + "/" + prevProduct.pictures[0]
                        }
                        alt="Product"
                      />
                    </figure>
                    <h3 className="product-name">{prevProduct.name}</h3>
                  </div>
                ) : (
                  ""
                )}
              </Link>

              <Link
                className="product-pager-link product-pager-next"
                to={`${import.meta.env.VITE_PUBLIC_URL}/${type}/${slug}/${nextProduct.id}`}
                aria-label="Next"
                tabIndex="-1"
              >
                <span>Next</span>
                <i className="icon-angle-right"></i>
                {nextProduct ? (
                  <div className="product-detail">
                    <figure>
                      <img
                        src={
                          import.meta.env.VITE_PUBLIC_URL + "/" + nextProduct.pictures[0]
                        }
                        alt="Product"
                      />
                    </figure>
                    <h3 className="product-name">{nextProduct.name}</h3>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </nav>
          </div>
        ) : (
          ""
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.data.products ? state.data.products : [],
    demo: state.demo.current,
  };
};

export default connect(mapStateToProps)(Breadcrumb);
