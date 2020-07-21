import React from "react"
import Form from "../components/contact-form.js"
import ilustration from "../img/undraw_accept_tasks_po1c.svg"

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">
            Hola, soy Emilio
          </h1>
          <p className="text-xl font-light">Creo applicaciones web</p>
        </div>
        <img
          src={ilustration}
          alt="img-header"
          style={{ height: "200px" }}
        ></img>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </header>
)
