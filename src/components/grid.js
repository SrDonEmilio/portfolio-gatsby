import React from "react"

export default props => (
  <>
    <h2 className="font-bold text-3xl text-center">{props.title}</h2>
    <div className="mt-8 overflow-x-auto">
      {props.data.map(item => (
        <props.card item={item} />
      ))}
    </div>
  </>
)
