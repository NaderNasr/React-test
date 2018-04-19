
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



Class Login extends Component {

	constructor(props){

		super(props);

		this.state = {
			email: '',
			password: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(){
		$.ajax({
			type:'POST',
			url:
			data:{
				email: this.state.email,
				password: this.state.password
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

			<RaisedButton label='Log in' primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

			</div>
			</MuiThemeProvider>
			</div>

			)

		}


	}

