import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class TodoInput extends Component {
	
	static get defaultProps() {
		return {
			type: 'text',
			style: {width:200, height:35},
			placeholder: '请输入待办事项',
			autoFocus: true,
			onKeyDown: ()=>{},
			onBlur: ()=>{}
		}
	}

	static propTypes = {
	  type: PropTypes.string.isRequired,
	  placeholder: PropTypes.string.isRequired,
	  style: PropTypes.object.isRequired,
	  autoFocus: PropTypes.bool.isRequired,
	  onKeyDown: PropTypes.func.isRequired,
	  onBlur: PropTypes.func.isRequired,
	}

	render() {

		return (
			<input 
				{...this.props}
			/>
		)
	}

}