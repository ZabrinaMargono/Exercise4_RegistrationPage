import React, {useState, useEffect} from 'react';

const Login = () => {

    const [titlePage, setTitlePage] = useState("Login Page");

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    useEffect( () => {
        setTimeout( () =>{
            setTitlePage("Register Page");
        },3000)
    }, []);

    const handleSubmit = () => {
        const data = {
            username : username,
            password : password,
        }
        console.log(data);
    };

    return (
        <div className="container">
            <h1 className="mt-5">{titlePage}</h1>

            <label className ="form-label"> Username/Email</label>

            <input
            className="form-control"
            placeholder="Masukkan username/email anda" 
            value={username} 
            onChange={(event)=> setUsername(event.target.value)}>

            </input>

            <label className="form-label">Password/Kata Sandi</label>

            <input 
            className="form-control"
            placeholder="Masukkan password/kata sandi anda" 
            value={password}
            type="password"
            onChange={(event)=> setPassword(event.target.value)}>
            </input>

            <br/> <br/>

            <button className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
        </div>
    );
}

export default Login;
