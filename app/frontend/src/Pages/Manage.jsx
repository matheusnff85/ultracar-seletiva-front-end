import React from 'react';
import services from '../mocks/mockService';
import Header from '../Components/Header.jsx';

class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      allRegisteredServices: [],
    };
  }

  componentDidMount() {
    const getAllServices = services;
    this.setState({ allRegisteredServices: getAllServices });
  }

  render() {
    const { allRegisteredServices } = this.state;
    return (
      <main>
        <Header />
        <table>
          <thead>
            <tr>
              <th>Funcionário</th>
              <th>Código de Func.</th>
              <th>Veículo</th>
              <th>Placa</th>
              <th>Cor</th>
              <th>Iniciado  em</th>
              <th>Terminado em</th>
              <th>Valor</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              allRegisteredServices && (
                allRegisteredServices.map((service, index) => (
                  <tr key={ index }>
                    <td>{service.employeeName}</td>
                    <th>{service.employeeCode}</th>
                    <td>{service.vehicleModel}</td>
                    <td>{service.vehiclePlate}</td>
                    <td>{service.vehicleColor}</td>
                    <td>{service.startedAt}</td>
                    <td>{service.endedAt}</td>
                    <td>{service.serviceValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td><button>Excluir</button></td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </main>
    );
  }
}

export default Manage;