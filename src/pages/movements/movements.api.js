import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsById = id => 
    Axios.get(url, { params: { accountId: id } }).then(response => {
        return response.data;
    });