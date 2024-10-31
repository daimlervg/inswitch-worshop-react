import { axiosInstance, getAccessToken } from "../utils/genericOps";

export const fetchEntities = async () => {
    const token = await getAccessToken();
    const response = await axiosInstance.get(
        `${import.meta.env.VITE_PUBLIC_API_ENTITIES}`,
        {
            headers: {
            "X-User-Bearer": `Bearer ${token}`,
            },
        }
    );
    return await response;
};

export const addEntity = async (entity : any) => {
    const token = await getAccessToken();
    const response = await axiosInstance.post(
        `${import.meta.env.VITE_PUBLIC_API_ENTITIES}`,
        {
            body: JSON.stringify(entity),
            headers: {
            "X-User-Bearer": `Bearer ${token}`,
            },
        }
    );
    return await response;
};