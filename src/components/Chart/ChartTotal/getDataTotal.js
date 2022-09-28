function getDataTotal(dataFromSocket = {}) {
  // const dataFromSocket = {
  //   DuAnTotal: 67,
  //   DonViTotal: 12,
  //   VanBanPhapLyTotal: 117,
  //   DuLieuTotal: 84,
  // };
  if (Object.keys(dataFromSocket).length > 0) {
    const { DuAnTotal, DonViTotal, VanBanPhapLyTotal, DuLieuTotal } =
      dataFromSocket;
    return {
      series: [DuAnTotal, DonViTotal, VanBanPhapLyTotal, DuLieuTotal],
      labels: ["Dự án", "Đơn vị", "Văn bản", "Dữ liệu"],
    };
  }
}
export default getDataTotal;
