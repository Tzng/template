/**
 * @author {{author}}
 * @date {{date}}
 * @descriptions: {{descriptions}}
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import './{{template}}.less';

/**
 * @descriptions: {{descriptions}}
 */
@connect(({  }) =>({

}))
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div className="{{template}}">
                我是{{template}}页面
            </div>
        );
    }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index
