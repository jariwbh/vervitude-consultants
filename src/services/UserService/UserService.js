import Axios from '../../helpers/appConfig'

const UserService = (data) => {
    let id = data._id;
    const body = JSON.stringify(data);
    return Axios.patch('users/' + id, body);
}

export default UserService;