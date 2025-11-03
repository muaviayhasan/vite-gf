import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SearchBar from "../../demoes/index5/search-bar";

class EmptyWishList extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - Empty Wishlist`}</title>
        </Helmet>
        <section className=" contact-page">
          <div>
            <SearchBar />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-12" style={{ "textAlign": "center" }}>
                <h4 style={{ marginTop: "5%" }}>
                  There are no items in the Wishlist, please use the search
                  above to select material and colour, or click on the “Home”
                  button below to browse colours and materials
                </h4>
                <br />
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/home`}
                  className="btn btn-solid"
                >
                  <button
                    className="btn btn-outline-primary-2 btn-round btn-more"
                    onClick={this.addToWatchList}
                  >
                    <span>Home</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}

export default EmptyWishList;
