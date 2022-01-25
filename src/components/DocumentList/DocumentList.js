import React from "react";
import { Link } from "react-router-dom";
import DocumentCard from "../DocumentCard/DocumentCard";

const DocumentList = (props) => {
  console.log(props);

  const deleteDocumentHandler = (id) => {
    props.getDocumentId(id);
  };

  const renderDocumentList = props.documents.map((document) => {
    return (
      <DocumentCard
        document={document}
        clickHander={deleteDocumentHandler}
        key={document.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Lista de Documentos
        <Link to="/add">
          <button className="ui button blue right">Adicionar Documento</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderDocumentList}</div>
    </div>
  );
};


export default DocumentList; 