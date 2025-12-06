import { UserType } from './type Defs/UserType.js' 
import { StudentType } from './type Defs/StudentType.js'
import { AuthType } from './type Defs/AuthType.js'
import { QueryType } from './type Query/QueryType.js'
import { responses } from './type Query/responses.js'
import { MutationType } from './type Mutation/MutationType.js'

export default [
    UserType,
    StudentType,
    AuthType,
    QueryType,
    responses,
    MutationType
]