import React, { useState } from 'react';

import imgHealthy from '../../assets/healthy.svg'

import { setSession } from '../../session';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hadleSubmit = (event) => {
        event.preventDefault();

        setSession(email);
        window.location = '/';
    }

    return <>
        <div className="row" style={{ height: '100%' }}>
            <div className="col s6" style={{ height: '100%' }}>
                <img src={imgHealthy} alt="<a href='https://stories.freepik.com/people'>Illustration by Freepik Stories</a>" />
            </div>
            <div className="col s6" style={{ height: '100%', padding: 0 }}>
                <div className="card valign-wrapper green accent-3" style={{ height: '100%', marginTop: 0 }}>
                    <div className="card-content" style={{ margin: "auto" }}>
                        <h2 className="grey-text text-lighten-5">Healthy App</h2>
                        <form className="row" onSubmit={hadleSubmit}>
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate grey-text text-lighten-5" onChange={(event) => setEmail(event.target.value)} value={email.value} />
                                <label for="email" className="grey-text text-lighten-5">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate grey-text text-lighten-5" onChange={(event) => setPassword(event.target.value)} value={password.value} />
                                <label for="password" className="grey-text text-lighten-5">Password</label>
                            </div>
                            <button type="submit" className="waves-effect waves-light btn right green-text text-accent-4 grey lighten-5">button</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}