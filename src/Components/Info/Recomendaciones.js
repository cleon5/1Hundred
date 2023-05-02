import React from "react";
import { useEffect, useState } from "react";
import PeliculaComp from "../PeliculaComp";
import PeliculaComp2 from "../PeliculaComp2";
import { getMovieWhere } from "../../Services/FirebaseGettters";

export default function Recomendaciones() {
  const [Recomendaciones, setRecomendaciones] = useState([]);

  const get = async () => {
    const recomendacion = await getMovieWhere();
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
