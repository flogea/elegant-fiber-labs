import React from 'react'
import '../styles/AuthPage.scss'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import axios from 'axios'

function AuthPage() {
    const [form, setForm] = React.useState({
        email: '',
        password: ''
    })

    // React.useEffect((key) => {
    //     if (localStorage.data_inputs) {
    //         let obj = JSON.parse(localStorage.data_inputs);
    //         for (key in obj) {
    //             document.querySelector(`input[name="${key}"]`).value = obj[key];
    //             setForm({...form, [key]:obj[key]})
    //         }
    //     }
    // }, [])

    const onChangeHandler = (event) => {
        setForm({...form, [event.target.name]:event.target.value})
        //localStorage.setItem('data_inputs', JSON.stringify(form))
    }

    const regHandler = async () => {
        try {
            await axios.post('/api/auth/reg', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => console.log(res))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="auth-page">
                <React.Fragment>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={
                            <div>
                                <h2>Authorization</h2>
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                className="validate"
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                type="password" 
                                                name="password" 
                                                className="validate"
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                type="password" 
                                                name="securecode" 
                                                className="validate"
                                            />
                                            <label htmlFor="securecode">2FA code</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn btn blue">Log in</button>
                                        <Link to="/reg" className="btn-outline btn-reg">Haven't an account?</Link>
                                    </div>
                                </form>
                            </div>}/>

                            <Route path="/reg" element={
                            <div>
                                <h2>Registration</h2>
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                className="validate"
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                type="password" 
                                                name="password" 
                                                className="validate"
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                type="file" 
                                                name="file" 
                                                className="validate"
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="password">Photo</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button 
                                            className="wawes-effect wawes-light btn btn blue"
                                            onClick={regHandler}
                                        >
                                            Sign up
                                        </button>
                                        <Link to="/login" className="btn-outline btn-reg">Have an account? </Link>
                                    </div>
                                </form>
                            </div>}/>
                        </Routes>
                    </BrowserRouter>
                </React.Fragment>
            </div>
        </div>
    )
}

export default AuthPage