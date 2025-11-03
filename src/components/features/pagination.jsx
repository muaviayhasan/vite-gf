import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: 1
        }

        this.onPageLink = this.onPageLink.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onPageLink(e, index) {
        this.setState({pos: index});

        if ( this.props.onChange )
            this.props.onChange( ( index - 1 ) * this.props.unit );

        e.preventDefault();
    }

    onPrev(e) {
        this.setState({ pos: this.state.pos - 1 });

        if ( this.props.onChange )
            this.props.onChange( ( this.state.pos - 2 ) * this.props.unit );

        e.preventDefault();
    }

    onNext(e) {
        this.setState({ pos: this.state.pos + 1 });

        if ( this.props.onChange )
            this.props.onChange( ( this.state.pos ) * this.props.unit );

        e.preventDefault();
    }

    render() {
        const { aclsss, count = 12, unit = 6 } = this.props;
        const { pos } = this.state;

        let page_count = parseInt( count / unit ) + ( 0 < ( count % unit ) ? 1 : 0 );
        let page_numbers = [];

        for( let i = -1 ; i < 2 && page_count >= 3 ; i ++) {
            if ( 1 < pos && pos < page_count )
                page_numbers.push( pos + i );
            if ( 1 === pos )
                page_numbers.push( pos + i + 1 );
            if ( pos === page_count )
                page_numbers.push( pos + i - 1 );
        }

        for( let i = 0 ; i < page_count && page_count < 3 ; i ++) {
            page_numbers.push( i + 1 );
        }

        return (
            <nav aria-label="Page navigation" style={ {display: 0 === count ? 'none': ''} }>
                <ul className={ `pagination ${aclsss}` }>

                    <li className={ `page-item ${ 1 === pos ? 'disabled' : '' }` } >
                        <Link className="page-link page-link-prev" to="#" aria-label="Previous" tabIndex="-1" aria-disabled="true" onClick={ this.onPrev  }>
                            <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                        </Link>
                    </li>

                    {
                        page_numbers.map( (item, index) => (
                            <li className={ `page-item ${ item === pos ? 'active' : '' }` }
                                aria-current="page" 
                                key={ index  }>
                                <Link className="page-link" to="#" onClick={ (e)=>this.onPageLink(e, item) }>{ item}</Link>
                            </li>
                        ) )
                    }

                    { page_count > 3 ? <li className="page-item-total">of {page_count}</li> : '' }

                    <li className={ `page-item ${ page_count === pos ? 'disabled' : '' }`  }>
                        <Link className="page-link page-link-next" to="#" aria-label="Next" onClick={ this.onNext  }>
                            Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                        </Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Pagination;