import request from "../utils/request";
import { endpoint } from "../utils/config";

export function query() {
  return request('/api/users');
}

export async function getPus() {
  const url = `${endpoint}/pu`;
  return request({
    url,
  });
}

export async function getStates() {
  const url = `${endpoint}/states`;
  return request({
    url,
  });
}
export async function getLgas(data) {
  const {state} = data
  const url = `${endpoint}/lgas/${state}`;
  return request({
    url,
  });
}
export async function getWards(data) {
  const {lga} = data
  const url = `${endpoint}/wards/${lga}`;
  return request({
    url,
  });
}

export async function getPuByState(data) {
  const {state, page, limit} = data
  const url = `${endpoint}/pu/${state}?page=${page}&limit=${limit}`;
  return request({
    url,
  });
}
export async function getPuCount(data) {
  const {state} = data
  const url = `${endpoint}/count/pu/${state}`;
  return request({
    url,
  });
}
export async function getPuResults(data) {
  const {state} = data
  const url = `${endpoint}/result/pu/${state}`;
  return request({
    url,
  });
}

export async function getPuByLga(data) {
  const {lga, page, limit} = data
  const url = `${endpoint}/pu/lga/${lga}?page=${page}&limit=${limit}`;
  return request({
    url,
  });
}
export async function getPuByWard(data) {
  let {ward, page, limit} = data
  ward = encodeURIComponent(ward)
  const url = `${endpoint}/pu/ward/${ward}?page=${page}&limit=${limit}`;
  return request({
    url,
  });
}

export async function createPu(data) {
  const url = `${endpoint}/pu/register`;
  return request({
    url,
    data,
    method: "post"
  });
}