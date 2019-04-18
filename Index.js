/**
 * @author {{author}}
 * @date {{date}}
 * @descriptions: {{descriptions}}
 */
import React from 'react';
import PropTypes from 'prop-types';
import './Index.less';

/**
 * @descriptions: {{descriptions}}
 */
class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {

	};

	// 接收到新的props的检测
  	static getDerivedStateFromProps(nextProps, prevState){
		return null;
	}

	componentDidMount() { }


	
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {

	}

	componentWillUnmount() {

	}

	// 在render之前调用，state已更新
	getSnapshotBeforeUpdate(prevProps, prevState) {
		// 如果 `props.list` 增加，将原来的 scrollHeight 存入 listRef
		if (prevProps.list.length < this.props.list.length) {
			return this.listRef.scrollHeight
		}
		return null
	}

	render() {
		return (
			<div className="{{template}}">
				我是{{ template }}页面
			</div>
		);
	}
}

Index.propTypes = {

}

Index.defaultProps = {

}

export default Index
