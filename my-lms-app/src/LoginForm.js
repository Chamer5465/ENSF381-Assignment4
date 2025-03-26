import React from 'react';

function LoginForm() {
    return (
        <div>
            <form>
                <label for='username'>Username:</label>
                <input type='text' id='username' required></input>
                <label for='password'>Password:</label>
                <input type='text' id='password' required></input>
                <button type='submit'>Submit</button>
                <a href=''>Forgot Password:</a>
            </form>
        </div>
    );
}

export default LoginForm;