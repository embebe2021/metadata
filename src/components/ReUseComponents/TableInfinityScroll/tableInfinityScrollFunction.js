function getItemPerPage(element, rowHeight) {
  const clientHeight = element.clientHeight;
  const itemPerPage = clientHeight / rowHeight;
  const itemPlus = Math.floor(itemPerPage / 4 + itemPerPage);
  return itemPlus;
}
function getTotalPage(data, itemPerPage) {
  return Math.ceil(data.length / itemPerPage);
}
function dataByCurrentPage(data, currentPage, itemPerPage) {
  const firstIndex = (currentPage - 1) * itemPerPage;
  const lastIndex = firstIndex + itemPerPage;
  if (lastIndex > data.length) {
    return data.slice(firstIndex, data.length);
  }
  return data.slice(firstIndex, lastIndex);
}
export { getItemPerPage, getTotalPage, dataByCurrentPage };
