import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
    const perPage = 10;
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}
