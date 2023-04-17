import React from "react";
import Header from "../Components/Header";
import qrcode from "../images/qrcode.svg";
import { customers } from "../mocks/mockCustomers";

class CreateService extends React.Component {
  constructor() {
    super();
    this.state = {
      customerName: '',
      customerCPF: '',
      customerPhone: '',
      customerEmail: '',
      vehicleModel: '',
      vehicleColor: '',
      vehiclePlate: '',
      employeeName: '',
      employeeCode: '',
      isQrCodeHidden: false,
    }
  }
  
  componentDidMount() {
    const customerInfos = customers[Math.floor(Math.random() * customers.length)];
    setTimeout(() => {
      this.setState({
        customerName: customerInfos.customerName,
        customerCPF: customerInfos.customerCPF,
        customerPhone: customerInfos.customerPhone,
        customerEmail: customerInfos.customerEmail,
        vehicleModel: customerInfos.vehicleModel,
        vehicleColor: customerInfos.vehicleColor,
        vehiclePlate: customerInfos.vehiclePlate,
        isQrCodeHidden: true,

      });
    }, 5000)
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  startService = () => {
    const { vehiclePlate } = this.state;
    window.location.replace(`/service/${vehiclePlate}`)
  };

  render() {
    const {
      customerName,
      customerCPF,
      customerPhone,
      customerEmail,
      vehicleModel,
      vehicleColor,
      vehiclePlate,
      employeeName,
      employeeCode,
      isQrCodeHidden
    } = this.state;
    return (
      <main>
        <Header />
        <img src={ qrcode } hidden={ isQrCodeHidden } alt="qrcode para informações do cliente" />
        <h2>Preencha as informações abaixo</h2>
        <form>
          <fieldset>
            <legend>Dados do Cliente</legend>

            <label htmlFor="customerName" >Nome:</label>
            <input 
              type="text" 
              name="customerName" 
              id="customerName"
              value={ customerName }
              onChange={ this.handleChange }
            />

            <label htmlFor="customerCPF" >CPF:</label>
            <input 
              type="text" 
              name="customerCPF" 
              id="customerCPF"
              value={ customerCPF }
              onChange={ this.handleChange }
            />

            <label htmlFor="customerPhone" >Telefone:</label>
            <input 
              type="text"
              name="customerPhone" 
              id="customerPhone"
              value={ customerPhone }
              onChange={ this.handleChange }
            />

            <label htmlFor="customerEmail" >Email:</label>
            <input 
              type="text" 
              name="customerEmail" 
              id="customerEmail"
              value={ customerEmail }
              onChange={ this.handleChange }
            />
            
          </fieldset>
          <fieldset>
            <legend>Dados do Veículo</legend>

            <label htmlFor="vehicleModel" >Modelo:</label>
            <input 
              type="text" 
              name="vehicleModel" 
              id="vehicleModel"
              value={ vehicleModel }
              onChange={ this.handleChange }
            />

            <label htmlFor="vehicleColor" >Cor:</label>
            <input 
              type="text" 
              name="vehicleColor" 
              id="vehicleColor"
              value={ vehicleColor }
              onChange={ this.handleChange }
            />

            <label htmlFor="vehiclePlate" >Placa:</label>
            <input 
              type="text" 
              name="vehiclePlate" 
              id="vehiclePlate"
              value={ vehiclePlate }
              onChange={ this.handleChange }
            />

          </fieldset>
          <fieldset>
            <legend>Dados do Colaborador</legend>

            <label htmlFor="employeeName" >Nome:</label>
            <input 
              type="text" 
              name="employeeName" 
              id="employeeName"
              value={ employeeName }
              onChange={ this.handleChange }
            />

            <label htmlFor="employeeCode" >Codigo:</label>
            <input 
              type="text" 
              name="employeeCode" 
              id="employeeCode"
              value={ employeeCode }
              onChange={ this.handleChange }
            />

          </fieldset>

          <button type="button" onClick={ this.startService }>Iniciar Serviço</button>
        </form>
      </main>
    );
  }
}

export default CreateService;