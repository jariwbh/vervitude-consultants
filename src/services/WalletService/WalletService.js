import Axios from '../../helpers/appConfig'

function WalletDetailService(id) {
    let body =
    {
        "search": [
            {
                "searchfield": "_id",
                "searchvalue": id,
                "criteria": "eq",
                "datatype": "objectId"
            }
        ],
        "sort": { "createdAt": 1 },
        "formname": "consultantwalletaccount"
    }
    return Axios.post('users/filter/wallet/view', body);
}

const WalletHistory = (id) => {
    let body = {
        'search': [{
            'searchfield': 'formid',
            'searchvalue': '60b78be599e17f765884f532',
            'criteria': 'eq',
            'datatype': 'objectid'
        },
        {
            'searchfield': 'contextid',
            'searchvalue': `${id}`,
            'criteria': 'eq',
            'datatype': 'objectid'
        }
        ], "formname": "settlement"
    }
    body = JSON.stringify(body);
    return Axios.post('formdatas/filter', body);
}

export { WalletDetailService, WalletHistory };