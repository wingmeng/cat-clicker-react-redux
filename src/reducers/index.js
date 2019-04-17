// 初始化的数据
const initialState = {
  cats: [
    {
      name: 'Sweet',
      imgUrl: 'cat_picture1.jpg',
      clicks: 0
    }, {
      name: 'Tough',
      imgUrl: 'cat_picture2.jpeg',
      clicks: 0
    }, {
      name: 'Yummy',
      imgUrl: 'cat_picture3.jpeg',
      clicks: 0
    }, {
      name: 'Ghost',
      imgUrl: 'cat_picture4.jpeg',
      clicks: 0
    }, {
      name: 'Flora',
      imgUrl: 'cat_picture5.jpeg',
      clicks: 0
    }
  ],
  catIndex: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    // 变更猫索引
    case 'SET_CAT_INDEX':
      return {
        ...state,
        catIndex: action.catIndex
      }

    // 更新当前猫的点击数
    case 'UPDATE_CLICKS':
      return {
        ...state,
        cats: state.cats.map(cat => {
          if (action.curCat === cat) {
            cat.clicks++
          }

          return cat
        })
      }

    // 更新当前猫的数据
    case 'UPDATE_CAT':
      return {
        ...state,
        cats: state.cats.map((cat, idx) => idx === state.catIndex ? action.data : cat)
      }

    default:
      return state;
  }
}

export default reducer;
