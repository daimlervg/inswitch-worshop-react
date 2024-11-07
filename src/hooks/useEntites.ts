import { useEffect, useState } from "react";
import { fetchEntities } from "../services/api";

export default function useEntities(filters: any){

    const [entities, setEntities]: any = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
   
    useEffect(() => {
        const getEntities = async (filters: any) => {
            setLoading(true);
            try {
                const response = await fetchEntities(filters);
                setEntities(response.data.entities);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        
        getEntities(filters);
    }, [filters]);
    
    return {
        entities,
        loading,
        error
    };
}