import Axios from '../../helpers/appConfig'

const UpdateUserService = (data) => {
    let id = data._id;
    const body = JSON.stringify(data);
    return Axios.patch('users/' + id, body);
}

const UserListService = () => {
    const body = {
        'search': [{
            'searchfield': 'status',
            'searchvalue': 'active',
            'criteria': 'eq',
            'datatype': 'text'
        }]
    }
    return Axios.patch('members/' + id, body);
}

export { UpdateUserService, UserListService }