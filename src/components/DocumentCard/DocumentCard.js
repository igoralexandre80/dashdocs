import React from "react";
import { Link } from "react-router-dom";

const DocumentCard = (props) => {
  const { id, documentName, personType, cpf, name, cep, street, number, city, uf } = props.document;

  return (
    <div className="item">
    <div className="content">
      <Link
        to={{ pathname: `/document/${id}`, state: { document: props.document } }}
      >
        <div className="header">{documentName}</div>
        <div>{personType}</div>
        <div>{cpf}</div>
        <div>{name}</div>
        <div>{cep}</div>
        <div>{street}</div>
        <div>{number}</div>
        <div>{city}</div>
        <div>{uf}</div>
      </Link>
    </div>
    <i
      className="trash alternate outline icon"
      style={{ color: "red", marginTop: "7px" }}
      onClick={() => props.clickHander(id)}
    ></i>
  </div>
);
};
export default DocumentCard





