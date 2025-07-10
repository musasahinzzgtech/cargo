import apiClient from "service/AxiosController";

class AuthApi {
  static async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{
    data: {
      name: string;
      email: string;
      token: string;
    };
  }> {
    return apiClient.post("/user/login", {
      email,
      password,
    });
  }

  static async register({
    name,
    surname,
    birthday,
    gender,
    email,
    phoneNumber,
    password,
    userType,
    address,
  }: {
    name: string;
    surname: string;
    birthday: string; // or ISO string
    gender: string;
    email: string;
    phoneNumber: string;
    password: string;
    userType: string;
    address: {
      country: string;
      city: string;
      street?: string;
      state?: string;
      postalCode?: string;
    };
  }): Promise<{
    data: {
      name: string;
      email: string;
      token: string;
    };
  }> {
    return apiClient.post("/user", {
      name,
      surname,
      birthday,
      gender,
      email,
      phoneNumber,
      password,
      userType,
      address,
    });
  }
  static async getUserDetails(): Promise<void> {
    return apiClient.get("/user");
  }
  static async logout(): Promise<void> {
    return apiClient.get("/user/login");
  }
}

export default AuthApi;
