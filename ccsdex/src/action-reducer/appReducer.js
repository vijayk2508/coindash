import { breadCrumbsReducer } from "./breadCrumbs/breadCrumbsReducer";
import { loginReducer } from "./login/loginReducer";
import { subjectReducer } from "./subject/subjectReducer";
import { toggleReducer } from "./toggle/toggleReducer";
import { topicReducer } from "./topic/topicReducer";

export default {
 breadCrumbs: breadCrumbsReducer,
 login: loginReducer,
 subject: subjectReducer,
 toggle: toggleReducer,
 topic: topicReducer
};
