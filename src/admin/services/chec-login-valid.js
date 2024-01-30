export default function checLoginValid(data) {
    const login = 'Login';
    const password = 'password';

    if (data.login === login) {
        console.log('Login is correct!');
        if (data.password === password) {
            console.log('Password is correct');
            return true;
        } else {
            console.log('Password incorrect!');
            return false;
        }
    } else {
        console.log('Login incorrect');
        return false;
    }
}