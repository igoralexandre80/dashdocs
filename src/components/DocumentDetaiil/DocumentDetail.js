import React from "react";
import { Link } from "react-router-dom";

const DocumentDetail = (props) => {
  const { id, documentName, personType, cpf, name, cep, street, number, city, uf } = props.location.state.document;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{documentName}</div>
          <div className="description">{personType}</div>
          <div className="description">{cpf}</div>
          <div className="description">{name}</div>
          <div className="description">{cep}</div>
          <div className="description">{street}</div>
          <div className="description">{number}</div>
          <div className="description">{city}</div>
          <div className="description">{uf}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Voltar para a Lista de Documentos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DocumentDetail;