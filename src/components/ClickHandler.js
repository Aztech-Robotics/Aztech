export const ClickHandler= ()=>{
const clickHandler=(event, count=1)=>{
    console.log('ClickHandler?', count, event)
}
    return(
        <div>
            <button onClick={clickHandler}>Button ClickHandler</button>
            <button onClick={(event)=> clickHandler(event, 5)}>Button ClickHandler</button>

        </div>
    )
}