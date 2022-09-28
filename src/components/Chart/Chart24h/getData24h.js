function getData24h(dataFromSocket = {}) {
  // const dataFromSocket = {
  //   DuAn: [
  //     {
  //       thongTinDuAn: {
  //         tenDuAn: "du an so 02",
  //         vanBanPhapLyLienQuan: "oiasjfioasjf",
  //       },
  //       _id: "6310963067a7802b20c5aac8",
  //       thongTinDonViThucHien: [],
  //       thongTinDuLieu: [],
  //       thoiGianNop: "2011-01-10T17:00:00.000Z",
  //       cacVanBanPhapLyGiaoNop: [],
  //       createdAt: "2022-09-01T11:23:28.932Z",
  //       updatedAt: "2022-09-01T11:23:28.932Z",
  //       __v: 0,
  //     },
  //     {
  //       thongTinDuAn: {
  //         tenDuAn: "opiuiur8ut89uwe",
  //         vanBanPhapLyLienQuan: "iosjgiosdjgfiodjgiojsdfgij",
  //       },
  //       _id: "631096fe3f13849fc086207f",
  //       thongTinDonViThucHien: [],
  //       thongTinDuLieu: [],
  //       thoiGianNop: "2011-01-10T17:00:00.000Z",
  //       cacVanBanPhapLyGiaoNop: [],
  //       createdAt: "2022-09-01T11:26:54.930Z",
  //       updatedAt: "2022-09-01T11:26:54.930Z",
  //       __v: 0,
  //     },
  //     {
  //       thongTinDuAn: {
  //         tenDuAn: "ádacv9079",
  //         vanBanPhapLyLienQuan: "234234",
  //       },
  //       _id: "631098a6615bc53b725cc204",
  //       thongTinDonViThucHien: [],
  //       thongTinDuLieu: [],
  //       thoiGianNop: "2011-01-10T17:00:00.000Z",
  //       cacVanBanPhapLyGiaoNop: [],
  //       createdAt: "2022-09-01T11:33:58.990Z",
  //       updatedAt: "2022-09-01T11:33:58.990Z",
  //       __v: 0,
  //     },
  //     {
  //       thongTinDuAn: {
  //         tenDuAn: "fag23 4sdrgsdg",
  //         vanBanPhapLyLienQuan: "dghdfhgfgh",
  //       },
  //       _id: "6310993739d49941c09cc897",
  //       thongTinDonViThucHien: [],
  //       thongTinDuLieu: [],
  //       thoiGianNop: "2011-01-10T17:00:00.000Z",
  //       cacVanBanPhapLyGiaoNop: [],
  //       createdAt: "2022-09-01T11:36:23.869Z",
  //       updatedAt: "2022-09-01T11:36:23.869Z",
  //       __v: 0,
  //     },
  //     {
  //       thongTinDuAn: {
  //         tenDuAn: "fdgsgsdpogsdopgjodg",
  //         vanBanPhapLyLienQuan: "pojksdpogjsdopjgopsjdgopjsdgo",
  //       },
  //       _id: "6310994a39d49941c09cc8a4",
  //       thongTinDonViThucHien: [],
  //       thongTinDuLieu: [],
  //       thoiGianNop: "2012-01-19T17:00:00.000Z",
  //       cacVanBanPhapLyGiaoNop: [],
  //       createdAt: "2022-09-01T11:36:42.953Z",
  //       updatedAt: "2022-09-01T11:36:42.953Z",
  //       __v: 0,
  //     },
  //   ],
  // };
  // const neededData = [
  //   {
  //     name: "",
  //     data: [400, 470, 800, 1380],
  //   },
  // ];
  let lastResult;
  if (Object.keys(dataFromSocket).length > 0) {
    const keyNames = ["DuAn", "DonVi", "VanBanPhapLy", "DuLieu"];
    lastResult = keyNames.reduce(
      (lastReturnValue, currentItem) => {
        let number = 0;
        dataFromSocket[currentItem]
          ? (number = dataFromSocket[currentItem].length)
          : number;
        return [
          {
            ...lastReturnValue[0],
            data: [...lastReturnValue[0].data, number],
          },
        ];
      },
      [{ name: "Tổng cộng", data: [] }]
    );
  } else {
    lastResult = [
      {
        name: "Tổng cộng",
        data: [],
      },
    ];
  }

  return lastResult;
}

export default getData24h;
