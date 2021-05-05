import Axios from '../../helpers/appConfig'

const getCategory = () => {
    return Axios.get('lookups/607d5c7bdc539117484cda38');
}

export { getCategory };