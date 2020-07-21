import React from "react"

export default () => (
  <form action="" method="post" className="mt-16 text-center">
    <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-2">
      Cuéntame de esa idea que quieres hacer realidad
    </label>
    <div className="flex shadow rounded bg-white border p2">
      <textarea
        name="contact-content"
        id="contact-content"
        cols="30"
        rows="2"
        className="flex-1 py-2 py-3 text-gray-700 focus:outline-none focus:shadow-outline"
      ></textarea>
      <button className="btn ml-15">Enviar</button>
    </div>
  </form>
)
