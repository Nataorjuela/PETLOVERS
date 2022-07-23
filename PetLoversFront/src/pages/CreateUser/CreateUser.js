import React,{useState} from "react";
import Input from '../Login/components/Input/Input';
import Header from '../Login/components/Header/Header';
import '../CreateUser/CreateUser.css';

const CreateUser =()=>{

    function handleChange(name,value){
        
    }
    function handleSubmit(){
        window.location ="/Home";
    }
   

    return (
        <div className="CreateUser-container">
        <Header />
           
           <Input 
                    attribute={{
                        id:'nombre',
                        name:'nombre',
                        type:'text',
                        placeholder:'Ingrese su nombre'
                    }}
                    handleChange={handleChange}
                   
            />
            <Input 
                    attribute={{
                        id:'cedula',
                        name:'cedula',
                        type:'text',
                        placeholder:'Ingrese su cedula'
                    }}
                    handleChange={handleChange}
            />
            <Input 
                    attribute={{
                        id:'email',
                        name:'mail',
                        type:'text',
                        placeholder:'Ingrese su correo electronico'
                    }}
                    handleChange={handleChange}
                    
            />
            <Input 
                    attribute={{
                        id:'password',
                        name:'password',
                        type:'password',
                        placeholder:'Ingrese su contraseña'
                    }}
                    handleChange={handleChange}
                    
            />
            <Input 
                    attribute={{
                        id:'tipoUsuario',
                        name:'tipoUsuario',
                        type:'text',
                        placeholder:'tipo usuario:CLiente-Domiciliario'
                    }}
                    handleChange={handleChange}     
            />
             <div className="submit-button-container">
                    <button onClick={handleSubmit} className='submit-button'>
                        Registrar
                    </button>
                </div> 
	</div>
    )

};


export default CreateUser;