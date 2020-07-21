import React, { useState, useEffect } from "react"
import Repo from "./repo"

export default () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState(0)
  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos
    if (data) {
      myRepos = JSON.parse(data)
      setReposCount(myRepos.length)
      myRepos = myRepos.slice(1, 4)
      return setRepos(myRepos)
    }

    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/SrDonEmilio/repos"
      )
      myRepos = await response.json()
      setReposCount(myRepos.length)

      sessionStorage.setItem("repos", JSON.stringify(myRepos))

      setRepos(myRepos)
    }

    fetchRepos()
  }, [setRepos])
  return (
    <div className="max-w-4xl mx-auto mt-2">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Repos en GitHub</h2>
        <p>mis repos</p>
      </header>
      <ul className="repos-list">
        {repos.map(repo => {
          return <Repo repo={repo} key={repo.id} />
        })}
      </ul>
      <div className="mt-8 text-center">
      <a href="https://github.com/SrDonEmilio/" className="btn" target="_blank" rel="noopener noreferrer ">Ver más en GitHub ({reposCount})</a>
      </div>
    </div>
  )
}
