import React, { useState } from 'react'

function UseStateGetData() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        pswrepeat:""

    });
    const handleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value
        // console.log("Name is : ", name + " Value is : ", value)
        setFormData((previous)=>{
            return {...previous, [name]: value};

        })

    }
    return (<>
        <h1>Get Data From User Input</h1>
<div className='container'>
        <form>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                    <label for="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required
                    value={formData.email}
                    onChange={handleInput}
                    
                    />

                    <label for="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" required
                    value={formData.password}
                    onChange={handleInput}
                    />

                    <label for="psw-repeat">
                        <b>Repeat Password</b>
                    </label>
                    <input type="password" placeholder="Repeat Password" name="pswrepeat" id="pswrepeat" required
                    value={formData.pswrepeat}
                    onChange={handleInput}
                    />
                    <hr />
                        <p>By creating an account you agree to our
                            <a href="#">Terms & Privacy</a>.</p>

                        <button type="submit" class="registerbtn">Register</button>
                    

                    <div class="container signin">
                        <p>Already have an account?
                            <a href="#">Sign in</a>.</p>
                    </div>
                </form>
                </div>
                <div>
                    <p>{`My Email id is ${formData.email}`}</p>
                </div>

            </>
            )
            }
            
            export default UseStateGetData;
