import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricData(id, currency = 'usd', interval = 'daily', days = 7) {
    const perPage = 20;
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}
