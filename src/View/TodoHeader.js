import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class TodoHeader extends Component {
	
	static get defaultProps() {
		return {
			name: '刘德华',
			todoCount: 98
		}
	}

	static propTypes =  {
	  name: PropTypes.string.isRequired,
	  todoCount: PropTypes.number.isRequired
	}

	render() {
		const {name,totalCount} = this.props
		return (
			<div>
				<h1>我的待办清单</h1>
				<h3>哈喽， {name}，你有 {totalCount} 项待办未处理</h3>
			</div>
		)
	}

}
