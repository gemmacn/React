
class App extends React.Component {

	constructor(){
		super()

		this.state={
			items: []
		}
	}

	handleEnterPress =(e) => {
		if (e.key.toLowerCase() === 'enter') {
			const text = e.target.value

			if (!text.length)
           		return;

	        const item = {
	            id: Date.now(),
	            text: text,
	            done: false
	        }

	        this.setState(function(prevState) {
	            return {
	                items: prevState.items.concat(item)
	            }
	        })
		}
	}
handleChange=()=>{
	var checked=event.target.checked
	item.done=true
	if(item.done===true){

	}
	console.log('checked')
}

	render(){
		return(
			<div className="container">
							
							<div className="row">
								<div className="col-md-6">
									<TodoList
										onEnterPress={this.handleEnterPress}
										items={this.state.items}
										handleChange={this.handleChange}
									/>
								</div>
								<div className="col-md-6">
									<DoneList/>
								</div>
							</div>
						</div>)
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render(){
		 return(<div className="TodoList">
								<h1>Todos</h1>
								<input type="text" className="form-control add-todo" onKeyPress={this.props.onEnterPress} placeholder="Add todo"/>
									<button id="checkAll" className="btn btn-success">Mark all as done</button>
									<hr/>
									<ul id="sortable" className="list-unstyled">
									
										{this.props.items.map((item) =>{
	                						return <li key={item.id}>
	                						<div className="checkbox">
			                           				 <label>
			                               			 <input type="checkbox" value="" onChange={this.props.handleChange}/>{item.text}</label>
	                        				</div></li>
            								})
										}
									
								 </ul>
								 <div className="todo-footer">
									 <strong><span className="count-todos"></span></strong> Items Left
								 </div>
					</div>)
	}
}

class DoneList extends React.Component {
	render(){
		return(
					<div className="DoneList">
						<h1>Already Done</h1>
						 <ul id="done-items" className="list-unstyled">




							//<li>{}<button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>
						</ul>
					</div>)
	}
}


// friend who prints everything with magic
ReactDOM.render(<App />, document.getElementById('root'))