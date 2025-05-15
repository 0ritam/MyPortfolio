import { add, sub } from 'date-fns'
import { ApiError } from '@/error/api-error'


type User = {
  followers: number
  public_repos: number
}

export async function getGithubUserData() {
  const githubUserRequest = await fetch(
    'https://api.github.com/users/0ritam'
  )

  if (!githubUserRequest.ok) {
    console.log(githubUserRequest)
    throw new ApiError({
      message: githubUserRequest.statusText,
      status: githubUserRequest.status,
      url: githubUserRequest.url
    })
  }

  const result: User = await githubUserRequest.json()

  return result
}

type Repository = {
  language?: string
  stargazers_count: number
  fork: boolean
}

export async function getGithubRepositories() {
  const { public_repos: reposNumber } = await getGithubUserData()

  const numberOfPages = Math.ceil(reposNumber / 100)

  let repositories: Repository[] = []

  for (let index = 1; index <= numberOfPages; index++) {
    const githubRepositoriesRequest = await fetch(
      `https://api.github.com/users/0ritam/repos?per_page=100`
    )

    if (!githubRepositoriesRequest.ok) {
      console.log(githubRepositoriesRequest)
      throw new ApiError({
        message: githubRepositoriesRequest.statusText,
        status: githubRepositoriesRequest.status,
        url: githubRepositoriesRequest.url
      })
    }

    const list: Repository[] = await githubRepositoriesRequest.json()

    repositories = [...repositories, ...list]
  }

  return repositories
}