import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export const Contact = () => {
  const [values, setValues] = useState({
    email: "",
    fName: "",
    telefon: "",
    asunto: "",
    message: "",
  });
  const { id } = useParams();
  const [taller, setTaller] = useState({});
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/taller/" + id)
      .then((r) => r.json())
      .then((data) => setTaller(data.taller));
  }, []);

  const handleTallerChange = (e) => {
    setTaller(e.target.value);
  };

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    actions.getTaller_id(values);
  };

  return (
    <>
      <div className="m-0">
        <main className="border-bottom position-relative overflow-hidden m-0 text-center">
          <div className="product-device shadow"></div>
          <div className="product-device product-device-2 shadow"></div>

          <div className="col-md-5 p-lg-5 mx-auto my-5 container-fluid">
            <h1 className="display-7 fs-2 mb-4 t-shadow-black text-white">
              ¿Necesitas ayuda?
            </h1>
            <p className="lead fs-4 mb-4 t-shadow-black text-white">
              {" "}
              Contacta con nosotros<strong> 24/7</strong>
            </p>
            <p className="lead fs-4 mb-4 t-shadow-black text-white p-4">
              {" "}
              Te asesoraremos personalmente y responderemos a todas tus
              preguntas.
            </p>

            <a
              type="button"
              className="btn btn-success "
              href="mailto:support@ecutuning.com"
            >
              <i className="fa-sharp fa-solid fa-envelope me-2"></i>
              Contactar
            </a>
            <div
              className="modal fade text-center text-primary rounded shadow"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-white card  shadow">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Nuevo Mensaje
                    </h5>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={formSubmit}>
                      <div className="mb-3 mb-2 ">
                        <label
                          htmlFor="recipient-phone "
                          className="col-form-label"
                        >
                          <i className="fa-brands fa-whatsapp me-1"></i>
                          Telefono
                        </label>
                        <input
                          value={values.telefon}
                          onChange={handleInputChange}
                          onLoad={handleInputChange}
                          name="telefon"
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder=""
                        ></input>
                      </div>
                      <input name="taller_id" value={id} type="hidden" />
                      <div className="mb-3 mb-2 ">
                        <label
                          htmlFor="recipient-phone "
                          className="col-form-floating"
                        >
                          nombre
                        </label>
                        <input
                          value={values.fName}
                          onChange={handleInputChange}
                          onLoad={handleInputChange}
                          name="fName"
                          type="text"
                          className="form-control"
                          id="fName"
                          placeholder="nombre"
                        ></input>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className=" col-form-floating"
                        >
                          Asunto
                        </label>
                        <input
                          value={values.asunto}
                          onChange={handleInputChange}
                          onLoad={handleInputChange}
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          name="asunto"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-floating"
                        >
                          <i className="fa-solid fa-comment-dots me-1"></i>
                          Mensaje
                        </label>
                        <textarea
                          className="form-control "
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-success">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="px-4 py-5 text-center bblur border-bottom">
          <i className="fa-solid title-header text-white mb-5 t-shadow fa-people-line"></i>
          <h1 className="w-75 m-auto fs-4 mb-4 t-shadow-black text-white">
            Quienes Somos
          </h1>

          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 t-shadow-black text-white">
              <hr />
              Dos castellanos manchegos y un andaluz unen sus conocimientos para
              crear una web donde hacer posible al cliente que quiere un servicio
              tuning ponerlo en contacto con los talleres mas cercanos a su
              ubicación que ofrecen dichos servicios
            </p>
          </div>
        </div>

        <div className="container-fluid marketing text-center pt-5">
          <div className="row pt-5">
            <div className="col-lg-4">
              <img
                className="mb-4 bd-placeholder-img shadow rounded-circle mb-3"
                width="140"
                height="140"
                src="https://avatars.githubusercontent.com/u/70114505?v=4"
              />
              <h2 className="fs-4 mb-4 t-shadow-black text-white">Luis</h2>
              <em className="home-shadow p-3 m-4 d-block text-white">
               <q>Convirtiéndome en Pull Walker. Las classes lo son todo.</q> 
              </em>
              <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
              <a
                className="fs-6 title-header text-white m-1 t-shadow"
                href="https://github.com/LuisAguadoVicaria"
              >
                Github{" "}
              </a>
              <i className="fa-brands fs-3 title-header text-white m-1 t-shadow fa-linkedin" />
              <a
                className="fs-6 title-header text-white mb-5 t-shadow"
                href="https://www.linkedin.com/in/luisaguadovicaria/"
              >
                Linkedin
              </a>
            </div>
            <div className="col-lg-4 pb-5">
              <img
                className="shadow mb-4 bd-placeholder-img rounded-circle mb-3"
                width="140"
                height="140"
                src="http://avatars.githubusercontent.com/u/104210758?v=4"
              />
              <h2 className="fs-4 mb-4 t-shadow-black text-white">Jesús</h2>
              <em className="home-shadow p-3 m-4 d-block text-white">
               <q>De 'null' a 'full stack developer' gracias 4Geeks</q> 
              </em>
              <i className="fa-brands fs-3 title-header text-white  t-shadow fa-github" />
              <a
                className="fs-6 title-header text-white m-1 t-shadow"
                href="https://github.com/kakum3"
              >
                Github{" "}
              </a>
              <i className="fa-brands fs-3 title-header text-white m-1 t-shadow fa-linkedin" />
              <a
                className="fs-6 title-header text-white mb-5 t-shadow"
                href="https://www.linkedin.com"
              >
                Linkedin
              </a>
            </div>
            <div className="col-lg-4">
              <img
                className="shadow mb-4 bd-placeholder-img rounded-circle mb-3"
                width="140"
                height="140"
                src="https://avatars.githubusercontent.com/u/104069050?s=400&u=86d6a22ab542ce8cbaac0cff04417a1e666d67a1&v=4"
              />
              <h2 className="fs-4 mb-4 t-shadow-black text-white">Antonio</h2>
              <em className="home-shadow p-3 m-4 d-block text-white">
               <q>Un programador al nacer no llora, dice 'Hola Mundo' </q> 
              </em>
              <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
              <a
                className="fs-6 title-header text-white m-1 t-shadow"
                href="https://github.com/Brox13"
              >
                Github{" "}
              </a>
              <i className="fa-brands fs-3 title-header text-white m-1 t-shadow fa-linkedin" />
              <a
                className="fs-6 title-header text-white mb-5 t-shadow"
                href="https://www.linkedin.com/in/antonio-gómez-brox-4b283130"
              >
                {" "}
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
