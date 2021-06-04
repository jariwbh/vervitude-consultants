import Axios from '../../helpers/appConfig'

function NotificationService(id) {
    let body =
    {
        "search": [{ "searchfield": "receivers", "searchvalue": "608153f71f13f33070e41a48", "datatype": "ObjectId", "criteria": "eq" },
        { "searchfield": "type", "searchvalue": "PUSHALERT", "datatype": "text", "criteria": "eq" },
        { 'searchfield': 'status', 'searchvalue': 'active', 'criteria': 'eq', 'datatype': 'text' }]
    }
    return Axios.post('communicationlogs/filter', body);
}

function getByIdNotificationDeleteService(id) {
    return Axios.delete('communicationlogs/' + id);
}

function deleteAllNotificationService(data) {
    let body = {
        "schemaname": "communicationlogs",
        "fieldname": "status",
        "fieldvalue": "deleted",
        "ids": data
    }
    return Axios.post('common/massupdate', body);
}

export { NotificationService, getByIdNotificationDeleteService, deleteAllNotificationService };