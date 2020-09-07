import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

import "./Login.css"

function Login(props) {
    let history = useHistory();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    async function handleSubmit(e){
        e.preventDefault();
        try{
            let output = await fetch("http://localhost:4040/login",{
                method:"POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({Email,Password})            
                })

            let value = await output.json();

            if(Object.keys(value.dataUser).length === 0){
                alert("User Not Found")
            }else{
                if(value.result === true){
                    props.setUser(value.dataUser[0].FName)
                    props.setIsLoggedIn(true)
                    console.log("Sucessfully Logging in")
                    history.push("/dashboard")
                }
                else{
                    alert("Password Incorrect")
                }
            }
        }catch(err){
            console.log(err)
        }        
    }

    function handleRegister(){
        history.push("/register")
    }

    return (
        <div id="login">
        <h3 className="text-center text-info heading">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" >
                            <br />
                            <div className="form-group">
                                <label htmlFor="email" className="text-info">Email:</label><br />
                                <input type="text" onChange={e => setEmail(e.target.value) } name="email" id="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" onClick={handleSubmit} name="submit" className="btn btn-info btn-md btn-lg btn-block" value="submit" />
                            </div>
                            <div id="register-link" className="text-right">
                                <span>Dont Have An Account ? </span> <span className="text-info hoverText" onClick={handleRegister}> Register here</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
