import { QueryKey } from "react-query";

export const createUseReposrKey = (username: string): QueryKey => [
  "useRepos",
  username,
]