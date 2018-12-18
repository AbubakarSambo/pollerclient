import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getSupervisors() {
  const url = `${endpoint}/supervisor`;
  return request({
    url,
  });
}