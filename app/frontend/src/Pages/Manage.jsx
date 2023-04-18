import React from 'react';
import services from '../mocks/mockService';
import employees from '../mocks/mockEmployees';
import Header from '../Components/Header.jsx';
import styled from '../Css/Manage.module.css';

class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      allRegisteredServices: [],
      filteredServices: [],
      allEmployees: [],
    };
  }

  componentDidMount() {
    const getAllServices = services;
    const getAllEmployees = employees;
    this.setState({ allRegisteredServices: getAllServices, allEmployees: getAllEmployees });
  }

  selectorChange = ({ target }) => {
    const { allRegisteredServices } = this.state;
    const { value } = target;
    if (value === 'all') {
      this.setState({ filteredServices: [] });
    } else {
      const newArray = allRegisteredServices.filter((service) => service.employeeCode === value);
      this.setState({ filteredServices: newArray });
    }
  };

  removeService = (index) => {
    const { allRegisteredServices, filteredServices } = this.state;
    if (filteredServices.length > 0) {
      filteredServices.splice(index, 1);
    } else {
      allRegisteredServices.splice(index, 1);
    }
    this.setState({ allRegisteredServices });
  }

  buttonFilters = ({ target }) => {
    const { allRegisteredServices } = this.state;
    const { value } = target;
    if (value === 'finished') {
      const newArray = allRegisteredServices.filter((service) => service.endedAt.length > 0);
      this.setState({ filteredServices: newArray });
    } else if (value === 'in progress') {
      const newArray = allRegisteredServices.filter((service) => service.endedAt.length === 0);
      this.setState({ filteredServices: newArray });
    } else if (value === 'all') {
      this.setState({ filteredServices: [] });
    }
  };

  render() {
    const { allRegisteredServices, filteredServices, allEmployees } = this.state;
    return (
      <main>
        <Header />
        <div className={ styled.manageFiltersDiv }>
          <select name='employeeSelector' id='employeeSelector' onChange={ this.selectorChange }>
            <option value='all'>Todos</option>
            { allEmployees.map((employee, index) => (
              <option key={ index } value={employee.employeeCode}>{employee.employeeName}</option>
            ))}
          </select>
          <button value='all' onClick={ this.buttonFilters }>Todos</button>
          <button value='in progress' onClick={ this.buttonFilters }>Em Andamento</button>
          <button value='finished' onClick={ this.buttonFilters }>Finalizados</button>
        </div>
        <table className={ styled.manageTableContainer }>
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
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {
              (filteredServices.length > 0 
                ? filteredServices : allRegisteredServices).map((service, index) => (
                  <tr key={ index }>
                    <td>{service.employeeName}</td>
                    <td>{service.employeeCode}</td>
                    <td>{service.vehicleModel}</td>
                    <td>{service.vehiclePlate}</td>
                    <td>{service.vehicleColor}</td>
                    <td>{service.startedAt}</td>
                    <td>{service.endedAt}</td>
                    <td>
                      {service.serviceValue
                        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                    <td>
                      <button
                        className={ styled.manageRemoveButton }
                        onClick={ () => this.removeService(index) }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </main>
    );
  }
}

export default Manage;