import axios from 'axios';

import config from '../config';

const baseURL = new URL(config.BASE_URL);

function sendRequest(url, opt) {
  const client = axios({
    method: opt.method,
    baseURL: baseURL.origin,
    url: url,
    responseType: opt.responseType,
    timeout: opt.timeout,
    params: opt.params,
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  })
  return client
}

export async function fetchJson(request, opt) {
  try {
    const response = await sendRequest(request, {...opt, method: 'GET', responseType: 'json', timeout: 60000});
    return response.data;
  } catch (err) {
    console.log('Error loading data (json)', err);
  }
}

export async function fetchCsv(request, opt) {
  try {
    const response = await sendRequest(request, {...opt, method: 'GET', responseType: 'text', timeout: 60000});
    return response.data;
  } catch (err) {
    console.log('Error loading data (text)', err);
  }
}

export async function fetchBlob(request, opt) {
  try {
    const response = await sendRequest(request, {...opt, method: 'GET', responseType: 'blob', timeout: 60000});
    return response.data;
  } catch (err) {
    console.log('Error loading data (blob)', err);
  }
}

export default {
  fetchJson,
  fetchCsv,
  fetchBlob,
};
