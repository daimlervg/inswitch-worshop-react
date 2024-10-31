import { useEffect, useState } from "react";
import { fetchEntities,addEntity } from "../services/api";

export default function useEntities(){
    const [entities, setEntities]: any = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const getEntities = async () => {
            setLoading(true);
            try {
                const response = await fetchEntities();
                setEntities(response.data.entities);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        
        getEntities();
    }, []);

    const createEntity = async (entity: any) => {
        const newEntity = await addEntity(entity);
        setEntities([...entities, newEntity]);
    };

    return {
        entities,
        loading,
        error,
        createEntity
    };

}