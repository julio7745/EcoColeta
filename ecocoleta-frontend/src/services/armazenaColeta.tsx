
import axios from "axios"
import jwtDecode from 'jwt-decode';

import ValidaFormDeColetas from "./validaFormDeColeta"

interface ColetaFace {
    massa: string,
    volume: string,
    cliente: string,
    material: string,
}
interface armazenaColetaProps {
    coleta: ColetaFace,
    editOrCreate: string,
    setMensagem: (_: string) => void,
    setColeta: (_: ColetaFace) => void,
    setExibirMensagem: (_: boolean) => void,
    setClassNameOfLoading: (_: string) => void,
    setClassNameOfFeedback: (_: string) => void,
}
interface responseData{
    erro: string,
    sucess: number,
}

const armazenaColeta = async (props: armazenaColetaProps) => {

    props.setClassNameOfLoading('loading true')
    
    const apiBackEnd = process.env.REACT_APP_API_BACKEND;

    const erro = ValidaFormDeColetas({...{coleta: props.coleta, setDados: props.setColeta, }});
    
    if (erro) {

        props.setMensagem(erro)
        props.setClassNameOfFeedback('erro')

    }else{

        try {

            if (props.editOrCreate === 'create') {
                
                const response = await axios.post(`${apiBackEnd}/newColeta`, props.coleta);
                const respondeData = jwtDecode(response.data.token) as responseData; 

                if(respondeData.sucess === 1){
                    
                    props.setMensagem('Coleta armazenada com sucesso!'); 
                    props.setClassNameOfFeedback('sucesso')

                    props.setColeta({
                        massa: '',
                        volume: '',
                        cliente: '',
                        material: '',
                    });

                }else{

                    props.setMensagem(respondeData.erro); 
                    props.setClassNameOfFeedback('erro')

                }

            }else if (props.editOrCreate === 'edit') {
                
                
                const response = await axios.put(`${apiBackEnd}/editColeta`, props.coleta);
                const respondeData = jwtDecode(response.data.token) as responseData; 
                
                if(respondeData.sucess === 1){
                    
                    props.setMensagem('Coleta Editada com sucesso!'); 
                    props.setClassNameOfFeedback('sucesso')

                }else{

                    props.setMensagem(respondeData.erro); 
                    props.setClassNameOfFeedback('erro')

                }
            }
    
        } catch (error) {
    
            props.setMensagem('Falha no contato com BackEnd, entre em contato com o desenvolvedor.'); 
            props.setClassNameOfFeedback('erro')
            console.error(error);
    
        }
    }

    props.setExibirMensagem(true)
    props.setClassNameOfLoading('loading')

}

export default armazenaColeta;
