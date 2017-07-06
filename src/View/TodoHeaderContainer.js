import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoStore from '../Store/TodoStore'
import {Container} from 'flux/utils';

class TodoHeaderContainer extends Component {
	

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

	//下面两行代码 完全代替上面的功能
	static getStores() {
	   return [TodoStore];
	}

  	static calculateState(prevState) {
    	return {
      		todos: TodoStore.getState(),
    	};
  	}


	render () {
		let undos = this.state.todos.filter( item => !item.checked )
		return (
			<TodoHeader name='汪峰' totalCount={undos.length}/>
		)
	}

}

module.exports = Container.create(TodoHeaderContainer);