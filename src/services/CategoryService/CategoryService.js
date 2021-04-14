import Axios from '../../helpers/appConfig'

const CategoryService = () => {
    const body =
    {
        'search': [{
            'searchfield': 'status',
            'searchvalue': 'active',
            'criteria': 'eq',
            'datatype': 'text'
        }, {
            'searchfield': 'formid',
            'searchvalue': '607410dfdc539111b09d6a8f',
            'criteria': 'eq',
            'datatype': 'objectId'
        }], 'sort': { 'createdAt': 1 }
    }
    return Axios.post('formdatas/filter', body)
}

export default CategoryService;