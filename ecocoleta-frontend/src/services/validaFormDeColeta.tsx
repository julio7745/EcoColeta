
interface ColetaFace {
    massa: string,
    volume: string,
    cliente: string,
    material: string,
}
interface ValidaFormDeColetasProps {
    coleta: ColetaFace
    setDados: (_: ColetaFace) => void,
}

const ValidaFormDeColetas = (props: ValidaFormDeColetasProps) => {

    const newcliente = formatText(props.coleta.cliente)
    if (newcliente.length <= 0) {
        return 'Deve conter um nome de cliente válido.';
    }

    const newMaterial = formatText(props.coleta.material)
    if (newMaterial.length <= 0) {
        return 'Deve conter um nome de material válido.';
    }

    if (/[^0-9.]/.test(props.coleta.massa)) {
        return 'Massa deve conter apenas números e "." .';
    }
    if (props.coleta.massa.length <= 0) {
        return 'Deve conter uma massa válida.';
    }

    if (/[^0-9.]/.test(props.coleta.volume)) {
        return 'Volume deve conter apenas números e "." .';
    }
    if (props.coleta.volume.length <= 0) {
        return 'Deve conter um volume válido.';
    }

    props.setDados({
        ...props.coleta,
        cliente: newcliente,
        material: newMaterial,
    });

    return null;    

}

function formatText(texto: string) {

    return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
    
}

export default ValidaFormDeColetas;
