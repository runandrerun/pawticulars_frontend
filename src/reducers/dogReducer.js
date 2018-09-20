const initialState = {
  dogs: [],
  selectedDog: {},
}

const dogReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_DOGS':
    return {
      ...state,
      dogs: action.payload.dogs
    }

    case 'SELECT_DOG':
    return {
      ...state,
      selectedDog: action.payload.dog
    }
    default:
    return state
  }
}

export default dogReducer
