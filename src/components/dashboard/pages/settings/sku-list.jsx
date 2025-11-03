import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import { Link } from "react-router-dom";
 // import "../../css/custome.scoped.css";
import { toast } from "react-toastify";
import MaterialTable from "material-table";
import $ from "jquery";

class skuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      editableSku: [],
    };
    // this.editSku = this.editSku.bind(this);
  }

  componentDidMount() {
    $("td").hide();

    axios.get(`${import.meta.env.VITE_API_URL}/sku-list`).then((res) => {
      $("td").show();
      this.setState(
        {
          ...this.state,
          isLoaded: true,
          data: res.data,
          // data: []
        },
        () => {
          this.state.data.length === 0 && $("td").show();
        }
      );
    });
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }
  
  editSku = (skuId) => {
    console.log(skuId);

    // axios.get(`${import.meta.env.VITE_API_URL}/sku/getSku/${skuId}`).then(res => {
    //   // console.log(res.data);
    //   this.setState({
    //     ...this.state,
    //     isLoaded: true,
    //     editableSku: res.data
    //   });
    // });
  };
  render() {
    const { isLoaded, data, editableSku } = this.state;

    return (
      <div>
        <section className="admin-dashboard">
          <div className="row col-md-12">
            <div className="col-md-3">
              <DashboardHeader />
            </div>
            <div className="col-md-9 skulist-padding-class" style={{paddingLeft:'2%'}}>
              <br />
              <br />
              <MaterialTable
                title="SKU List"
                options={{
                  rowStyle: {
                    fontSize: 12,
                  },
                  headerStyle: { fontSize: 12 },
                }}
                isLoading={!isLoaded ? true : false}
                columns={[
                  { title: "Name", field: "name" },
                  { title: "Material Type", field: "material_type" },
                  { title: "Manufacturer", field: "manufacturer" },
                  { title: "Base Color", field: "base_color" },
                  { title: "Color Code", field: "color_code" },
                  {
                    field: "ref",
                    title: "Action",
                    render: (rowData) =>
                      data.length > 0 && (
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/edit-sku-f/${rowData.id}`}
                          className="btn btn-outline-primary-2 btn-round btn-more"
                          style={{paddingTop: '0.40rem', paddingBottom: '0.40rem', minWidth: '120px' , padding:'0.5%' , textTransform:'capitalize'}}
                        >
                          Edit SKU
                        </Link>
                      ),
                  },
                ]}
                data={data}
              />

              {/* <h2>Sku List</h2>
              <Table className="table-down">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Material Type</th>
                    <th>Manufacturer</th>
                    <th>Brand</th>
                    <th>Supplier</th>
                    <th>Base Color</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(sku => (
                    <tr key={sku.id}>
                      <td>{sku.material}</td>
                      <td>{sku.material_type}</td>
                      <td>{sku.manufacturer}</td>
                      <td>{sku.brand}</td>
                      <td>{sku.supplier}</td>
                      <td>{sku.base_color}</td>
                      <td>

                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/edit-sku-f/${sku.id}`}
                          className="btn btc"
                        >
                          Edit Sku
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default skuList;
