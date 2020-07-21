import React from "react"

export default ({item}) => (
  <>
        <div className="grid-item">
          <h4>{item.title}</h4>
          <div>
            <span className="text-sm bg-purple-300 text-purple-700 text-center p-2 inline-block mt-2">
              Score: {item.score}
            </span>
          </div>
        </div>
  </>
)
