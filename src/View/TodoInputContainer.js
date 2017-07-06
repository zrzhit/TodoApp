import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoAction from '../Action/TodoAction'

class TodoInputContainer extends Component {
	
	render () {
		return (
			<TodoInput 
				autoFocus={true}
				onKeyDown={(e)=>{
					if (e.keyCode === 13 && e.target.value !== '') {
						console.log(e.target.value)
						TodoAction.createItem(e.target.value)
						e.target.value = ''
					}
				}}
			/>
		)
	}

}

module.exports = TodoInputContainer;