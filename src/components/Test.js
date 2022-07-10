export function Test(props) {
  return (
    <div>
      <h1>
        Hola mundo function 1 {props.name}---{props.grupo}
      </h1>
      {props.children}
    </div>
  );
}

export const Test2 = (props) => {
  return (
    <div>
      <h1>
        Hola mundo arrowfunction 2 {props.name}---{props.grupo}
      </h1>
      {props.children}
    </div>
  );
};
// export default Test
