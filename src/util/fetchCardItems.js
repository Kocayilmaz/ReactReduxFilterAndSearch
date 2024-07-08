import axios from "axios";

export const fetchCardItems = () => {
    return axios({
        method: 'GET',
        url: 'https://demo5053489.mockable.io/items'
    })
};
