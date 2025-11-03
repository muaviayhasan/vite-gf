import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
 // import "../../css/custome.scoped.css";

class MaterialSubType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: null
        };
    }
    
    componentDidMount() {
        axios.get(`${import.meta.env.VITE_API_URL}/material_subtype`).then(res => {
            this.setState({
                // using spread operator, you will need transform-object-rest-spread from babel or
                // another transpiler to use this
                ...this.state, // spreading in state for future proofing
                isLoaded: true,
                data: res.data
            });
        });
        document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

    render() {
        const { isLoaded, data } = this.state;
        let fields = [
            {
                type: "text",
                name: "name",
                value: "",
                placeholder: "Category Names"
            }

        ];
        let columns = [
            { title: "Category Names", field: "name" }
        ];
        return (
            <div>
                <section className="admin-dashboard">
                    <div className="row col-md-12">
                        <div className="col-md-3">
                            <DashboardHeader />
                        </div>
                        <div className="col-md-9" style={{ "margin-top": "20px" }}>
                            <main className="page-content">
                                <div className="container-fluid">
                                    <h1 className="heading-settings-table">Glass Category Names</h1>
                                    {isLoaded ? (
                                        <FormTamplate
                                            fields={fields}
                                            title="Glass Category"
                                            columns={columns}
                                            data={data}
                                            saveUrl={`${import.meta.env.VITE_API_URL}/material_subtype`}
                                            updateUrl={`${import.meta.env.VITE_API_URL}/material_subtype/update`}
                                            deleteUrl={`${import.meta.env.VITE_API_URL}/material_subtype/delete`}
                                        />
                                    ) : (
                                            ""
                                        )}
                                    <br />
                                </div>
                            </main>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MaterialSubType;