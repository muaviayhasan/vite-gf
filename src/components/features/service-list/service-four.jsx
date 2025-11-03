import React, { Component } from 'react';

// import jsons
import _data from '../../../mock_data/data';

class ServiceFour extends Component {
    render() {
        return(
            <div className="icon-boxes-container bg-transparent">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12 icon-boxes">
                            { _data.services.slice(7,10).map((item, index)=>
                                <div className="col-sm-6 col-lg-4" key={ index  }>
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon">
                                            <i className={ item.icon }></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">{ item.title}</h3>
                                            <p>{ item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceFour;