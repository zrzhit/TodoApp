import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
	
	static get defaultProps() {
		return {
		    todos:[],
		    toggleItem: ()=>{}
    	} 
	}

	static propTypes = {
	  	todos: PropTypes.arrayOf(PropTypes.object).isRequired,   
	  	toggleItem: PropTypes.func.isRequired,
	}

	render() {

		const {todos, toggleItem, deleteItem, editItem} = this.props

		return (
			<div>
				<ul>
					{
						todos.map((todo)=>{
							return (
								<TodoItem 
									key={todo.id} 
									title={todo.title} 
									checked={todo.checked} 
									id={todo.id}
									toggleItem={toggleItem}
									deleteItem={deleteItem}
									editItem={editItem}
								/>
							)
						})
					}
				</ul>

			</div>
		)
	}

}