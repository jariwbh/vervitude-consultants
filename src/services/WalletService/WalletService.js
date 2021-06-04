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

export { WalletDetailService };