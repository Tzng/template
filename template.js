import React from 'react';
import PropTypes from 'prop-types';
import './{{template}}.styl';

import {withRouter} from 'react-router-dom'

@withRouter
 class {{template}} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) { }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) { }

  componentDidUpdate(prevProps, prevState) { }

  componentWillUnmount() { }


  render() {
    return (
      <div className="{{template}}">

      </div>
    );
  }
}

{{template}}.propTypes={

}

{{template}}.defaultProps={
  
}

export default {{template}}

