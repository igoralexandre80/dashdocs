import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from './api/documents';
import './App.css';
import Header from './components/Header/Header';
import AddDocument from './components/AddDocument/AddDocument';
import DocumentList from './components/DocumentList/DocumentList';
import DocumentDetail from './components/DocumentDetaiil/DocumentDetail';


function App() {
  const LOCAL_STORAGE_KEY = "documents";
  const [documents, setDocuments] = useState([]);

  //Retrievedocuments
  const retrieveDocuments = async () => {
    const response = await api.get("/documents");
    return response.data;
  };

  const addDocumentHandler = async (document) => {
    console.log(document);
    const request = {
      id: uuid(),
      ...document,
    };

    const response = await api.post("/documents", request);
    console.log(response);
    setDocuments([...documents, response.data]);
  };

  const updateDocumentHandler = async (document) => {
    const response = await api.put(`/documents/${document.id}`, document);
    const { id, documentName, personType, cpf, name, cep, street, number, city, uf } = response.data;
    setDocuments(
      documents.map((document) => {
        return document.id === id ? { ...response.data } : document;
      })
    );
  };

  const removeDocumentHandler = async (id) => {
    await api.delete(`/documents/${id}`);
    const newDocumentList = documents.filter((document) => {
      return document.id !== id;
    });

    setDocuments(newDocumentList);
  };

  useEffect(() => {
    const getAllDocuments = async () => {
      const allDocuments = await retrieveDocuments();
      if (allDocuments) setDocuments(allDocuments);
    };

    getAllDocuments();
  }, []);

  useEffect(() => {

  }, [documents]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <DocumentList
                {...props}
                documents={documents}
                getDocumentId={removeDocumentHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddDocument {...props} addDocumentHandler={addDocumentHandler} />
            )}
          />

         

          <Route path="/document/:id" component={DocumentDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
