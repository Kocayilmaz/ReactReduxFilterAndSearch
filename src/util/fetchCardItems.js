import axios from "axios";

export const fetchCardItems = () => {
    return axios({
        method: 'GET',
        url: 'https://run.mocky.io/v3/ff29a22f-6ec2-497b-ba2c-edb01e898200'
    })
};
