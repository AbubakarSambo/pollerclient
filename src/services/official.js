import request from "../utils/request";
import { endpoint } from "../utils/config";

export function query() {
  return request('/api/users');
}

export async function getOfficials() {
  const url = `${endpoint}/official`;
  return request({
    url,
  });
}