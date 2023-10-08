
import axios from "axios"
import jwtDecode from 'jwt-decode';

import ValidaFormDeColetas from "./validaFormDeColeta"

interface dados{
    cliente: string,
    massa: string,
    volume: string,
    material: string,
}
interface armazenaColetaProps{
    dados: dados,
    editOrCreate: string,
    setMensagem: (mensagem: string) => void,
    setClassNameOfFeedback: (className: string) => void,
    setExibirMensagem: (className: boolean) => void,
    setDados: (Dados: dados) => void,
    setClassNameOfLoading: (className: string) => void,
}
interface responseData{
    erro: string,
    sucess: number,
}

const armazenaColeta = async (props: armazenaColetaProps) => {

    props.setClassNameOfLoading('loading true')

    const erro = await ValidaFormDeColetas({...{dados: props.dados, setDados: props.setDados, }});
    
    if (erro) {

        props.setMensagem(erro)
        props.setClassNameOfFeedback('erro')

    }else{

        try {

            if (props.editOrCreate === 'create') {
                
                await axios.post('http://192.168.18.154:3024/newColeta', props.dados);
    
                props.setMensagem('Coleta armazenada com sucesso!'); 
                props.setClassNameOfFeedback('sucesso')

                props.setDados({
                    cliente: '',
                    massa: '',
                    volume: '',
                    material: '',
                });

            }else if (props.editOrCreate === 'edit') {
                
                
                const response = await axios.put('http://192.168.18.154:3024/editColeta', props.dados);
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
