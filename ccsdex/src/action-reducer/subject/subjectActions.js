/* eslint-disable no-unused-vars */
import sendApiRequest from "../../services/auth";
import apiEndpoints from "../../apiEndpoints";
import subjectConstants from "./subjectConstants";
import { AlertNotification } from "../../common/AlertNotification";
import { type, MessageTitle } from "../../common/AlertNotification/constants";
import { resStatus } from "../../constants";

export function GetAllSubject() {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.GETALLSUBJECT,
      method: "get",
    });
  
    if (response.status === "success") {
      dispatch({
        type: subjectConstants.GETALL,
        data: response.data.result,
      });
    }
  
    return response.status;
  };
}

export function GetSubjectDetailBySubjectID(subjectId){
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: `${apiEndpoints.GETDETAILBYSUBJECTID}${subjectId}`,
      method: "get",
    });
  
    if (response.status === "success") {
      dispatch({
        type: subjectConstants.GETDETAILLBYSUBJECTID,
        data: response.data.result,
      });
    }
  
    return response.status;
  };
}


export function CreateNewSubject(data) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.CREATESUBJECT,
      method: "post",
      data: data,
    });
    if (response.status === "success") {
      AlertNotification(MessageTitle.SUCCESS, response.data.message);
      dispatch(GetAllSubject());
    } else {
      AlertNotification(MessageTitle.ERROR, response.message, type.ERROR);
    }
    return response.status;
  };
}

export function UpdateSubject(data) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.UPDATESUBJECT,
      method: "put",
      data: data,
    });
    if (response.status === "success") {
      AlertNotification(MessageTitle.SUCCESS, response.data.message);
      dispatch(GetAllSubject());
    } else {
      AlertNotification(MessageTitle.ERROR, response.message, type.ERROR);
    }
    return response.status;
  };
}

export function DeleteSubject(subjectId) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: `${apiEndpoints.DELETESUBJECT}/${subjectId}`,
      method: "delete",
    });
    if (response.status === "success") {
      AlertNotification(MessageTitle.SUCCESS, response.data.message);
      dispatch(GetAllSubject());
    } else {
      AlertNotification(MessageTitle.ERROR, response.message, type.ERROR);
    }
    return response.status;
  };
}

