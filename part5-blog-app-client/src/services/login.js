import axios from '../utils/apiClient';
const baseUrl = '/api/login'

const login = async credentials => {
    console.log('credentials', credentials)
    const response = await axios.post(baseUrl, credentials)
    return response
}

export default { login }