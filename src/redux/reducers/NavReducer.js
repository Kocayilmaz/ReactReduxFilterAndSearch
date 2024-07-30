export const TOGGLE_COMMUNICATION = "TOGGLE_COMMUNICATION";
export const TOGGLE_PROFILE = "TOGGLE_PROFILE";

export const toggleCommunicationAction = () => ({
  type: TOGGLE_COMMUNICATION,
});

export const toggleProfileAction = () => ({
  type: TOGGLE_PROFILE,
});

const initialState = {
  communicationOpen: false,
  profileOpen: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMMUNICATION:
      return { ...state, communicationOpen: !state.communicationOpen };
    case TOGGLE_PROFILE:
      return { ...state, profileOpen: !state.profileOpen };
    default:
      return state;
  }
};

export default navReducer;
