import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoStore from '../Store/TodoStore'
import TodoAction from '../Action/TodoAction'
import {Container} from 'flux/utils';

class TodoListContainer extends Component {
	

	// constructor(props) {
	//   super(props);
	//   this.state = {
	//   	 todos: TodoStore.getState(),
	//   };
	// }

	// componentDidMount() {
	// 	this.addObserver = TodoStore.addListener(()=>{
	// 		this.setState({
	// 			todos: TodoStore.getState()
	// 		}) 
	// 	})
	// }

	// componentWillUnmount() {
	// 	this.addObserver()
	// }

	static getStores() {
	   return [TodoStore];
	}

  	static calculateState(prevState) {
    	return {
      		todos: TodoStore.getState(),
    	};
  	}


	render () {
		return (
			<TodoList 
				todos={this.state.todos} 
				toggleItem={TodoAction.toggleItem}
				deleteItem={TodoAction.deleteItem}
				editItem={TodoAction.editItem}
			/>
		)
	}

}

module.exports = Container.create(TodoListContainer);