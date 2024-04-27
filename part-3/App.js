const App = () => (
  <div>
    <Person name="John" age={17} hobbies={["socker", "fishing", "reading"]} />
    <Person
      name="Lindsay"
      age={19}
      hobbies={["tennis", "camping", "cooking"]}
    />
    <Person
      name="Christopher"
      age={30}
      hobbies={["hockey", "cars", "cleaning"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
