import axios from "axios";

export const fetchCardItems = () => {
    return axios({
        method: 'GET',
        url: 'https://run.mocky.io/v3/ce254807-958e-4d02-bb37-e770317f5b01'
    })
};
