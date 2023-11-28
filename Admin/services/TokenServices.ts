import publicAxiosClient from "@/configs/publicAxiosClient";
export default class TokenServices {
  static async updateRefreshToken() {
    try {
      const response = await publicAxiosClient.get(`Account/Refresh`);
      const { accessToken, refreshToken } = response.data;
      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      } else throw new Error("accessToken is null");
    } catch (e) {
      throw new Error("Refresh Token is expired");
    }
  }
}
