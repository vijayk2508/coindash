import sendApiRequest from "../../services/auth";
import apiEndpoints from "../../apiEndpoints";
import subjectConstants from "./subjectConstants";

export function GetAllSubject() {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.GETALLSUBJECT,
      method: "get",
    });
    if (response.status === "success") {
      //console.log('res',response)
      dispatch({
        type : subjectConstants.GETALL,
        data : response.data.result
      });
    } else {
    
    }
  };
}
