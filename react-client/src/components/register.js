
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


// Class Register extends Component {

// 	super(props);

// 	this.state = {

// 		email: '',
// 		password: '',
// 		phone: '',
// 		location: ''
// 	}

// 	render(){

// 		return (

// 			<div>

// 			<MuiThemeProvider>

// 			<div>

// 			<AppBar title ='login'/>

// 			<TextField 
// 			hintText = "Enter Your Email Address"
// 			floatingLabelText = "Email Address"
// 			onChange = {(event, newValue) => this.setState({first_name : newValue })}
// 			/>

// 			<br/>

// 			<TexField
// 			hintText = "Enter your password"
// 			floatingLabelText = "Password"
// 			onChange = {(event, newValue) => this.setState({password : newValue})}
// 			/>

// 			<br/>

// 			<TextField
// 			hintText = "Enter your phone number"
// 			floatingLabelText = "Phone number"
// 			onChange = {(event, newValue) => this.setState({phone : newValue})}
// 			/>

// 			<br/>

// 			<TextField
// 			hintText = "Enter your location"
// 			floatingLabelText = "Location"
// 			onChange = {(event, newValue) => this.setState({location : newValue})}
// 			/>

// 			<br/>

// 			<RaisedButton label='Submit' primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

// 			</div>

// 			</MuiThemeProvider>

// 			</div>

// 			)

// 		}


// 	}


Class Register extends Component {

	constructor(props){

		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phone: '',
			location:{latitude: '',longtitude: ''}
		}
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(){
		$.ajax({
			type:'POST',
			url:
			data:{
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
				phone: this.state.phone,
				location:{
                latitude: this.state.location.latitude,
                longtitude: this.state.location.longtitude
				}
			}
			success(){
				console.log("Success in register POST!", data);
			},
			error(){
				console.log("Error in register POST!");
			}
		})
	}


	render(){

		return (

			<div>
			<MuiThemeProvider>
			<div>
			<AppBar title ='login'/>

			<TextField 
			hintText = "Enter Your First Name"
			floatingLabelText = "First Name"
			onChange = {(event, newValue) => this.setState({firstName : newValue})}
			/>

			<br/>

			<TextField 
			hintText = "Enter Your Last Name"
			floatingLabelText = "Last Name"
			onChange = {(event, newValue) => this.setState({lastName : newValue})}
			/>

			<br/>

			<TextField 
			hintText = "Enter Your Email Address"
			floatingLabelText = "Email Address"
			onChange = {(event, newValue) => this.setState({email : newValue})}	
			/>

			<br/>

			<TexField
			hintText = "Enter your password"
			floatingLabelText = "Password"
			onChange = {(event, newValue) => this.setState({password : newValue})}
			/>

			<br/>

			<TextField
			hintText = "Enter your phone number"
			floatingLabelText = "Phone number"
			onChange = {(event, newValue) => this.setState({phone : newValue})}
			/>

			<br/>

			<TextField
			hintText = "Enter your location"
			floatingLabelText = "Location"
			onChange = {(event, newValue) => this.setState({location : newValue})}
			/>

			<br/>

			<RaisedButton label='Sign Up' primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

			</div>
			</MuiThemeProvider>
			</div>

			)

		}


	}

