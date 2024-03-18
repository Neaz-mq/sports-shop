import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://sports-shop-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;