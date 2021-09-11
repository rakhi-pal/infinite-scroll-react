import { useState, useEffect } from "react";
import axios from 'axios';


export default function useFetchData(count, start) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {axios({
            method: 'GET',
            url: `https://randomuser.me/api/?results=${count}&start=${start}`,

        }).then(response => {
            setData(previousData => {
                return [...previousData, ...response.data.results.map(user => user)];
            });
            setLoading(false);
        }).catch(e => {
            setError(true);
        });}, 1000);

    }, [start, count])
    
    return {loading, error, data, hasMore};
}