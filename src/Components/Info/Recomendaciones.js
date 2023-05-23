import React from "react";
import { useEffect, useState } from "react";
import PeliculaComp2 from "../PeliculaComp2";
import { getWhere } from "../../Services/FirebaseGettters";

export default function Recomendaciones({Tipo}) {
  const [Recomendaciones, setRecomendaciones] = useState([]);

  const get = async () => {
    const recomendacion = await getWhere(Tipo);
    setRecomendaciones(recomendacion);
  };
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {Recomendaciones.length > 0
          && Recomendaciones.map((pel) => (
              <PeliculaComp2 key={pel.id} Pelicula={pel} />
            ))
            }
      </div>
    </div>
  );
}
