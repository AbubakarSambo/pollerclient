import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function login(data) {
  const url = `${endpoint}/supervisor/login`;
  return request({
    url,
    method: "post",
    data
  });
}