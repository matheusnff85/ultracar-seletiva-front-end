import React from 'react';
import Header from '../Components/Header.jsx';
import services from '../mocks/mockService';
import vehicleParts from '../mocks/mockParts';
import styled from '../Css/CurrentService.module.css';

class CurrentService extends React.Component {
  constructor() {
    super();
    this.state = {
      customerName: '',
      customerCPF: '',
      vehicleModel: '',
      vehicleColor: '',
      vehiclePlate: '',
      employeeName: '',
      employeeCode: 0,
      partSelectedId: 'null',
      partSelectedName: 'Peça não utilizada',
      taskDescription: '',
      taskValue: 0,
      tasksConclued: [],
      totalValue: 0,
    };
  }

  componentDidMount() {
    const serviceInfos = services[Math.floor(Math.random() * services.length)];
    this.setState({
      customerName: serviceInfos.customerName,
      customerCPF: serviceInfos.customerCPF,
      vehicleModel: serviceInfos.vehicleModel,
      vehicleColor: serviceInfos.vehicleColor,
      vehiclePlate: serviceInfos.vehiclePlate,
      employeeName: serviceInfos.employeeName,
      employeeCode: serviceInfos.employeeCode,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  selectorChange = ({ target }) => {
    const { value } = target;
    if (value !== 'null') {
      this.setState({
        partSelectedId: value,
        partSelectedName: vehicleParts[value - 1].partName,
        taskValue: vehicleParts[value - 1].partValue,
      });
    } else {
      this.setState({
        partSelectedId: 'null',
        partSelectedName: 'Peça não utilizada',
        taskValue: 0,
      });
    }
  };

  addConcluedTask = (newTask) => {
    const { tasksConclued, totalValue } = this.state;
    tasksConclued.push(newTask);
    this.setState({
      tasksConclued,
      totalValue: totalValue + Number(newTask.taskValue),
      taskDescription: '',
      taskValue: 0,
    });
  };

  endService = () => {
    console.log(this.state, new Date().toLocaleString());
    setTimeout(() => {
      window.location.replace('/');
    }, 5000);
  };

  render() {
    const {
      customerName,
      customerCPF,
      vehicleModel,
      vehicleColor,
      vehiclePlate,
      employeeName,
      employeeCode,
      partSelectedId,
      partSelectedName,
      taskDescription,
      taskValue,
      totalValue,
      tasksConclued,
    } = this.state;
    return (
      <main>
        <Header />
        <div className={ styled.currentServiceInfosDiv }>
          <h3 className={ styled.customerInfosTitle }>Informações</h3>
          <ul className={ styled.customerInfosList }>
            <li>Cliente: { customerName }</li>
            <li>CPF: { customerCPF }</li>
            <li>Modelo do veículo: { vehicleModel }</li>
            <li>Cor do veículo: { vehicleColor }</li>
            <li>Placa do veículo: { vehiclePlate }</li>
            <li>Funcionário: { employeeName }</li>
            <li>Código: { employeeCode }</li>
          </ul>
        </div>
        <div className={ styled.currentServiceTaskCreator }>
          <div className={ styled.taskCreatorDiv }>
            <select 
              name='partSelectedId' 
              id='partSelectedId'
              onChange={ this.selectorChange }
              className={ styled.taskCreatorSelect }
            >
              <option value='null'>Apenas mão de obra</option>
              {
                vehicleParts.map(({ partId, partName }) => (
                  <option key={ partId } value={partId}>{partName}</option>
                ))
              }

            </select>
          </div>

          <div className={ styled.taskCreatorDiv }>
            <label htmlFor='taskDescription'>Descrição:</label>
            <textarea
              name='taskDescription'
              id='taskDescription'
              value={ taskDescription }
              onChange={ this.handleChange }
              className={ styled.taskCreatorTextarea }
              maxLength='60'
            />
          </div>

          <div className={ styled.taskCreatorDiv }>
            <label htmlFor='taskValue'>Valor:</label>
            <input
              type='number'
              name='taskValue'
              id='taskValue'
              value={ taskValue }
              onChange={ this.handleChange }
              className={ styled.taskCreatorValueInput }
            />
          </div>

          <div className={ styled.taskCreatorDiv }>
            <button
              className={ styled.taskCreatorButton }
              onClick={ 
                () => this.addConcluedTask(
                  { partSelectedId, taskDescription, taskValue, partSelectedName },
                  )}
              >
              Incluir
            </button>
          </div>
        </div>
        <table className={ styled.currentServiceTableContainer }>
          <thead>
            <tr>
              <th>Peça</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {
              tasksConclued && (
                tasksConclued.map((task, index) => (
                  <tr key={ index }>
                  <td>{ task.partSelectedName }</td>
                  <td>{ task.taskDescription }</td>
                  <td>{ `R$ ${task.taskValue}` }</td>
                  <td>
                    <button 
                      className={ styled.removeTaskButton }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
                ))
              )
            }
          </tbody>
        </table>
        <h2 className={ styled.currentServiceTotalValue }>
          Total: { totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </h2>
        <div className={ styled.endServiceButtonDiv }>
          <button
            onClick={ this.endService }
            className={ styled.endServiceButton }
          >
            Finalizar Serviço
          </button>
        </div>
      </main>
    );
  }
}

export default CurrentService;