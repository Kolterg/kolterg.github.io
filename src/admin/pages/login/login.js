import './login.scss';

import { Form, redirect } from 'react-router-dom';
import React from 'react'
import checLoginValid from 'admin/services/chec-login-valid';

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    if (await checLoginValid(updates)) {
        return redirect(`/admin/rooms`);
    } else {
        alert("Login or password is incorrect!")
        return null;
    }
  }

function Login() {
    return (
        <div id='Login'>
            <div>
                <h2>Login</h2>
                <Form method='post'>
                    <label>Login</label>
                    <input type='text' name='login'/>
                    <label>Password</label>
                    <input type='password' name='password'/>
                    <br/>
                    <button type='submit'>Ok</button>
                </Form>
            </div>
        </div>
    )
}

export default Login
