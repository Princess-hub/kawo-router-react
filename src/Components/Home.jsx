import React from 'react';

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url('./images/judge.jpg')`, width:'100%',height:'100vh', overFlow:'hidden', backgroundSize:'cover'
        }}>
        <div class="hello">
            <h1>KAWOLEGAL</h1>
            <p>A collaboration ecosystem</p>
            <p>for problems solvers and support for startups.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Register Now!</a></p>
        </div>
        </div>
    );
}

export default Home;
