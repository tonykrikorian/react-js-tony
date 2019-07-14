import React, { Component } from "react";

class RetirarColacion extends Component {
  state = {
    data: [
      {
        id: 1,
        nombre: "Tony Krikorian",
        fechaPedido: "12/07/2019",
        isMarcacionRealizada: 0,
        isColacionEntregada: 0
      },
      {
        id: 2,
        nombre: "Fabian Gonzalez",
        fechaPedido: "12/07/2019",
        isMarcacionRealizada: 0,
        isColacionEntregada: 0
      },
      {
        id: 3,
        nombre: "Tarin Gonzalez",
        fechaPedido: "12/07/2019",
        isMarcacionRealizada: 0,
        isColacionEntregada: 0
      }
    ]
  };

  renderIsMarcacionRealizada(colacion) {
    var message = "";
    var classes = "";
    if (colacion.isMarcacionRealizada === 0) {
      message = "Maracacion no realizada";
      classes = "text-danger";
    } else {
      message = "Maracacion realizada";
      classes = "text-success";
    }

    return <span className={classes}>{message}</span>;
  }

  renderIsColacionEntregada(colacion) {
    if (colacion.isMarcacionRealizada && colacion.isColacionEntregada)
      return <span className="text-success">Colacion Entregada</span>;

    if (colacion.isMarcacionRealizada && !colacion.isColacionEntregada)
      return (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.handlerEntregarColacion(colacion.id)}
        >
          Entregar Colacion
        </button>
      );

    if (!colacion.isMarcacionRealizada && !colacion.isColacionEntregada)
      return (
        <button className="btn btn-secondary btn-sm" disabled>
          Entregar Colacion
        </button>
      );
  }

  handlerMarcarColacion = id => {
    const { data: colaciones } = this.state;
    let filteredColaciones = colaciones.filter(colacion => colacion.id === id);
    filteredColaciones[0].isMarcacionRealizada = 1;
    let colacionIndex = colaciones.findIndex(value => value.id === id);
    colaciones.splice(colacionIndex, 1, filteredColaciones[0]);
    this.setState({ data: colaciones });
  };

  handlerEntregarColacion = id => {
    const { data: colaciones } = this.state;
    let filteredColaciones = colaciones.filter(colacion => colacion.id === id);
    filteredColaciones[0].isColacionEntregada = 1;
    let colacionIndex = colaciones.findIndex(value => value.id === id);
    colaciones.splice(colacionIndex, 1, filteredColaciones[0]);
    this.setState({ data: colaciones });
  };
  marcarColacion(id) {}
  render() {
    const { data: colaciones } = this.state;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Fecha Pedido</th>
            <th>Marcacion</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {colaciones.map(colacion => (
            <tr key={colacion.id}>
              <td>{colacion.id}</td>
              <td>{colacion.nombre}</td>
              <td>{colacion.fechaPedido}</td>
              <td>{this.renderIsMarcacionRealizada(colacion)}</td>
              <td>{this.renderIsColacionEntregada(colacion)}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => this.handlerMarcarColacion(colacion.id)}
                >
                  Marcar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RetirarColacion;
