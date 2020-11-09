import React from 'react';

const Login = () => {
    return (
		<div className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8 content">
					<h3>Already a member? Login to add your startup.</h3>
					<br />

					<div className="signup">
						<form>
							<div>
								<label>Email Address</label>
								<input type="text" class="form-control" placeholder="Email Address" />
							</div>
							<div>
								<label>Password</label>
								<input type="text" class="form-control" placeholder="Password" />
							</div>

							{/* <button style={{backgroundColor: 'blue'}}>Sign Up</button> */}
							<button type="button" className="btn btn-primary">Sign in</button>
						</form>
					</div>	
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
    );
}

export default Login;
