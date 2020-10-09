

const apiEndpoints = {
  //User Login
  LOGIN: "/user/login",

  //Subject
  GETALLSUBJECT: "/subject/getall",
  CREATESUBJECT : "/subject/create",
  UPDATESUBJECT : "/subject/update",
  DELETESUBJECT : "/subject/delete",
  GETDETAILBYSUBJECTID : "/subject/getDetailBySubjectId/",

  //Topic
  GETALLTOPICBYSUBJECTID: "/topic/getalltopicsubjectid?subjectId=",
  GETTOPICBYTOPICID: "/topic/getalltopicbytopicid?topicId=",
  GETALLTOPICS: "/topic/getalltopic",
};

export default apiEndpoints;
