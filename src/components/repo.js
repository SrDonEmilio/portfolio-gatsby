import React from "react"

export default ({ repo }) => {
  return (
    <li className="flex items-center">
      <div className="w-10/12 overflow-x-hidden">
        <h4 className="font-bold text-pink-600">{repo.name}</h4>
        <p
          className="text-sm text-gray-800 overflow-y-hidden"
          style={{ height: "1.5em" }}
        >
          {repo.description}
        </p>
      </div>
      <div>
        <a
          className="flex-1 text-right"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver
        </a>
      </div>
    </li>
  )
}
