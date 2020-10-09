import sendApiRequest from "../../services/auth";
import apiEndpoints from "../../apiEndpoints";
import topicConstants from "./topicConstants";

export function GetAllTopicBySubjectId(subjectId) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: `${apiEndpoints.GETALLTOPICBYSUBJECTID}${subjectId}`,
      method: "get",
    });
    if (response.status === "success") {
      dispatch({
        type: topicConstants.GETALLTOPICBYSUBJECTID,
        data: response.data.result,
      });
    }
  };
}

export function GetAllTopic() {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: `${apiEndpoints.GETALLTOPICS}`,
      method: "get",
    });
    if (response.status === "success") {
      console.log("res", response);
      dispatch({
        type: topicConstants.GETALLTOPICS,
        data: response.data.result,
      });
    }
  };
}

export function GetTopicByTopicId(topicId) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: `${apiEndpoints.GETTOPICBYTOPICID}${topicId}`,
      method: "get",
    });
    if (response.status === "success") {
      console.log("res", response);
      dispatch({
        type: topicConstants.GETALLTOPICBYTOPICID,
        data: response.data.result,
      });
    } else {
    }
  };
}
