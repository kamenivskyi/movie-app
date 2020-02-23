// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = money => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};

// get type and id then add to bookmarks
export const onGetTypeAndId = (createObj, addToBookmarks) => async e => {
  const id = e.target.getAttribute('data-id');
  const type = e.target.getAttribute('data-type');
  const obj = createObj(id, type);
  await addToBookmarks(obj, type);
};
