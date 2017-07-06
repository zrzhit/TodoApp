import React, { Component } from 'react';

import TodoAction from '../Action/TodoAction'
import TodoHeaderContainer from './TodoHeaderContainer'
import TodoInputContainer from './TodoInputContainer'
import TodoListContainer from './TodoListContainer'

export default class TodoApp extends Component {
	componentDidMount() {
		TodoAction.loadData()
	}

	render() {
		return (
			<div style={{flexDirection:'column', display:'flex'}}>
				<TodoHeaderContainer />
				<TodoInputContainer />
				<TodoListContainer />
			</div>
		)
	}

}
