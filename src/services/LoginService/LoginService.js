import Axios from '../../helpers/appConfig'

function LoginService(data) {
    const body = JSON.stringify(data)
    return Axios.post('auth/login', body);
}

export default LoginService;