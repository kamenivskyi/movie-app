// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const cutString = (string, cutFrom, cutTo) => {
  return string.length > cutTo
    ? string.substring(cutFrom, cutTo) + ".."
    : string;
};

// creating item object for deleting from bookmarks
export const createUniqueItem = (data, type) => {
  const { id, poster_path, title, name, vote_average } = data;
  const standardObj = { id, poster_path, vote_average, type };

  return type === "tv" ? { ...standardObj, name } : { ...standardObj, title };
};

export const getYears = () => {
  const yearsArr = [];
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i >= 1990; i--) {
    yearsArr.push(i);
  }
  return yearsArr;
};
