import React from "react";
import { useEffect, useState } from "react";
import PeliculaComp2 from "../PeliculaComp2";
import { getWhere } from "../../Services/FirebaseGettters";

export default function Recomendaciones({Tipo}) {
  const [Recomendaciones, setRecomendaciones] = useState([]);

  const get = async () => {
    let x = Tipo ==1?"Peliculas":"Series"
    const recomendacion = await getWhere(x);
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
              <PeliculaComp2 key={pel.id} Pelicula={pel} Tipo={Tipo}/>
            ))
            }
      </div>
    </div>
  );
}
