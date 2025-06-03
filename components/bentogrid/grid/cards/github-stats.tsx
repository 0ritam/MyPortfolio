import { getGithubRepositories, getGithubUserData } from '@/lib/github'

export const GithubStats = async () => {
  const { public_repos } = await getGithubUserData()
  const repositories = await getGithubRepositories()
  const stars = repositories.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  )
  return (
    <div className="relative h-full w-full transform-gpu duration-500 hover:scale-[.98]">
      <a
        href="https://github.com/0ritam"
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <BackgroundPattern />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pb-6">
          <div className="flex flex-row justify-center gap-x-12 text-neutral-300">
            <GitHubStatsData label="Stars" value={stars} />
            {/* <GitHubStatsData label="Followers" value={followers} /> */}
            <GitHubStatsData label="Repos" value={public_repos} />
          </div>
        </div>
      </a>
    </div>
  )
}

const GitHubStatsData = ({
  label,
  value
}: {
  label: React.ReactNode
  value: number
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-2xl font-bold tracking-tight">
        {value}
      </span>
      <span className="text-sm font-medium text-neutral-400">
        {label}
      </span>
    </div>
  )
}

const BackgroundPattern = () => {
  let seed = 1
  function seededRandom() {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
  
  const colors = [
    'rgb(14, 68, 41)',     // Darkest green
    'rgb(0, 109, 50)',     // Dark green
    'rgb(38, 166, 65)',    // Medium green
    'rgb(57, 211, 83)',    // Light green
    'rgb(22, 27, 34)'      // Dark background
  ]
  
  return (
    <div className="absolute inset-0">
      <div className="grid h-full w-full grid-cols-[repeat(15,1fr)] gap-1">
        {new Array(75).fill(null).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ backgroundColor: colors[Math.floor(seededRandom() * colors.length)] }}
          />
        ))}
      </div>
    </div>
  )
}