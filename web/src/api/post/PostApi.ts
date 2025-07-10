import apiClient from "service/AxiosController";

const BASE_URL = "/post"; // relative to apiClient baseURL

class PostApi {
  static async getAll() {
    return apiClient.get(BASE_URL);
  }

  static async create(post: any) {
    return apiClient.post(BASE_URL, post);
  }

  static async delete(id: any) {
    return apiClient.delete(`${BASE_URL}/${id}`);
  }
}

export default PostApi;
