
function getGreeting(user) {
  return React.createElement(
    "h1",
    null,
    " hello, ",
    formatName(user),
    "  "
  );
}

function formatName(user) {
  return user.firstName + ' my name is ' + user.lastName;
}

const user = {
  firstName: "Sid",
  lastName: "Jain"
};

const element = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " This is growing "
  ),
  React.createElement(
    "p",
    null,
    "react is new ",
    getGreeting(user)
  )
);

ReactDOM.render(element, document.getElementById('root'));