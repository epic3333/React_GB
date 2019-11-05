import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        counter: 0,
    };
    
/*     UNSAFE_componentWillMount() {
        console.log('Child componentWillMount');
    }

    componentDidMount() {
        console.log('Child componentDidMount');
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    } */

    render() {
        return (
            <div>{ this.props.text }</div>
        )
    }
}