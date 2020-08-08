import React, { useState } from 'react';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hadleSubmit = (event) => {
        event.preventDefault();

        window.location = '/healthy';
    }

    return <>
        <div className="container">
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Login</span>
                            <form className="row" onSubmit={hadleSubmit}>
                                <div class="input-field col s12">
                                    <input placeholder="Email" id="email" type="email" class="validate" onChange={(event) => setEmail(event.target.value)} value={email.value}/>
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col s12">
                                    <input placeholder="Password" id="password" type="password" class="validate" onChange={(event) => setPassword(event.target.value)} value={password.value} />
                                    <label for="password">Password</label>
                                </div>
                                <button type="submit" class="waves-effect waves-light btn right">button</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}