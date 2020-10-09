import produce from "immer";
import topicConstants from "./topicConstants";

const initialState = {
  // Keep your initial state object for topic here
  alltopicbysubjectId: {},
  topiclist: [],
  topicDetail: {},
};

export const topicReducer = produce((state, action) => {
  // Don't return anything from here
  // Just make changes in the state object and add a break in the end for each case.
  // Immer's produce will automatically return the state object.
  // Refer to https://immerjs.github.io/immer/docs/introduction for more information

  switch (action.type) {
    case topicConstants.GETALLTOPICS:
      state.topiclist = action.data;
      break;

    case topicConstants.GETALLTOPICBYSUBJECTID:
      state.alltopicbysubjectId = action.data;
      break;

    case topicConstants.GETALLTOPICBYTOPICID:
      state.topicDetail = action.data;
      break;

    default: // Adding default due to es-lint
  }
}, initialState);
