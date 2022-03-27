import { useQuery, UseQueryOptions } from "react-query"
import api from "../global/api"
import { createUseReposrKey } from "./keys"
import { Repo } from "./types"

export const useRepos =
  (username: string,
    options?: UseQueryOptions<Repo[]>
  ) => {
    return useQuery(
      createUseReposrKey(username),
      () => api
        .get<Repo[]>(`/users/${username}/repos?sort=created&per_page=10`)
        .then(response => response.data),
      options
    );
  }