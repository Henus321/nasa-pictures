export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${year}-${month > 9 ? month : '0' + month}-${
    day > 9 ? day : '0' + day
  }`;
};

export const convertVideoIdString = (pictureOfTheDay: any) => {
  if (!pictureOfTheDay) return;
  return pictureOfTheDay.url
    .split('/')
    .splice(-1)
    .toString()
    .replace('?rel=0', '');
};
