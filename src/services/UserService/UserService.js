import Axios from '../../helpers/appConfig'

const UpdateUserService = (data) => {
    let id = data._id;
    const body = JSON.stringify(data);
    return Axios.patch('users/' + id, body);
}

const UserUpdateService = (data) => {
    let id = data._id;
    const body = JSON.stringify(data);
    return Axios.put('users/' + id, body);
}

const getByIdUserService = (id) => {
    return Axios.get('users/' + id);
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

const UserPatchService = (id, data) => {
    const body = JSON.stringify(data);
    return Axios.patch('users/' + id, body);
}

const UserReviewService = (data) => {
    const body = JSON.stringify(data);
    return Axios.post('formdatas', body);
}

export { UpdateUserService, UserListService, UserUpdateService, getByIdUserService, UserPatchService, UserReviewService };