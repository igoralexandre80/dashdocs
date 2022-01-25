import React from "react";

class AddDocument extends React.Component {
    state = {
      documentName: "",
      personType: "", 
      cpf: "",
      name: "", 
      cep: "", 
      street: "", 
      number: "",
      city: "", 
      uf: "",
    };

      add = (e) => {
        e.preventDefault();
        if(this.state.documentName === "" 
        || this.state.personType === "" 
        || this.state.cpf === "" 
        || this.state.name === "" 
        || this.state.cep === "" 
        || this.state.street === "" 
        || this.state.number === "" 
        || this.state.city === "" 
        || this.state.uf === "") {
          alert("Campo Obrigatório");
          return
        }
        this.props.addDocumentHandler(this.state);
        this.setState({
        documentName:"", 
        personType:"", 
        cpf:"", 
        name:"", 
        cep:"", 
        street:"", 
        number:"", 
        city:"", 
        uf:"" });
        this.props.history.push("/");
      };
      
  render() {
    return (
      <div className="ui main">
        <h2>Adicionar Documentos ao pedido</h2>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
            <label>Nome do Documento:</label>
            <input type="text" 
             name="documentName" 
             placeholder="Digite Aqui"
             value={this.state.documentName} 
             onChange={ (e) => this.setState({documentName: e.target.value})} 
             />
        </div>
        <div className="field">
            <label>Tipo de Pessoa:</label>
            <input 
            type="text" 
            name="personType" 
            placeholder="Digite Aqui"
            value={this.state.personType} 
            onChange={ (e) => this.setState({personType: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>CPF:</label>
            <input 
            type="text" 
            name="cpf" 
            placeholder="Digite Aqui"
            value={this.state.cpf} 
            onChange={ (e) => this.setState({cpf: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>Nome Completo:</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Digite Aqui" 
            value={this.state.name} 
            onChange={ (e) => this.setState({name: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>CEP:</label>
            <input 
            type="text" 
            name="cep" 
            placeholder="Digite Aqui" 
            value={this.state.cep} 
            onChange={ (e) => this.setState({cep: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>Rua:</label>
            <input 
            type="text" 
            name="street" 
            placeholder="Digite Aqui" 
            onChange={ (e) => this.setState({street: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>Número:</label>
            <input 
            type="number" 
            name="number" 
            placeholder="Digite Aqui"
            value={this.state.number} 
            onChange={ (e) => this.setState({number: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>Cidade:</label>
            <input 
            type="text" 
            name="city" 
            placeholder="Digite Aqui"
            value={this.state.city} 
            onChange={ (e) => this.setState({city: e.target.value})} 
            />
        </div>
        <div className="field">
            <label>UF:</label>
            <input 
            type="text" 
            name="uf" 
            placeholder="Digite Aqui"
            value={this.state.uf} 
            onChange={ (e) => this.setState({uf: e.target.value})} 
            />
        </div>
        <button className="ui button blue">Criar Documento</button>
       </form>
      </div>
    )
  }
}

export default AddDocument;