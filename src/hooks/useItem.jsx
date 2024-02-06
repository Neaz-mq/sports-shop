import { useEffect, useState } from "react";

const useItem = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        fetch ('item.json')
        .then(res => res.json())
        .then(data => {
            setItem(data)
             setLoading(false);
        });
    }, [])

    return [item, loading]
}

export default useItem;