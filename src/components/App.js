import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Watchlist from './Watchlist';
import Browse from './Browse';
import Team from './Team';
import Signup from './Signup';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import Header from './Header';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
//import LoginForm from './LoginForm';

export const appContext = React.createContext(null);

function LoginForm(props) {
	const backendURL = 'http://localhost:4501';
	const appCtx = React.useContext(appContext);

	const [formData, setFormData] = React.useState({
		username: '',
		password: '',
	});

	const handleSignUp = async (event) => {
		event.preventDefault();
		console.log('Inside handleSignUp : ', JSON.stringify(formData));
		try {
			const data = await axios({
				method: 'post',
				url: `${backendURL}/auth/signup`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(formData),
			});
			console.log(`Sign-up User response: `, data.data.data);
			if (data.data.data) {
				if (!data.data.error) {
					document.getElementById(
						'form-message'
					).innerHTML = `User ${formData.username} successfully signed up, Please sign-in now. `;
				} else {
					document.getElementById(
						'form-message'
					).innerHTML = `Error: ${data.data.error}`;
				}
			} else {
				document.getElementById(
					'form-message'
				).innerHTML = `${data.data.error}`;
			}
		} catch (err) {
			console.log(`Error Signing up: ${err.message}`);
			document.getElementById(
				'form-message'
			).innerHTML = `Error: ${err.message}`;
		}
	};

	const handleSignIn = async (event) => {
		event.preventDefault();
		console.log('Inside handleSignIn : ', JSON.stringify(formData));
		try {
			const data = await axios({
				method: 'post',
				url: `${backendURL}/auth/login`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(formData),
			});
			console.log(`Sign In response: `, data.data);
			const token = data.data.token;
			console.log(`Sign In response token: `, token);
			if (data.data) {
				if (data.data.token) {
					document.getElementById(
						'form-message'
					).innerHTML = `User ${formData.username} successfully signed in`;
					appCtx.saveLoginInfo(formData.username, token);
				} else {
					document.getElementById(
						'form-message'
					).innerHTML = `Error: ${data.data.error}`;
				}
			} else {
				document.getElementById(
					'form-message'
				).innerHTML = `${data.data.error}`;
			}
		} catch (err) {
			console.log(`Error Signing up: ${err.message}`);
			document.getElementById(
				'form-message'
			).innerHTML = `Error: ${err.message}`;
		}
	};

	const handleOnChange = (event) => {
		formData[event.target.name] = event.target.value;
	};

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Welcome to CinePrime, Please Sign Up / Sign In
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<div className='form-group'>
						<p id='form-message'></p>
					</div>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							placeholder='Username'
							name='username'
							onChange={handleOnChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleOnChange}
						/>
					</div>
					<div className='form-group'>
						<button onClick={handleSignUp}>Sign Up</button>
					</div>
					<div className='form-group'>
						<button onClick={handleSignIn}>Sign In</button>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function App(props) {
	const [token, setToken] = React.useState();
	const [user, setUser] = React.useState();
	const [modalShow, setModalShow] = React.useState(false);

	const saveLoginInfo = (user, token) => {
		setUser(user);
		setToken(token);
		console.log(`saveLoginInfo: User ${user} and token ${token} set.`);
	};

	const handleLogout = () => {
		console.log(`User ${user} successfully logged out.`);
		setUser(null);
		setToken(null);
	};

	return (
		<appContext.Provider
			value={{
				user: user,
				token: token,
				saveLoginInfo: saveLoginInfo,
				handleLogout: handleLogout,
			}}>
			<div className='App'>
				<Header user={user} token={token} setModalShow={setModalShow} />
				<LoginForm
					show={modalShow}
					onHide={() => setModalShow(false)}
					backdrop='static'
					keyboard={false}
					centered={true}
				/>
				<Switch>
					<Route
						path='/'
						exact={true}
						render={(routerProps) => (
							<Browse {...routerProps} user={user} token={token} />
						)}
					/>
					<Route
						path='/watchlist'
						exact={true}
						render={(routerProps) => (
							<Watchlist {...routerProps} user={user} token={token} />
						)}
					/>
					<Route
						path='/team'
						exact={true}
						render={(routerProps) => <Team {...routerProps} />}
					/>
					<Route
						path='/signup'
						exact={true}
						render={(routerProps) => <Signup {...routerProps} />}
					/>
					<Route
						path='/moviedetails'
						exact={true}
						render={(routerProps) => <MovieDetails {...routerProps} />}
					/>
				</Switch>

				<Footer />
			</div>
		</appContext.Provider>
	);
}

export default App;
