import axiosClient from '../axiosClient';

const productApi = {
  getAll: (params) => {
    const url = 'phones';
    return axiosClient.get(url, params);
  },

  getOne: (params) => {
    const url = `phone/${params}`;
    return axiosClient.get(url);
  },

  searchByName: (params) => {
    const url = 'phone-search';
    return axiosClient.get(url, { params });
  },

  delete: (params) => {
    const url = `phones/${params}`;
    return axiosClient.delete(url);
  },

  create: (data) => {
    const url = 'phones';
    return axiosClient.post(url, data);
  },

  updatedProduct: (params, data) => {
    const url = `phones/update/${params}`;
    return axiosClient.put(url, data);
  },
};

export default productApi;
