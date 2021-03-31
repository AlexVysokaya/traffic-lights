const CHANGE_COLOR = 'CHANGE-COLOR';
const CHANGE_TIMER = 'CHANGE-TIMER';
const CHANGE_GO = 'CHANGE-GO'

const initialState = {
  color: 'red',
  timer: 0,
  go: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR: {
      return {...state, color: action.color}
    }

    case CHANGE_TIMER: {
      return {...state, timer: action.time}
    }

    case CHANGE_GO: {
      return {...state, go: action.bool}
    }

    default:
      return state;
  }
}

export const changeColor = (color) => {
  return {type: CHANGE_COLOR, color}
}

export const changeTimer = (time) => {
  return {type: CHANGE_TIMER, time}
}

export const changeGo = (bool) => {
  return {type: CHANGE_GO, bool}
}