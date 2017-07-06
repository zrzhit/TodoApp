import React , {Component} from 'react'
import PropTypes from 'prop-types'

//这种导出匹配的导出方法是   import Person from './person'
// export default Person
// export default class Person extends Component
class Person extends Component {

	static get defaultProps() {
		return {
			param: "默认参数"
		}
	}

	static propTypes = {
	  param: PropTypes.string.isRequired
	}

	render() {
		
		const { param } = this.props

		return (
			<div>
				<h3>ES6组件写法</h3>
				<div> {param} </div>
			</div>
		)
	}
}

//   let Person = require('./person')   import Person from './person' 都可以导入
module.exports = Person