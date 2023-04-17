import React from "react";
import Header from "../Components/Header";

class CreateService extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <h2>Preencha as informações abaixo</h2>
        <form>
          <fieldset>
            <legend>Dados do Cliente</legend>

            <label for="nomeCliente" >Nome:</label>
            <input type="text" name="nomeCliente" id="nomeCliente"/>

            <label for="cpfCliente" >CPF:</label>
            <input type="text" name="cpfCliente" id="cpfCliente"/>

            <label for="telefoneCliente" >Telefone:</label>
            <input type="text" name="telefoneCliente" id="telefoneCliente"/>

            <label for="emailCliente" >Email:</label>
            <input type="text" name="emailCliente" id="emailCliente"/>
            
          </fieldset>
          <fieldset>
            <legend>Dados do Veículo</legend>

            <label for="modeloVeiculo" >Modelo:</label>
            <input type="text" name="modeloVeiculo" id="modeloVeiculo"/>

            <label for="corVeiculo" >Cor:</label>
            <input type="text" name="corVeiculo" id="corVeiculo"/>

            <label for="placaCliente" >Placa:</label>
            <input type="text" name="placaCliente" id="placaCliente"/>

          </fieldset>
          <fieldset>
            <legend>Dados do Colaborador</legend>

            <label for="nomeColaborador" >Nome:</label>
            <input type="text" name="nomeColaborador" id="nomeColaborador"/>

            <label for="codigoColaborador" >Codigo:</label>
            <input type="text" name="codigoColaborador" id="codigoColaborador"/>
          </fieldset>

          <button>Iniciar Serviço</button>
        </form>
      </main>
    );
  }
}

export default CreateService;