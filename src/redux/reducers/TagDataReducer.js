const TAG_DATA = "DEMO/TAG_DATA";

export function tagDataAction(data, tag = null) {
  return {
    type: TAG_DATA,
    payload: {
      tagData: data,
      tag: tag,
    },
  };
}

export function tagDataReducer(state = [], action) {
  switch (action.type) {
    case TAG_DATA:
      return action.payload.tagData.filter((item) =>
        item.tags.includes(action.payload.tag)
      );
    default:
      return state;
  }
}
