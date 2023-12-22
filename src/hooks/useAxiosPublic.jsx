import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://task-manager-server-tawny.vercel.app'
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;