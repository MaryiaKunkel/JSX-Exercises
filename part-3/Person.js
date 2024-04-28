const Person = (props) => (
  <div>
    <p>Learn some information about this person</p>
    <h3>{props.name.length > 8 ? `${props.name.slice(0, 6)}` : props.name}</h3>
    <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>

    <ul>
      Hobbies:
      {props.hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}
    </ul>
  </div>
);
