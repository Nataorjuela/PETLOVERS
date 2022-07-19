import React, {useState} from 'react';
import '../Login/Login.css';
import Title from "./components/Title/Title"
import Label from "./components/Label/Label";
import Input from './components/Input/Input';

const Login= () => {

    const [ user,setUser ]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setPasswordError]=useState(false);
    const [isLogin,setIsLogin]=useState(false);
    const [hasError,setHasError]=useState(false);
   
    function handleChange(name,value){
       
        if(name ==='usuario'){
            setUser(value)
        }else {
            if(value.length<6){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value)
            }
            
        }
    };

    function ifMatch(param){
        if(param.user.length>0 && param.password.length >0){
            if(param.user==='nata'&& param.passwrod === '123456'){
                const {user,password}=param;
                let ac ={user,password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account',account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        } else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account={user,password}
        if(account){
            console.log('account:',account)
        }
        window.location = "/Home";
    };

    return (
   
                <div className='login-content'>
                    <Title text='!Bienvenido!'/>
                    <label className='label-alert'>
                        Su contraseña o usuarios son incorrectos 
                        o no existen en nuestra plataforma
                    </label>
                    <Label text='Usuario'/>
                    <Input 
                    attribute={{
                            id:'usuario',
                            name:'usuario',
                            type:'text',
                            placeholder:'Ingrese su usuario'
                    }}
                    handleChange={handleChange}
                    />
                    <Label text='Contraseña'/>
                    <Input 
                    attribute={{
                            id:'constraseña',
                            name:'contraseña',
                            type:'password',
                            placeholder:'Ingrese su constraseña'
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                    />
                    { passwordError &&
                        <label className='label-error'>
                            Contraseña inválida o incompleta
                        </label>
                    }

                    <div className="submit-button-container">
                        <button onClick={handleSubmit} className='submit-button'>
                                Ingresar
                        </button>
                    </div>       
                
            </div>
    )
};

export default Login;