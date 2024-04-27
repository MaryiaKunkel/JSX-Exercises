const App = () => (
  <div>
    <Tweet username="Cat" name="Maria" date="01.01.2024" message="Hello" />
    <Tweet username="Dog" name="Carlos" date="01.02.2024" message="Ola" />
    <Tweet username="Bird" name="Nikolas" date="01.03.2024" message="Hola" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
