import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Product from "./product";
import "./style.scss";
import store from "../../../store/index";
import { changeDemo, outerLoading } from "../../../actions";
import { initSettings } from "../../../utils/utils";
import "./search-bar.css";

function SearchProduct() {
  const { productName } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [limit] = useState(16);
  const [pageNum, setPageNum] = useState(1);
  const [lastPageSize, setLastPageSize] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // one time app setup
  useEffect(() => {
    initSettings();
    store.dispatch(changeDemo("5"));
    store.dispatch(outerLoading());
  }, []);

  const fetchPage = async (page) => {
    setIsLoading(true);
    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
        {
          productName,
          limit,
          page_num: page,
        }
      );

      const data = Array.isArray(resp.data) ? resp.data : [];
      setItems((prev) => (page === 1 ? data : [...prev, ...data]));
      setLastPageSize(data.length);
      setPageNum(page);

      if (page === 1 && data.length === 0) {
        const base = import.meta.env.VITE_PUBLIC_URL || "";
        navigate(`${base}/no-record-found`, { replace: true });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // load when productName changes
  useEffect(() => {
    setItems([]);
    setPageNum(1);
    fetchPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName]);

  const loadMore = () => {
    if (!isLoading) fetchPage(pageNum + 1);
  };

  return (
    <div className="mb-4">
      <Helmet>
        <title>Search Results</title>
      </Helmet>

      <div className="section-b-space _sectionBSpace" style={{ paddingBottom: "70px" }}>
        <div className="container">
          <h4>
            {items.length !== 0
              ? `Search Results of "${productName}":`
              : (
                <div className="col-sm-12" style={{ textAlign: "center" }}>
                  <h4>Nothing found, please try another search</h4>
                </div>
              )}
          </h4>

          {isLoading && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {[1, 2, 3, 4].map((key) => (
                <div
                  key={key}
                  style={{
                    display: "grid",
                    marginLeft: "15%",
                    marginTop: "3%",
                  }}
                >
                  <Skeleton height={150} width={150} />
                  <Skeleton height={30} width={150} />
                  <Skeleton height={30} width={150} />
                  <Skeleton height={30} width={70} />
                </div>
              ))}
            </div>
          )}

          <div className="search-product">
            <div className="row justify-content-center">
              {!isLoading &&
                items.map((item, index) => (
                  <div className="col-6 col-md-4 col-lg-3" key={index + item.name}>
                    <Product product={item} />
                  </div>
                ))}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  padding: 20,
                }}
              >
                <button
                  type="button"
                  className={
                    lastPageSize > 15
                      ? "btn btn-outline-primary-2 btn-round btn-more"
                      : "hidden"
                  }
                  onClick={loadMore}
                >
                  load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
