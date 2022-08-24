import React, { useContext, useEffect, useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useAppContext } from "../index";

const libs = ["places"];

function Placecomplete({ is_inclusive }) {
  const { store, actions, setState } = useAppContext();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const onLoad = (ref) => {
    return (window.Autocomplete = ref);
  };
  const onPlacesChanged = () => {
    setLat(
      window.Autocomplete.gm_accessors_.place.Uj.place.geometry.location.lat()
    );
    setLng(
      window.Autocomplete.gm_accessors_.place.Uj.place.geometry.location.lng()
    );
  };
  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
        value=""
        libraries={libs}
      >
        <Autocomplete
          className="form-floating mb-3"
          restrictions={{ country: "es" }}
          fields={["formatted_address", "geometry.location", "name"]}
          types={["establishment"]}
          onLoad={onLoad}
          onPlaceChanged={onPlacesChanged}
        >
          <>
            <input
              defaultValue={store.user_data.taller.w_address}
              name="w_address"
              type="address"
              className="w-100 form-control"
              id="w_address"
              placeholder="Avda Tunning ..."
            />
            <label htmlFor="floatingInput">Dirección del Taller</label>
          </>
        </Autocomplete>

        <em className="fs-6 mb-3 d-block">
          Por favor, asegúrese que su Taller se encuentra registrado como
          establecimiento en Google Maps.
        </em>
      </LoadScript>
      <input type="hidden" name="lat" value={lat} />
      <input type="hidden" name="lng" value={lng} />
    </>
  );
}

export default React.memo(Placecomplete);