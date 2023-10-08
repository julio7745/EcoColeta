
import axios from "axios"

import ValidaFormDeColetas from "./validaFormDeColeta"

interface dados{
    cliente: string,
    massa: string,
    volume: string,
    material: string,
}
interface armazenaColetaProps {
    setMensagem: (mensagem: string) => void,
    setClassName: (className: string) => void,
    setExibirMensagem: (className: boolean) => void,
    setDados: (Dados: dados) => void,
    dados: dados,
    setClassNameOfLoading: (className: string) => void,
}

const armazenaColeta = async (props: armazenaColetaProps) => {

    props.setClassNameOfLoading('loading true')

    const erro = await ValidaFormDeColetas({...{dados: props.dados, setDados: props.setDados, }});
    
    if (erro) {

        props.setMensagem(erro)
        props.setClassName('erro')

    }else{

        try {

            await axios.post('http://192.168.18.154:3024/newColeta', props.dados);
    
            props.setMensagem('Coleta armazenada com sucesso!'); 
            props.setClassName('sucesso')

            props.setDados({
                cliente: '',
                massa: '',
                volume: '',
                material: '',
            });
    
        } catch (error) {
    
            props.setMensagem('Falha ao armazenar a coleta!'); 
            props.setClassName('erro')
            console.error('Erro ao armazenar coleta.', error);
    
        }
    }

    props.setExibirMensagem(true)
    props.setClassNameOfLoading('loading')

}

export default armazenaColeta;
