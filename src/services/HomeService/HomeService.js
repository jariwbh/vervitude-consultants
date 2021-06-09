import Axios from '../../helpers/appConfig'

const getCategory = () => {
    return Axios.get('lookups/607d5c7bdc539117484cda38');
}

const getDashboard = () => {
    let body = {
        "id": "60c066895c173b555df82226"
    }
    return Axios.post('analyticsreports/process', body);
}

export { getCategory, getDashboard };