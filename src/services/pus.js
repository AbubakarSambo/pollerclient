import request from "../utils/request";
import { endpoint } from "../utils/config";

export function query() {
  return request('/api/users');
}

export async function getPus() {
  const url = `${endpoint}/pu`;
  console.log(url)
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