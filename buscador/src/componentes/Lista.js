export default function Lista(props){
    let l = props.ciudades;
    const obj = l.map((e, index)=>{
        return (<li key={index}>{e}</li>);
    })
    return(<><ol>{obj}</ol></>)
}