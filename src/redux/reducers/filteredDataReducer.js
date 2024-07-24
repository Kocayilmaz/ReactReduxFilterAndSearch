const FILTERED_DATA = "DEMO/FILTERED_DATA";

export function filteredDataAction(data) {
  return {
    type: "FILTERED_DATA",
    payload: {
      filteredData: data,
    },
  };
}

export function filteredDataReducer(state = [], { type, payload }) {
  switch (type) {
    case FILTERED_DATA:
      return payload.filteredData;
    default:
      return state;
  }
}
