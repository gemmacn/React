//parnt who render every child
class App extends React.Component{
	render(){
	return (
		<div className='container'>What the fuck is going on
			<NavBar/>
			<Jumbotron/>
		</div>
		)
	}
}


//first component child
class NavBar extends React.Component{

	render(){
		return (
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
					  <a className="navbar-brand" href="#">Navbar</a>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
		
					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav mr-auto">
					      <li className="nav-item active">
					        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Link</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link disabled" href="#">Disabled</a>
					      </li>
					    </ul>
					    <form className="form-inline my-2 my-lg-0">
					      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
					      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					    </form>
					  </div>
					</nav>)
	}
}

//seecond coponent child
class Jumbotron extends React.Component {
	render (){
		return(
				<div className="jumbotron">
				  <h1 className="display-3">Hello, world!</h1>
				  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				  <hr className="my-4" />
				  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
				  <p className="lead">
				    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				  </p>
				</div>)
	}

}

// friend who prints everything with magic
ReactDOM.render(<App/>, document.getElementById('root'))