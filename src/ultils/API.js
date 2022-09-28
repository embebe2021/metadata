// const HOST = "http://localhost:";
// const PORT = "5000";
const HOST = process.env.REACT_APP_API_HOST;
const PORT = process.env.REACT_APP_API_PORT;
const API = {
  duAn: HOST + PORT + "/duan",
  donVi: HOST + PORT + "/donvi",
  duLieu: HOST + PORT + "/dulieu",
  vanBanPhapLy: HOST + PORT + "/vanbanphaply",
  finish: HOST + PORT + "/finish",
  tongQuan: HOST + PORT + "/tongquan",
  authentication: HOST + PORT + "/authentication",
};
export default API;
