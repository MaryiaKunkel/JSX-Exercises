const Person = (props) => (
  <div>
    <p>Learn some information about this person</p>
    <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
    <h3>{props.name.length > 8 ? `${props.name.splice(0, 8)}` : props.name}</h3>
    <ul>
      {props.hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}
    </ul>
  </div>
);
