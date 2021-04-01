const CHANGE_COUNT = 'CHANGE-COUNT';
const DECREASE_COUNT = 'DECREASE-COUNT';
const CHANGE_GO = 'CHANGE-GO';
const CHANGE_LIGHT = 'CHANGE-LIGHT';


const initialState = {
  count: 20,
  go: false,
  idLight: 0,
  arrColors: [{
    id: 0,
    color: 'red',
    time: 10,
    go: false,
  },
  {
    id: 1,
    color: 'yellow',
    time: 3,
    go: false,
  },
  {
    id: 2,
    color: 'green',
    time: 15,
    go: true,
  },
  {
    id: 3,
    color: 'yellow',
    time: 3,
    go: false,
  }],

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNT: {
      // debugger
      return { ...state, count: action.count }
    }

    case CHANGE_LIGHT: {
      return { ...state, idLight: action.id }
    }

    case CHANGE_GO: {
      return { ...state, go: action.bool }
    }

    case DECREASE_COUNT: {
      return { ...state, count: --state.count }
    }

    default:
      return state;
  }
}


export const changeCount = (count) => {
  return { type: CHANGE_COUNT, count }
}

export const changeLight = (id) => {
  return { type: CHANGE_LIGHT, id }
}

export const decreaseCount = () => {
  return { type: DECREASE_COUNT }
}

export const changeGo = (bool) => {
  return { type: CHANGE_GO, bool }
}