import React from 'react';

const Resgister = () => {
    return (
		<div className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8 content">
					<h3>Join Kawolegal. Sign up to get your startup listed now!</h3>
					<br />

					<div className="signup">
						<form>
							<div>
							<label>Full Name</label>
								<input type="text" class="form-control" placeholder="Full Name" />
							</div>
							<div>
								<label>Email Address</label>
								<input type="text" class="form-control" placeholder="Email Address" />
							</div>
							<div>
								<label>Password</label>
								<input type="text" class="form-control" placeholder="Password" />
							</div>
							<div>
								<label>Confirm Password</label>
								<input type="text" class="form-control" placeholder="Confirm Password" />
							</div>

							<button type="button" className="btn btn-primary">Sign in</button>
						</form>
					</div>	
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
    );
}

export default Resgister;
