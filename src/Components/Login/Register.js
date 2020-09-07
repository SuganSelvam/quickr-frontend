import React, { useState } from 'react'

function Register({history}) {

    const initialState = ""

    const [FName, setFName] = useState(initialState)
    const [LName, setLName] = useState(initialState)
    const [Email, setEmail] = useState(initialState)
    const [Password1, setPassword1] = useState(initialState)
    const [Password2, setPassword2] = useState(initialState)

    async function handleRegister(e){
        e.preventDefault();

        if(Password1 !== Password2){
            alert("Password Do not Match")
            setPassword1(initialState)
            setPassword2(initialState)

        } else{
            try{
                let output = await fetch("https://quikr-backend.herokuapp.com/register",{
                    method:"POST",
                    headers: {"Content-type":"application/json"},
                    body: JSON.stringify({FName,LName,Email,Password1})
                    })
    
                let value = await output.json();
                console.log("Value in Register : ",value)
                alert("sucessfully Registered, You can Login Now")
                history.push("/login")
            }catch(err){
                console.log(err)
            }
        }
    }


    return (
        <div id="register">
            <h3 className="text-center text-info heading">Registration form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form">
                            <br />
                            <div className="form-group">
                                <label htmlFor="FName" className="text-info">Enter Your First Name:</label><br />
                                <input type="text" name="FName" id="FName" value={FName} onChange={(e)=> setFName(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="LName" className="text-info">Enter Your Last Name:</label><br />
                                <input type="text" name="LName" id="LName" value={LName} onChange={(e)=> setLName(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="text-info">Enter Your Email:</label><br />
                                <input type="text" name="email" id="email" value={Email} onChange={(e)=> setEmail(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1" className="text-info">Enter A Password:</label><br/>
                                <input type="password" name="password1" id="password1" value={Password1} onChange={(e)=> setPassword1(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2" className="text-info">Enter The Password Again:</label><br/>
                                <input type="password" name="password2" id="password2" value={Password2} onChange={(e)=> setPassword2(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="button" onClick={handleRegister} name="submit" className="btn btn-info btn-md btn-lg btn-block" value="submit" />
                            </div>
                            <div id="register-link" className="text-right">
                                <span>Already Have An Account ? </span> <span  onClick={()=> history.push("/login")} className="text-info hoverText" > Login here</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register
