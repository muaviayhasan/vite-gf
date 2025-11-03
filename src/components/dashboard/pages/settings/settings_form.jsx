import React, { Fragment } from "react";
import { withFormik, Form, Field } from "formik";
import MaterialTable from "material-table";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const SettingsForm = (props) => {
  const {
    values,
    touched,
    errors,
    setSubmitting,
    isSubmitting,
    fields,
    data,
    saveUrl,
    updateUrl,
    deleteUrl,
    multiselectName,
  } = props;

  const [state, setState] = React.useState({
    columns: props.columns,
    data: data,
    values: values || {},
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    event.persist();
    setState((prevState) => ({
      ...state,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data_array = [];
    var multiSelectOptions = [];
    if (e.target[multiselectName]) {
      var getBrandArray = e.target[multiselectName];
      for (var i = 0; i < getBrandArray.length; i++) {
        if (getBrandArray[i].selected) {
          multiSelectOptions.push(getBrandArray[i].value);
        }
      }
    }

    fields.map((field) => {
      if (field.name != multiselectName) {
        data_array.push({
          key: field.name,
          value: e.target[field.name].value.trim(),
        });
        if (e.target["id"].value) {
          data_array.push({ key: "id", value: e.target["id"].value.trim() });
        }
      }
    });

    if (multiSelectOptions.length != 0) {
      data_array.push({ key: multiselectName, value: multiSelectOptions });
    }

    const data = data_array.reduce((prev, curr) => {
      prev[curr.key] = curr.value;
      return prev;
    }, {});

    setSubmitting(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let currentData = state.data;
    if (e.target["id"].value) {
      axios
        .post(updateUrl, data, config)
        .then((res) => {
          for (var item in currentData) {
            if (currentData[item].id == res.data.id) {
              currentData[item] = res.data;
            }
          }
          // console.log(currentData);
          // console.log(index);
          setState({
            ...state,
            data: currentData,
          });
          toast.success(`${props.title} Save`);
        })
        .catch((error) => {
          toast.error(error.response.data);
        });
    } else {
      axios
        .post(saveUrl, data, config)
        .then((res) => {
          currentData.push(res.data);
          setState({
            ...state,
            data: currentData,
          });
          toast.success(`${props.title} Save`);
        })
        .catch((error) => {
          toast.error(error.response);
        });
    }

    setTimeout(() => {
      setSubmitting(false);
      setState({
        ...state,
        values: {},
      });
    }, 2000);
  };

  const showForm = () => {
    document.getElementById("form").classList.add("show_div");
  };

  const cancelForm = () => {
    document.getElementById("form").classList.remove("show_div");
  };

  const deleteRecorde = (id) => {
    let currentData = state.data;
    let data = {
      id: id,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(deleteUrl, data, config)
      .then((res) => {
        for (var item in currentData) {
          if (currentData[item].id == id) {
            currentData.splice(item, 1);
            // currentData[item] = {};
          }
        }
        // console.log(currentData);
        // console.log(index);
        setState({
          ...state,
          data: currentData,
        });
        toast.warn(`${props.title} Delete`);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} id="form" className="theme-form hide_div">
        <div className="form-row">
          <Field type="hidden" name="id" value={state.values["id"] || ""} />
          {fields.map((field) => {
            if (field.type === "text" || field.type === "email") {
              return (
                <div className="col-md-3 form__group" key={field.name}>
                  <Field
                    type={field.type}
                    className="form__field"
                    onChange={handleChange}
                    value={state.values[field.name] || ""}
                    name={field.name}
                    placeholder={field.placeholder}
                    id={field.name}
                    required={field.required ? "required" : ""}
                  />
                  <label htmlFor={field.name} className="form__label">
                    {field.placeholder} {field.required ? "*" : ""}
                  </label>
                </div>
              );
            }
            if (field.type === "select") {
              return (
                <div className="col-md-3 form__group" key={field.name}>
                  <select
                    className="form__field"
                    name={field.name}
                    id={field.name}
                    required={field.required ? "required" : ""}
                  >
                    {field.options.map((option) => {
                      return <option value={option.id}>{option.name}</option>;
                    })}
                  </select>

                  <label htmlFor={field.name} className="form__label">
                    {field.placeholder} {field.required ? "*" : ""}
                  </label>
                </div>
              );
            }
            if (field.type === "multi_select") {
              return (
                <div className="col-md-3 form__group" key={field.name}>
                  {/* <select 
                    className="form__field"
                    name={field.name}
                    id={field.name}
                  
                    required={field.required ? "required" : ""}
                  >
                    {field.options.map(option => {
                      return <option value={option.id}>{option.name}</option>;
                    })}
                  </select> */}

                  <select
                    className="form__field"
                    name={field.name}
                    id={field.name}
                    multiple
                    required={field.required ? "required" : ""}
                  >
                    {field.options.map((option) => {
                      return (
                        <option value={option.value}>{option.label}</option>
                      );
                    })}
                  </select>

                  {/* <ReactMultiSelectCheckboxes options ={field.options} /> */}

                  <label htmlFor={field.name} className="form__label">
                    {field.placeholder} {field.required ? "*" : ""}
                  </label>
                </div>
              );
            }
            if (field.type === "button") {
              return (
                <div className="col-md-3 form__group" key={field.name}></div>
              );
            }
          })}
        </div>

        <br />
        <div className="row col-md-12">
          <button
            className="btn btn-outline-primary-2 btn-round btn-more"
            type="submit"
            disabled={isSubmitting}
            style={{paddingTop: '0.40rem', paddingBottom: '0.40rem', minWidth: '175px'}}
          >
            Save {props.title}
          </button>&nbsp;&nbsp;
          <button
            className="btn btn-outline-danger-2 btn-round btn-more btn-danger "
            type="button"
            style={{paddingTop: '0.40rem', paddingBottom: '0.40rem', minWidth: '175px'}}
            onClick={(e) => cancelForm(e)}
          >
            Cancel Form
          </button>
        </div>
      </Form>
      <br />
      <MaterialTable
        options={{
          rowStyle: {
            fontSize: 12,
          },
          headerStyle: { fontSize: 12 },
        }}
        title={`${props.title} Table`}
        columns={state.columns}
        isLoading={props.isLoading}
        data={state.data}
        actions={[
          {
            icon: "add",
            tooltip: `Add ${props.title}`,
            isFreeAction: true,
            onClick: () => {
              showForm();
              setState({
                ...state,
                values: {},
              });
            },
          },
          {
            icon: "edit",
            tooltip: `Edit ${props.title}`,
            onClick: (event, rowData) => {
              showForm();
              setState({
                ...state,
                values: rowData,
              });
            },
          },
          {
            icon: "delete",
            tooltip: `Delete ${props.title}`,
            onClick: (event, rowData) => deleteRecorde(rowData.id),
          },
        ]}
      />
    </Fragment>
  );
};

const getInitialValues = (inputs) => {
  //declare an empty initialValues object
  const initialValues = {};
  //loop loop over fields array
  //if prop does not exit in the initialValues object,
  // pluck off the name and value props and add it to the initialValues object;
  inputs.fields.forEach((field) => {
    if (!initialValues[field.name]) {
      initialValues[field.name] = field.value;
    }
  });

  //return initialValues object
  return initialValues;
};

// const getInitialErrors = (values, fields) => {
//   //declare an empty errors object
//   const errors = {};
//   //loop loop over fields array
//   // If error came than put required error for that field
//   fields.fields.forEach(field => {
//     if (values[field.name] === "") {
//       errors[field.name] = `Please Enter ${field.name}`;
//     }
//   });

//   //return errors object
//   return errors;
// };

const FormTamplate = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (fields) => getInitialValues(fields),
  // Custom sync validation

  handleSubmit: (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  },
})(SettingsForm);

export { FormTamplate };
