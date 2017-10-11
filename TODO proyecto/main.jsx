
class App extends React.Component {

	constructor(){
		super()

		this.state={
			items: []// tengo que guardar un listado de tareas
		}
	}

				handleEnterPress =(e) => {
					if (e.key.toLowerCase() === 'enter') {//Poso en lowercase la paraula Enter que per defecte em sortirá pq no hi hagiin problemes entre navegadors
						const text = e.target.value// el valor del lugar donde ha ocurrido el evento ( input)
						e.target.value=' '//limpio el input cada vez
						if (!text.length)// me aseguro q el texto tenga valor( que haya texto)
			           		return;

				        const item = {
				            id: Date.now(),// aixi em genera com un id dinámic
				            text: text, //el texto de cada tarea ya viene dado por el e.target.value
				            done: false // se cambiará a true cuando la tarea este hecha
				        }

				        this.setState(function(prevState) {// Setstate provoca un nuevo render, un cambio de estado en el componente.
				            return {// el return tiene que darme el nuevo estado, acumulando en este caso el estado anterior.
				                items: prevState.items.concat(item)
				            }
				        })
					}
				}
handleChange=()=>{
	var checked=event.target.checked
	item.done=true//(aixó ho he de fer desde un setState i tindré que retornar algo a més)
	
	console.log('checked')
}

/* 
"Esta sería la funcion que estoy intentando hacer en la handleChange"
markTaskdone =(event)=>{
	const id = event.target.value

	this.setState(function(prevState{
	const tasks = prevState.tasks.map(task =>{
	if (task.id==id){
	task.done= true
	}
	return { tasks}
	})
	}))
}
*/

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
									<DoneList
									handleChange={this.handleChange}

									/>
									
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
		constructor(props) {
		super(props);
		
	}

	render(){

		return(
					<div className="DoneList">
						<h1>Already Done</h1>
						 <ul id="done-items" className="list-unstyled">
						 	{this.props.items.map((item)=>{
						 		if (item.done===true){
						 		return <li key={item.id}>{item.text}</li>
						 	}
						 	}
						 	)}



							//<li>{}<button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>
						</ul>
					</div>)
	}
}


// friend who prints everything with magic
ReactDOM.render(<App />, document.getElementById('root'))