import UserList from "./UserList";

const App = () => {

  const users = [{id: 1, name: "ali", email:"ali@gmail.com"},
    {id: 2, name: "ahmed", email:"ahmed@gmail.com"}
  ]
  return (
    <>
   <UserList users={users}/>
    </>
  )
}

export default App;