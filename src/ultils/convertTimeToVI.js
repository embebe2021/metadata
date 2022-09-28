function convertTimeToVI(timeString) {
  if (timeString && timeString.length > 0) {
    const newTime = new Date(timeString);
    const options = { dateStyle: "full" };
    const result = new Intl.DateTimeFormat("vi-VI", options).format(newTime);
    return result;
  } else return null;
}

export default convertTimeToVI;
