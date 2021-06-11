import Axios from '../../helpers/appConfig';

const recentChatService = (id) => {
    let body = {
        'search': [{
            'searchfield': 'formid',
            'searchvalue': '608a5d7ebbeb5b2b03571f2c',
            'criteria': 'eq',
            'datatype': 'objectid'
        },
        {
            'searchfield': 'property.consultantid',
            'searchvalue': `${id}`,
            'criteria': 'eq',
            'datatype': 'objectid'
        }
        ], "formname": "livechat"
    }
    body = JSON.stringify(body);
    return Axios.post('formdatas/filter', body);
}

export { recentChatService };