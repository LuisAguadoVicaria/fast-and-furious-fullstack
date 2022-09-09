import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";

export const ImageUp = () => {
  const { store, actions, setStore } = useAppContext();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      // fetching data from the backend
      const resp = await fetch(process.env.BACKEND_URL + "/upload", {
        headers: {
          Authorization: "Bearer " + actions.getToken(),
        },
        method: "POST",
        body: new FormData(e.target),
      });
      const data = await resp.json();
      if (data.msg === "ok") {
        setLoading(false)
        return setStore({ alert: "Imagen Actualizada" }); //Reset user data
      }
    } catch (error) {
      setLoading(false)
      return setStore({
        alert: "Error al actualizar la imagen",
      });
    }
    setLoading(false)
    return setStore({
      alert: "Error Actualizar Imagen desconocido",
    });
  };
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Subir"
          />
          <button
            className="btn btn-primary"
            type="submit"
            id="inputGroupFileAddon04"
          >
            Subir
          </button>
        </div>
      </form>
      <div className="text-center">
      {!loading ? null : (
              <div className="w-100">
                {" "}
                <div
                  className="mb-4 text-success spinner-border spinner-border-sm"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
        {
          <img
            className="rounded shadow figure"
            src={
              file
                ? file
                : { ...store.user_data.user_info }.image === "" ||
                  { ...store.user_data.user_info }.image === null
                ? "https://www.tuningblog.eu/wp-content/uploads/2019/05/Autowerkstatt-tuning-shop-workshop.jpg"
                : store.user_data.user_info.image
            }
            alt="Profile"
          />
        }
      </div>
    </>
  );
};
export default ImageUp;
