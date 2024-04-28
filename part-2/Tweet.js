const Tweet = (props) => (
  <div class="tweet">
    <p>Username: {props.username}</p>
    <p>Name: {props.name}</p>
    <p>Date: {props.date}</p>
    <p>Message: {props.message}</p>
  </div>
);
