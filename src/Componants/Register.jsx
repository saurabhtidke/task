import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Grid, Alert } from "@mui/material";
export const Register = () => {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [country, setCountry] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [referral, setReferral] = useState("")
    const [password, setPassword] = useState("")
    const [txtSuccess, setTxtSuccess] = useState("");
    const [isValid, setIsValid] = useState(false);

    // Send data to api with help of axios

    const handleSubmit = async () => {
        const url = "https://react-tasks-nodejs-api.herokuapp.com/user/register";
        const payload = {
            fullname,
            username,
            country,
            email,
            mobile,
            referral,
            password
        };
        const result = await axios.post(url, payload);
        setTxtSuccess(result.data);
    };

    // Validation condition 

    useEffect(() => {
        setIsValid(
            fullname.length >= 5 &&
            username.length >= 3 &&
            country.length >= 4 &&
            email.length >= 15 &&
            mobile.length >= 10 &&
            referral.length >= 4 &&
            password.length >= 6

        );
    }, [fullname, username, country, email, mobile, referral, password]);
    return (
        <div className='login'>

            {/* Success message aleart */}

            <Grid item xs={6}>
                {txtSuccess !== "" && (
                    <Alert severity="success">{txtSuccess}</Alert>
                )}
            </Grid>
            <h1 className='main'>Register</h1>
            <p className='sub'>Create your company account.</p>
            <div className='login2'>

                {/* Registration input fields  */}

                <input className='pas' required type="text" placeholder='Full Name*' value={fullname} onChange={(e) => setFullname(e.target.value)} /><br />
                <input className='pas' required type="text" placeholder='User Name*' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <input className='pas' required type="text" placeholder='Select Country*' value={country} onChange={(e) => setCountry(e.target.value)} /><br />
                <input className='pas' required type="number" placeholder='Mobile Number*' value={mobile} onChange={(e) => setMobile(e.target.value)} /><br />
                <input className='pas' required type="email" placeholder='E-mail ID*' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input className='pas' required type="password" placeholder='Password*' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input className='pas' required type="number" placeholder='Referral ID*' value={referral} onChange={(e) => setReferral(e.target.value)} /><br />

                {/* Button disabled when condition is false */}

                <button className='but' variant="contained" disabled={!isValid}
                    onClick={handleSubmit}>Register</button>
            </div>

        </div >
    )
}
