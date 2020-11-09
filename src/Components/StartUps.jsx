import React from 'react';
import {Button} from 'react-bootstrap';

const StartUps = () => {
    return (
        <div className="container">
		<div className="row">
			<div className="col-md-1"></div>

			<div className="col-md-10 content">
				<form>
              		<div className="row">
                
                  		<div className="input-group ">
               				<input type="text" className="form-control" name="query" placeholder="search Startup by name or industry" id="txtSearch" />

               				<div className="input-group-btn">
                    			<button className="btn btn-primary" type="search">
                    				<span className="glyphicon glyphicon-search"> Search</span>
                    			</button>
               				</div>
               			</div>
                
              		</div>
            	</form>
               
            	<div className="list">
            		<ul>
            			<li>
                            <div className="row">
            					<div className="col-md-2" >
            						<div className="profile">
            							<h3>
            								<img src={'./images/logo1.jpeg'} className="img-responsive dp" alt="company logo" />
            							</h3>
            						</div>
            					</div>
            					<div className="col-md-10">
            						<a href="#"><h3>tutahub</h3></a>
            						<p>a website for tutorials</p>
            						<p>
            							{/* <a href="#"><button className="btn btn-sm">See full details</button></a> */}
                                        <Button variant="outline-secondary" size="sm">See full details</Button>{' '}
            						</p>
            						<hr />
            					</div>
            				</div>
            			</li>

            			<li>
            				<div className="row">
            					<div className="col-md-2">
            						<div className="profile">
            							<h3>
            								<img src={'./images/logo2.jpeg'} className="img-responsive dp" alt="company logo" />
            							</h3>
            						</div>
            					</div>
            					<div className="col-md-10">
            						<a href="#"><h3>Anditer</h3></a>
            						<p>Anditer is a tech blog</p>
            						<p>
                                        <Button variant="outline-secondary" size="sm">See full details</Button>{' '}
            						</p>
            						<hr />
            					</div>
            				</div>
            			</li>

            			<li>
            				<div className="row">
            					<div className="col-md-2">
            						<div className="profile">
            							<h3>
            								<img src={'./images/logo3.png'} className="img-responsive dp" alt="company logo" />
            							</h3>
            						</div>
            					</div>
            					<div className="col-md-10">
            						<a href="#"><h3>think and Zoom</h3></a>
            						<p>Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming.</p>
            						<p>
                                        <Button variant="outline-secondary" size="sm">See full details</Button>{' '}
            						</p>
            						<hr />
            					</div>
            				</div>
            			</li>

            			<li>
            				<div className="row">
            					<div className="col-md-2">
            						<div className="profile">
            							<h3>
            								<img src={'./images/logo4.png'} className="img-responsive dp" alt="company logo" />
            							</h3>
            						</div>
            					</div>
            					<div className="col-md-10">
            						<a href="#"><h3>Slatecube</h3></a>
            						<p>Slatecube helps job seekers develop job-relevant skills, gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships.</p>
            						<p>
                                        <Button variant="outline-secondary" size="sm">See full details</Button>{' '}
            						</p>
            						<hr />
            					</div>
            				</div>
            			</li>

            			<li>
            				<div className="row">
            					<div className="col-md-2">
            						<div className="profile">
            							<h3>
            								<img src={'./images/logo5.png'} className="img-responsive dp" alt="company logo" />
            							</h3>
            						</div>
            					</div>
            					<div className="col-md-10">
            						<a href="#"><h3>Sleekjob Academy</h3></a>
            						<p>Trains world className software developers in Ghana and matches them to employment opportunities</p>
            						<p>
                                        <Button variant="outline-secondary" size="sm">See full details</Button>{' '}
            						</p>
            						<hr />
            					</div>
            				</div>
            			</li>
            		</ul>
            	</div>
			</div>

			<div className="col-md-1"></div>
		</div>
	</div>
    );
}

export default StartUps;
