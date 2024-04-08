//se importa aca, en js 
import'./task.css'

//estilos dos formas de hacerlo
export function TaskCard(){
    return <div style={{background:'#202020', color: '#fff', padding: '20px'}}>
        <h1 style={{fontWeight:'lighter'}}>Mi primer tarea</h1>
        <p>Tarea realizada</p>
    </div>
}

function TaskCardOne(){

    const cardStyles = {background: '#202020', color: '#fff', padding: '10px'}
    const titleStyle = { fontWeight: 'bold'}
    return (
        <div style={cardStyles}>
            <h1>Mi primer tarea</h1>
            <p style={titleStyle}>Tarea realizada</p>
        </div>
    )
}
//creo que no se usa mucho así pero bueno aprendiendo a como hacerlo

//OTRA FORMA DE AÑADIR ESTILOS::
//creo el archivo de css y lo importo acá arriba
//no se usa class, se utiliza className
function TaskCardTwo(){

    
    return (
        <div className='card'>
            <h1>Mi primer tarea</h1>
            <p>Tarea realizada</p>
        </div>
    )
}

function TaskCardThree({ready}){
    return (
        <div>
            <h1>Mi primer tarea</h1>
            <span style={ ready ? {background: 'green'} : {background: 'violet'}}>
                {ready ? 'Tarea realizada' : 'Tarea pendiente'}
            </span>
        </div>
    );
}
