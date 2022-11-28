import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WRoygto550EkaX8aYH2pTloxVcl4t-0wlImbjdiM3Mg',
  },
});
