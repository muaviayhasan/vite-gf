import React, { Component } from 'react';

// import jsons
import _data from '../../../mock_data/data';

class ServiceOne extends Component {
    render() {
        const { container="container", adClass="justify-content-center", iconAdClass="", boxAdClass="text-center", start=11, end=14 } = this.props;

        return (
            <div className={ container  }>
                <div className={ `row ${adClass}` }>
                    { _data.services.slice( start - 1, end ).map( ( item, index ) =>
                        <div className="col-sm-6 col-lg-3 col-noPadding" key={ index }>
                            <div className={ `icon-box ${boxAdClass}`} >
                                <span className={ `icon-box-icon ${iconAdClass}` }>
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
        );
    }
}

export default ServiceOne;