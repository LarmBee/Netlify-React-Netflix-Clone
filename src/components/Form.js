// import { async } from "@firebase/util";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
    getAuth
} from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";

function LogForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});
	
	let navigate = useNavigate();

	const login = async (e) => {
		e.preventDefault();
		try {
			const user = signInWithEmailAndPassword(auth, email, password)
			.then((userCredential)=>{
                const user = userCredential.user.accessToken
                if (user){
                    navigate('/home')
                }
				else if(!user)(
					alert('User does not exist!!')
				)
            })
		} catch (error) {
			
			
		}
	};

	const register = async (e) => {
		e.preventDefault();
		try {
			const user = createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
            Navigate('/home')
		} catch (error) {
			 if(error === 'auth/wrong-password'){
			 	console.log('Please check the Password');
			   }
			   if(error === 'auth/user-not-found'){
			 	console.log('Please check the Email');
			   }
			   if(error.FirebaseError === 'auth/invalid-email'){
			 	console.log('Please check the Email');
			  }
		}
	};

	const logout = async (e) => {
		e.preventDefault();
		await signOut(auth);
		navigate('/login')
	};

	return (
		<section className="vh-50 gradient-custom">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div
							className="card bg-dark text-white"
							style={{ "border-radius": "1rem" }}
						>
							<div className="card-body p-5 text-center">
								<div className="mb-md5 mt-md-4 pb-5">
									{user?.email}
									<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
									<form>
										<div className="form-outline form-white mb-4">
											<label className="form-label">Email</label>
											<input
												className="form-control form-control-lg"
												type="email"
												value={email}
												onChange={(e) => {
													setEmail(e.target.value);
												}}
											/>
										</div>
										<div className="form-outline form-white mb-4">
											<label className="form-label" for="typePasswordX">
												Password
											</label>

											<input
												className="form-control form-control-lg"
												type="password"
												aria-describedby="passwordHelpBlock"
												value={password}
												onChange={(e) => {
													setPassword(e.target.value);
												}}
											/>
										</div>
										<br />
										<small id="passwordHelpBlock" class="form-text text-muted">
											Your password must be 8-20 characters long, contain
											letters and numbers, and must not contain spaces, special
											characters, or emoji.
										</small>
										<br />
										<br />
										<button onClick={login} className="btn btn-primary mb-2">
											Sign In
										</button>
										<br />
										<p className="small mb-5 pb-lg-2">
											If you do not have an account please click the button to
											create a new account with details you provided above
										</p>
										<button onClick={register} className="btn btn-info">
											Create Account
										</button>
										<br />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LogForm;
