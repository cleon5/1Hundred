import React, { Component } from "react";
import "../Constants/Styles.css";
import Peli from "../Constants/Peliculas.json";
import { getDocument, getUser, getPeliculasVistas } from "../Services/FirebaseGettters";
import PeliculaComp2 from "./PeliculaComp2";
import { ContexAuth, context } from "../Services/ContexAuth";



export class Lista extends Component {
    static contextType = context;

  constructor(props) {
    super(props);
    this.state = {
      Pelicula: Peli.Peliculas,
      FirePelis: [],
      loading: true,
      Movies: [],
      Series:[],
      Tipo:1,
    };
  }
  GetLocalStorage(){
    const item =  JSON.parse(localStorage.getItem('Tipo'));
    this.setState({Tipo:item})
    return item
  }
  SetLocalStorage(tipo){
    localStorage.setItem('Tipo', JSON.stringify(tipo));
  }
  componentDidMount() {
    this.GetLocalStorage()
    this.listar();

    
  }
  componentDidUpdate(prevProps, prevState) {
    const contex = this.context;
    if (contex.Movies !== this.state.Movies || contex.Series !== this.state.Series) {
      this.setState({ Movies: this.context.Movies });
      this.setState({Series:this.context.Series})
    }
    if(this.props.tipo !== prevProps.tipo){
      this.SetLocalStorage(this.props.tipo )
      this.listar()
    }
  }

  async listar() {

    this.setState({ loading: true });
    let listas = ["listaPeli", "listaSeries", "listaCaricaturas", "listaAnimes"]
    let t = this.GetLocalStorage();
    const pelis = await getDocument("Listas", listas[t-1]);

    this.setState({ loading: false });

    let Arrpelis = [];
    for (var i in pelis) {
      Arrpelis.push(pelis[i]);
    }
    this.setState({ FirePelis: Arrpelis });
  }

  render() {
    return (
 
        <main className="d-flex flex-wrap justify-content-center">
          {this.state.FirePelis.length > 0 &&
            this.state.FirePelis.map((pel) => (
              <PeliculaComp2
                key={pel.id}
                Pelicula={pel}
                Tipo={this.state.Tipo}
                inclu={
                  this.props.tipo == 1 ? this.context.Movies && this.context.Movies.includes(pel.id)
                  :  this.context.Series && this.context.Series.includes(pel.id)
                }
              />
            ))}
        </main>
    );
  }
}

export default Lista