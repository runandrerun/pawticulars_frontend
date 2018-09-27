const initialState = {
  dogParks: [],
  selectedDogPark: {},
}

const dogParkReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_DOG_PARKS':
    return {
      ...state,
      dogParks: action.payload.dogParks
    }

    case 'SELECT_DOG_PARK':
    return {
      ...state,
      selectedDogPark: action.payload.dogPark
    }
    default:
    return state
  }
}

export default dogParkReducer
