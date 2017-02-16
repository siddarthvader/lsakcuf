
function getGreeting(user) {
  return <h1> hello, {formatName(user)}  </h1>
}

function formatName(user) {
  return user.firstName + ' my name is ' + user.lastName;
}


const user = {
  firstName: "Sid",
  lastName: "Jain"
}

const element=(
  <div>
  <h1> This is growing </h1>
  <p>react is new {getGreeting(user)}</p>
  </div>
);


ReactDOM.render(
  element,
  document.getElementById('root')
);