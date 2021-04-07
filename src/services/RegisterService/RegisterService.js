import Axios from '../../helpers/appConfig'

function RegisterService(data) {
    const body = JSON.stringify(data)
    return Axios.post('enquiries', body);
}

export default RegisterService;