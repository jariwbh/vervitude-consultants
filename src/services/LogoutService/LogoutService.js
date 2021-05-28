import Axios from '../../helpers/appConfig'

function LogoutService(data) {
    const body = JSON.stringify(data)
    return Axios.post('auth/logout', body);
}

export default LogoutService;