
interface dados{
    cliente: string,
    massa: string,
    volume: string,
    material: string,
    _id: string,
}
interface ValidaFormDeColetasProps {
    dados: dados
}

const ValidaFormDeColetas = (props: ValidaFormDeColetasProps) => {
    
    const newcliente = formatText(props.dados.cliente)
    if (newcliente.length <= 0) {
        return 'Deve conter um nome de cliente válido.';
    }

    const newMaterial = formatText(props.dados.material)
    if (newMaterial.length <= 0) {
        return 'Deve conter um nome de material válido.';
    }

    if (/[^0-9.]/.test(props.dados.massa)) {
        return 'Massa deve conter apenas números e "." .';
    }
    if (props.dados.massa.length <= 0) {
        return 'Deve conter uma massa válida.';
    }

    if (/[^0-9.]/.test(props.dados.volume)) {
        return 'Volume deve conter apenas números e "." .';
    }
    if (props.dados.volume.length <= 0) {
        return 'Deve conter um volume válido.';
    }

    return null;    

}

function formatText(texto: string) {

    return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
    
}

export default ValidaFormDeColetas;