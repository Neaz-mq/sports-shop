
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useItem = () => {
    const axiosPublic = useAxiosPublic();
    // const [item, setItem] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect( () => {
    //     fetch ('https://sports-shop-server.vercel.app/item')
    //     .then(res => res.json())
    //     .then(data => {
    //         setItem(data)
    //          setLoading(false);
    //     });
    // }, [])

    const {data: item = [], isPending: loading, refetch} = useQuery({
        queryKey: ['item'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/item');
            return res.data;
        }
    })


    return [item, loading, refetch]
}

export default useItem;