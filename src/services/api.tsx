import { axiosInstance, getAccessToken } from "../utils/genericOps";

export const fetchEntities = async (filters : any) => {
    const token = await getAccessToken();
    let url = `${import.meta.env.VITE_PUBLIC_API_ENTITIES}?`;   

    if (filters?.status) {    
        console.log(filters.status);
        url += `&status=${filters.status}`
    }

    const response = await axiosInstance.get(
        url,
        {
            headers: {
                'Content-Type': 'application/json',
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
        JSON.stringify(entity),
        {
            headers: {
            'Content-Type': 'application/json',
            "X-User-Bearer": `Bearer ${token}`,
            },
        }
    ).then(function(response){
        alert("Entity created with Id:" + response.data.entityId);
    });    
   
    return await response;
};

export const editEntity = async (id: number,entity : any) => {
    const token = await getAccessToken();
    const response = await axiosInstance.put(
        `${import.meta.env.VITE_PUBLIC_API_ENTITIES}/${id}`,
        JSON.stringify(entity),
        {
             headers: {
            'Content-Type': 'application/json',
            "X-User-Bearer": `Bearer ${token}`,
            },
        }
    ).then(function(response){
        console.log(response);
        alert("Entidad actualizada satisfactoriamente");
    });    
   
    return await response;
};

export const getEntityById = async (id: number) => {
    const token = await getAccessToken();
    const response = await axiosInstance.get(
        `${import.meta.env.VITE_PUBLIC_API_ENTITIES}/${id}`,
        {
            headers: {
            "X-User-Bearer": `Bearer ${token}`,
            },
        }
    );    
   
    return await response;
};

export const deleteEntity = async (id: number) => {
    const token = await getAccessToken();
    const response = await axiosInstance.delete(
        `${import.meta.env.VITE_PUBLIC_API_ENTITIES}/${id}`,
        {
            headers: {
            "X-User-Bearer": `Bearer ${token}`,
            },
        }
    );    
   
    return await response;
};

// export const fetchEntities = async (filters: any) => {
    
//     console.log(filters);
    
//     const token = await getAccessToken();
//     const headers: any = {"X-User-Bearer": `Bearer ${token}`};

//     if (filters?.id) {
//         headers['Entity-Id'] = filters.id;
//     }

//     if (filters?.status) {
//         headers['Entity-Status'] = filters.status;
//     }

//     console.log(headers);

//     const response = await axiosInstance.get(
//         `${import.meta.env.VITE_PUBLIC_API_ENTITIES}`,
//         {
//             headers: headers
//         }
//     );
//     return await response;
// };