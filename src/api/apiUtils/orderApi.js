import axiosClient from '../axiosClient';

const contractApi = {
  getAll: (params) => {
    const url = 'contracts-all';
    return axiosClient.get(url, params);
  },
  
  getOne: (params) => {
    const url = `contract/${params}`;
    return axiosClient.get(url);
  },
  upload: (data) => {
    const url = 'contract';
    return axiosClient.post(url, data);
  },
  edit: (data) => {
    const url = 'save-contract';
    return axiosClient.post(url, data);
  },
  delete: (params) => {
    const url = `contract/${params}`;
    return axiosClient.delete(url);
  },
 
  searchByName: (params) => {
    const url = 'contracts-search';
    return axiosClient.get(url, { params });
  },
};
export default contractApi;
