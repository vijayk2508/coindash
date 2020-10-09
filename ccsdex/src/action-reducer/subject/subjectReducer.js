import produce from "immer";
import subjectConstants from "./subjectConstants";

const initialState = {
  subjectList: [],
  subjectDetails : {}
};

export const subjectReducer = produce((state, action) => {
  switch (action.type) {
    case subjectConstants.GETALL:
      state.subjectList = action.data;
      break;
      case subjectConstants.GETDETAILLBYSUBJECTID:
        state.subjectDetails = action.data;
        break;
    default: // for es-lint :/
  }
}, initialState);
