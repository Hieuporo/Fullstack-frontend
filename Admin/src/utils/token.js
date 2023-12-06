export function getLocalAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}
export function setLocalAccessToken(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}
export function removeLocalAccessToken() {
  localStorage.removeItem("accessToken");
}
