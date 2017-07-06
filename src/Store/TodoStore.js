/**
 * 1. 存储数据
 * 2. View取数据必须从Store获取
 * 
 */
import Constants from '../Constants/Constants'
import TodoDispatcher from '../Dispatcher/TodoDispatcher'
import {ReduceStore} from 'flux/utils'; // http://facebook.github.io/flux/docs/flux-utils.html#content


// const CHANGE_TODOS = 'CHANGE_TODOS'
// import EventEmitter from 'events'
// let _emitter = new EventEmitter()
// let todos = [];


let toggleItemList = (todos, id) => {
	let newTodos = [...todos];

	let target = newTodos.find((todo)=>{
		return todo.id === id
	})
	if (target) {
		target.checked = !target.checked
	}
	return newTodos
}
 
let deleteItemList = (todos, id) => {
	let newTodos = [...todos];

	//找到对应的索引
	let idx = newTodos.findIndex((todo)=>{
		return todo.id === id
	})
	//按照索引删除
	newTodos.splice(idx,1)
	return newTodos
}

let editItem = (todos, id, title) => {
	let newTodos = [...todos];
	let target = newTodos.find((todo)=>{
		return todo.id === id
	})
	target.title = title
	return newTodos
}

//创建新标签
let createItem = (todos,title) => {
	let newTodos = [...todos];
	let idx =  newTodos.length ?  newTodos[newTodos.length-1].id + 1 : 100
	var todo = {
		id: idx,
		title: title,
		checked: false
	}
	newTodos.push(todo)
	return newTodos
}


// let todoStore = {
// 	getTodos() {
// 		return todos;
// 	},
// 	addObserver(callback) {
// 		_emitter.on(CHANGE_TODOS, callback)
// 		return ()=> _emitter.removeListener(CHANGE_TODOS, callback)
// 	},
// 	dispatchToken: TodoDispatcher.register((action)=>{
// 		console.log(action)
// 		switch(action.type) {
// 			case Constants.TOGGLEITEM:
// 				todos = toggleItemList(todos, action.id);
// 				break;
// 			case Constants.DELETEITEM:
// 				todos = deleteItemList(todos, action.id);
// 				break;
// 			case Constants.CREATEITEM:
// 				todos = createItem(todos, action.title);
// 				break;
// 			case Constants.EDITITEM:
// 				todos = editItem(todos, action.id, action.title);
// 				break;
// 			case Constants.LOADDATA:
// 				todos = action.todos;
// 				break;
// 			default:
// 				break;
// 		}
// 		_emitter.emit(CHANGE_TODOS)
// 	}),


// }


class TodoStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(todos, action) {
    switch (action.type) {
		case Constants.TOGGLEITEM:
			return toggleItemList(todos, action.id);
		case Constants.DELETEITEM:
			return deleteItemList(todos, action.id);
		case Constants.CREATEITEM:
			return createItem(todos, action.title);
		case Constants.EDITITEM:
			return editItem(todos, action.id, action.title);
		case Constants.LOADDATA:
			return action.todos;
		default:
			return todos;
    }
  }

}


//关联dispatcher
module.exports = new TodoStore(TodoDispatcher);




