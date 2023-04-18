import React from 'react';
import Header from '../Components/Header.jsx';
import qrcode from '../images/qrcode.svg';
import customers from '../mocks/mockCustomers';
import styled from '../Css/CreateService.module.css';

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
    };
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
    }, 5000);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  startService = () => {
    const { vehiclePlate } = this.state;
    const simulateRequest = () => {
      console.log(this.state);
    };
    simulateRequest();
    setTimeout(() => {
      window.location.replace(`/service/${vehiclePlate}`);
    }, 5000);
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
      isQrCodeHidden,
    } = this.state;
    const startServiceBtnStatus = (employeeName.length > 0) && (employeeCode.length > 0) ? false : true;
    return (
      <main>
        <Header />
        <div className={ styled.qrcodeImgContainer } hidden={ isQrCodeHidden }>
          <img 
            src={ qrcode } 
            hidden={ isQrCodeHidden } 
            alt='qrcode para informações do cliente' 
            className={ styled.qrcodeImg }
          />
        </div>
        <h2 className={ styled.createServiceSubTitle }>Preencha as informações abaixo</h2>
        <form className={ styled.createServiceForm }>
          <fieldset className={ styled.createServiceFormFieldset }>
            <legend className={ styled.fieldsetLegend }>Dados do Cliente</legend>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='customerName' >Nome:</label>
              <input 
                type='text' 
                name='customerName' 
                id='customerName'
                value={ customerName }
                onChange={ this.handleChange }
              />
            </div>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='customerCPF' >CPF:</label>
              <input 
                type='text' 
                name='customerCPF' 
                id='customerCPF'
                value={ customerCPF }
                onChange={ this.handleChange }
              />
            </div>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='customerPhone' >Telefone:</label>
              <input 
                type='text'
                name='customerPhone' 
                id='customerPhone'
                value={ customerPhone }
                onChange={ this.handleChange }
              />
            </div>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='customerEmail' >Email:</label>
              <input 
                type='text' 
                name='customerEmail' 
                id='customerEmail'
                value={ customerEmail }
                onChange={ this.handleChange }
              />
            </div>
            
          </fieldset>
          <fieldset className={ styled.createServiceFormFieldset }>
            <legend className={ styled.fieldsetLegend }>Dados do Veículo</legend>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='vehicleModel' >Modelo:</label>
              <input 
                type='text' 
                name='vehicleModel' 
                id='vehicleModel'
                value={ vehicleModel }
                onChange={ this.handleChange }
              />
            </div>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='vehicleColor' >Cor:</label>
              <input 
                type='text' 
                name='vehicleColor' 
                id='vehicleColor'
                value={ vehicleColor }
                onChange={ this.handleChange }
              />
            </div>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='vehiclePlate' >Placa:</label>
              <input 
                type='text' 
                name='vehiclePlate' 
                id='vehiclePlate'
                value={ vehiclePlate }
                onChange={ this.handleChange }
              />
            </div>

          </fieldset>
          <fieldset className={ styled.createServiceFormFieldset }>
            <legend className={ styled.fieldsetLegend }>Dados do Colaborador</legend>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='employeeName' >Nome:</label>
              <input 
                type='text' 
                name='employeeName' 
                id='employeeName'
                value={ employeeName }
                onChange={ this.handleChange }
              />
            </div>

            <div className={ styled.fieldsetDiv }>
              <label htmlFor='employeeCode' >Codigo:</label>
              <input 
                type='text' 
                name='employeeCode' 
                id='employeeCode'
                value={ employeeCode }
                onChange={ this.handleChange }
              />
            </div>

          </fieldset>

          <button
            type='button'
            onClick={ this.startService }
            className={ styled.createServiceFormBtn }
            disabled={ startServiceBtnStatus }
          >
            Iniciar Serviço
          </button>
        </form>
      </main>
    );
  }
}

export default CreateService;