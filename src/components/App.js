import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Watchlist from './Watchlist';
import Browse from './Browse';
import Team from './Team';
import Footer from './Footer';
import Header from './Header';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { BACKEND_API_URL } from './Info.js';

export const appContext = React.createContext(null);

function LoginForm(props) {
	//const backendURL = 'http://localhost:4501';
	const backendURL = BACKEND_API_URL;
	const appCtx = React.useContext(appContext);

	const emptyFormData = {
		username: '',
		password: '',
	};

	const [formData, setFormData] = React.useState(emptyFormData);

	const handleSignUp = async (event) => {
		event.preventDefault();
		console.log('Inside handleSignUp : ', JSON.stringify(formData));

		if (formData.username === '' || formData.password === '') {
			document.getElementById(
				'form-error-message'
			).innerHTML = `Username and/or password is required.`;
		}
		try {
			const data = await axios({
				method: 'post',
				url: `${backendURL}/auth/signup`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(formData),
			});
			if (data.data.data) {
				if (!data.data.error) {
					document.getElementById(
						'form-message'
					).innerHTML = `User ${formData.username} successfully signed up, Please sign-in now. `;
					document.getElementById('form-error-message').innerHTML = '';
				} else {
					document.getElementById(
						'form-error-message'
					).innerHTML = `Error: ${data.data.error}`;
				}
			} else {
				document.getElementById(
					'form-error-message'
				).innerHTML = `${data.data.error}`;
			}
		} catch (err) {
			document.getElementById(
				'form-error-message'
			).innerHTML = `Error: ${err.message}`;
		}
		//setFormData(emptyFormData);
	};

	const handleSignIn = async (event) => {
		event.preventDefault();
		console.log('Inside handleSignIn : ', JSON.stringify(formData));
		if (formData.username === '' || formData.password === '') {
			document.getElementById(
				'form-error-message'
			).innerHTML = `Username and/or password is required.`;
		}

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
					document.getElementById('form-error-message').innerHTML = '';
				} else {
					document.getElementById(
						'form-error-message'
					).innerHTML = `Error: ${data.data.error}`;
				}
			} else {
				document.getElementById(
					'form-error-message'
				).innerHTML = `${data.data.error}`;
			}
		} catch (err) {
			console.log(`Error Signing up: ${err.message}`);
			document.getElementById(
				'form-error-message'
			).innerHTML = `Error: ${err.message}`;
		}
		//setFormData(emptyFormData);
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
					Please Sign Up / Sign In... and enjoy!
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<div className='form-group'>
						<p id='form-message' style={{ color: 'green' }}></p>
					</div>
					<div className='form-group'>
						<p id='form-error-message' style={{ color: 'red' }}></p>
					</div>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>&nbsp;&nbsp;
						<input
							type='text'
							placeholder='Username'
							name='username'
							onChange={handleOnChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>&nbsp;&nbsp;
						<input
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleOnChange}
						/>
					</div>
					<div id='form-button-group'>
						<div className='form-group'>
							<button
								onClick={handleSignUp}
								style={{ backgroundColor: '#22252a', color: 'white' }}>
								Sign Up
							</button>
						</div>
						<div className='form-group'>
							<button
								onClick={handleSignIn}
								style={{ backgroundColor: '#22252a', color: 'white' }}>
								Sign In
							</button>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					onClick={props.onHide}
					style={{ backgroundColor: '#22252a', color: 'white' }}>
					Close
				</Button>
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
				</Switch>

				<Footer />
			</div>
		</appContext.Provider>
	);
}

export default App;
