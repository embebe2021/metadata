import React from "react";
import itemStyle from "./ResultsItem.module.css";
import convertTimeToVI from "../../../ultils/convertTimeToVI";
import decorationString from "../../../ultils/decorationString";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

const ClassifyResultsItem = (Component) => {
  const NewResultsItem = ({ type, item, index, keywords }) => {
    let showInfo = React.useMemo(() => {
      let result;
      switch (type) {
        case "duAn": {
          result = {
            firstLine: {
              title: "Thời gian nộp: ",
              value: convertTimeToVI(item?.thoiGianNop) || "",
            },
            mainLine: {
              title: "Tên dự án: ",
              value:
                decorationString(
                  keywords,
                  item?.thongTinDuAn?.tenDuAn,
                  itemStyle.keywordValueRed
                ) || "",
            },
            lastLine: {
              title: "Ngày cập nhật gần nhất: ",
              value: convertTimeToVI(item?.updatedAt) || "",
            },
            iconClass: `fa-solid fa-flag-checkered ${itemStyle.nameIcon} ${itemStyle.keywordValueRed}`,
          };
          break;
        }
        case "donVi": {
          result = {
            firstLine: {
              title: "Địa chỉ: ",
              value: item?.diaChi || "",
            },
            mainLine: {
              title: "Tên đơn vị: ",
              value:
                decorationString(
                  keywords,
                  item?.tenDonVi,
                  itemStyle.keywordValueBlue
                ) || "",
            },
            lastLine: {
              title: "Ngày cập nhật gần nhất: ",
              value: convertTimeToVI(item?.updatedAt) || "",
            },
            iconClass: `fa-solid fa-house-flag ${itemStyle.nameIcon} ${itemStyle.keywordValueBlue}`,
          };
          break;
        }
        case "duLieu": {
          result = {
            firstLine: {
              title: "Ngày phát hành: ",
              value: convertTimeToVI(item?.ngayPhatHanh) || "",
            },
            mainLine: {
              title: "Nhan đề: ",
              value:
                decorationString(
                  keywords,
                  item?.nhanDe,
                  itemStyle.keywordValueYellow
                ) || "",
            },
            lastLine: {
              title: "Ngày cập nhật gần nhất: ",
              value: convertTimeToVI(item?.updatedAt) || "",
            },
            iconClass: `fa-regular fa-folder-closed ${itemStyle.nameIcon} ${itemStyle.keywordValueYellow}`,
          };
          break;
        }
        case "vanBanPhapLy": {
          result = {
            firstLine: {
              title: "Ký hiệu văn bản: ",
              value: item?.kyHieu || "",
            },
            mainLine: {
              title: "Tên văn bản: ",
              value:
                decorationString(
                  keywords,
                  item?.tenVanBanPhapLy,
                  itemStyle.keywordValueGreen
                ) || "",
            },
            lastLine: {
              title: "Ngày cập nhật gần nhất: ",
              value: convertTimeToVI(item?.updatedAt) || "",
            },
            iconClass: `fa-regular fa-file-word ${itemStyle.nameIcon} ${itemStyle.keywordValueGreen}`,
          };
          break;
        }
      }
      return result;
    }, [type]);

    return (
      <Component
        showInfo={showInfo}
        navigateInfo={{ type, id: item._id, index }}
      />
    );
  };
  return NewResultsItem;
};
const ResultsItem = ({ showInfo, navigateInfo }) => {
  const navigate = useNavigate();

  const handleClick = (e, id, index) => {
    e.preventDefault();
    navigate(`${navigateInfo.type}/${id}/${index}`);
  };

  return (
    <>
      <a
        href={`search/${navigateInfo.type}/${navigateInfo.id}/${navigateInfo.index}`}
        className={itemStyle.searchResultItem}
        // key={navigateInfo.id}
        onClick={(e) => handleClick(e, navigateInfo.id, navigateInfo.index)}
      >
        <div className={itemStyle.itemTop}>
          <p className={itemStyle.createDate}>
            <span className={itemStyle.createDateTitle}>
              {showInfo.firstLine.title}
            </span>
            <span className={itemStyle.createDateValue}>
              {showInfo.firstLine.value}
            </span>
          </p>
          <p className={itemStyle.name}>
            <i className={showInfo.iconClass}></i>
            <span className={itemStyle.nameValue}>
              {showInfo.mainLine.value}
            </span>
          </p>
        </div>
        <div className={itemStyle.itemBot}>
          <p className={itemStyle.updateDate}>
            <span className={itemStyle.updateDateTitle}>
              {showInfo.lastLine.title}
            </span>
            <span className={itemStyle.updateDateValue}>
              {showInfo.lastLine.value}
            </span>
          </p>
        </div>
      </a>
    </>
  );
};

export default ClassifyResultsItem(ResultsItem);
