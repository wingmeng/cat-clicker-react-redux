export const SET_CAT_INDEX = 'SET_CAT_INDEX';
export const UPDATE_CLICKS = 'UPDATE_CLICKS';
export const UPDATE_CAT = 'UPDATE_CAT';

export const setCatIndex = (idx) => ({
  type: SET_CAT_INDEX,
  catIndex: idx
});

export const updateClicks = (cat) => ({
  type: UPDATE_CLICKS,
  curCat: cat
});

export const updateCat = (data) => ({
  type: UPDATE_CAT,
  data
});