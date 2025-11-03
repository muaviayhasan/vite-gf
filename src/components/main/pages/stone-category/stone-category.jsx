import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useParams } from "react-router-dom";

// import Custom Components
import Breadcrumb from "../../../common/breadcrumb";
import Product from "./product";

class StoneCategoryClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      canLoad: true,
      type: props.type,
      perPage: 16,
      pageNum: 1,
      data: [],
    };
  }

  ucfirst = (str) => {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
  };

  componentDidMount() {
    const { type, perPage, pageNum } = this.state;
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`,
      data: {
        category:
          type !== "compact worktops" ? this.ucfirst(type) : "Compact Worktops",
        per_page: perPage,
        page_num: pageNum,
      },
    })
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  loadMore = () => {
    const { type, perPage, pageNum } = this.state;
    this.setState({ loading: true, pageNum: this.state.pageNum + 1 }, () => {
      axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`,
        data: {
          category:
            type !== "compact worktops"
              ? this.ucfirst(type)
              : "Compact Worktops",
          per_page: perPage,
          page_num: pageNum,
        },
      })
        .then((response) => {
          if (response.data.length === 0) {
            this.setState({ canLoad: false });
          }
          this.setState(
            {
              data: this.state.data.concat(response.data),
              loading: false,
            },
            () => {
              window.scrollBy(0, -1000);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  };

  render() {
    const { type, data, canLoad } = this.state;
    return (
      <div className="main">
        <Helmet>
          <title>Glass and Fusion - Glass Categories</title>
        </Helmet>

        <h1 className="d-none">Stone category products page</h1>

        <Breadcrumb
          title={this.ucfirst(type)}
          parent1={["Stone"]}
          adClass="border-0 mb-0"
        />

        <div className="container">
          <div className="row justify-content-center">
            {data &&
              data.length > 0 &&
              data.map((item, index) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={index + item.name}
                >
                  <Product product={item} key={index + item.name} />
                </div>
              ))}

            {canLoad && data.length >= 16 && (
              <div className="more-container text-center col-12 col-md-12 col-lg-12 mt-2">
                <button
                  className="btn btn-outline-primary-2 btn-round btn-more"
                  onClick={this.loadMore}
                >
                  <span>Load more</span>
                  {this.state.loading ? (
                    <i className="icon-refresh load-more-rotating"></i>
                  ) : (
                    <i className="icon-long-arrow-right"></i>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Wrapper component to provide useParams to class component
function StoneCategory() {
  const { type } = useParams();
  return <StoneCategoryClass type={type} />;
}

export default StoneCategory;
