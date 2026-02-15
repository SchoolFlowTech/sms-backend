import { gql } from "apollo-server-express";

export const teacherResponse = gql`
  type TeacherResponse {
    status: String!
    message: String!
    data: Teacher
  }

  type Pagination {
    totalCount: Int!
    currentPage: Int!
    totalPages: Int!
    limit: Int!
  }

  type TeachersResponse {
    status: String!
    message: String!
    data: [Teacher]
    pagination: Pagination
  }
`;
