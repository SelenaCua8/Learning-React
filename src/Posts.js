import { VscBug } from 'react-icons/vsc'


export const Post = () =>{
return <button onClick={() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}}>
    <VscBug/>
    Traer datos
</button>
}
//como traer ICONOS REACT ICONS !!!! ACÁ EL EJEMPLO
//async await, promesas, callbacks de JS
//otra forma de traer datos y la otra forma comun es recorrer este arreglo