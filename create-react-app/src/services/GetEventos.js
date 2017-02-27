import axios from 'axios';

const GetEventos = {
    list() {
        return axios.get('http://api.nomenalista.net/eventos');
    }
};

export default GetEventos;
