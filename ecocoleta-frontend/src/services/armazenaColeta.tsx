
import axios from "axios"

import ValiaFormDeColetas from "./validaFormDeColeta"

interface dados{
    cliente: string,
    massa: string,
    volume: string,
    material: string,
}

interface armazenaColetaProps {
    setMensagem: (mensagem: string) => void,
    setClassName: (className: string) => void,
    setDados: (Dados: dados) => void,
    setExibirMensagem: (className: boolean) => void,
    dados: dados
}

const armazenaColeta = async (props: armazenaColetaProps) => {

    const erros = ValiaFormDeColetas(props.dados)
    
    try {

        await axios.post('http://192.168.18.154:3024/newColeta', props.dados);

        props.setMensagem('Coleta armazenada com sucesso!'); 
        props.setClassName('sucesso')

    } catch (error) {

        props.setMensagem('Falha ao armazenar a coleta!'); 
        props.setClassName('erro')
        console.error('Erro ao armazenar coleta.', error);

    }

    props.setDados({
        cliente: '',
        massa: '',
        volume: '',
        material: '',
    });
    props.setExibirMensagem(true)

}

export default armazenaColeta;