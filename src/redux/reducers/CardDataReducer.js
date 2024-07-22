const CARD_DATA = "DEMO/CARD_DATA";

export function cardDataAction(data) {
  return {
    type: CARD_DATA,
    payload: {
      cardData: data,
    },
  };
}

export function cardDataReducer(state, { type, payload }) {
  switch (type) {
    case CARD_DATA:
      return payload.cardData;
    default:
      return state;
  }
}
