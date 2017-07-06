import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoInput from './TodoInput'
export default class TodoItem extends Component {


	constructor(props) {
	  super(props);
	  this.state = {
	  	isEditable: false
	  };
	}

	static get defaultProps() {
		return {
			title: '默认事项',
			checked: false,
			id: -1,
			toggleItem: ()=>{},
			deleteItem: ()=>{},
			editItem: ()=>{}
		}
	}

	static propTypes =  {
	  title: PropTypes.string.isRequired,
	  checked: PropTypes.bool.isRequired,
	  id: PropTypes.number.isRequired,
	  toggleItem: PropTypes.func.isRequired,
	  deleteItem: PropTypes.func.isRequired,
	  editItem: PropTypes.func.isRequired,
	}

	componentWillMount() {}

	changeEditableMode() {
		this.setState({
			isEditable: !this.state.isEditable
		})
	}
	
	//只读模式
	onlyRead() {
		const { title, checked, id, toggleItem, deleteItem} = this.props
		return (
			<div>
				<li>
					<input 
						type="checkbox" 
						checked={checked}
						onChange={()=>{
							toggleItem(id)
						}}
					/>
					<span
						onDoubleClick={()=>{
							this.changeEditableMode()
						}}
					>{title}</span>
					<button 
						onClick={()=>{
							deleteItem(id)
						}
					}>x</button>
				</li>
			</div>
		)
	}

	//编辑模式
	editMode() {
		const { title, checked, id, toggleItem, deleteItem, editItem} = this.props
		return (
			<div>
				<li>
					<input 
						type="checkbox" 
						checked={checked}
						onChange={()=>{
							toggleItem(id)
						}}
					/>
					<TodoInput
						style={{width:200, height:25}}
						defaultValue={title}
						onBlur={()=>{
							this.changeEditableMode()
						}}
						onKeyDown={(e)=>{
							if (e.keyCode === 13 && e.target.value!=='') {
								editItem(id, e.target.value)
								this.changeEditableMode()
							}
						}}
					/>
					<button 
						onClick={()=>{
							deleteItem(id)
						}
					}>x</button>
				</li>
			</div>
		)
	}

	render() {
		return this.state.isEditable ? this.editMode() : this.onlyRead()
	}

}