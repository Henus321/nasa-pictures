export const formatDate = (date) => {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${year}-${month > 9 ? month : '0' + month}-${
    day > 9 ? day : '0' + day
  }`;
};

export const getCurrentDate = () => {
  const today = new Date();

  return today;
};

export const incrementDate = (curDate) => {
  const nextDay = curDate;
  nextDay.setDate(nextDay.getDate() + 1);

  return nextDay;
};

export const decrementDate = (curDate) => {
  const prevDay = curDate;
  prevDay.setDate(prevDay.getDate() - 1);

  return prevDay;
};
