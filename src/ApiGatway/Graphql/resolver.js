import { mergeResolvers } from "@graphql-tools/merge";

import { studentResolvers } from "../Graphql/students/student.resolver.js";
import { authResolver } from "../Graphql/auth/auth.resolver.js";
import { userResolver } from "../Graphql/users/user.resolver.js";
import { subjectResolvers } from "./subjects/subject.resolver.js";
export default mergeResolvers([
  studentResolvers,
  authResolver,
  subjectResolvers,
  userResolver,
]);
