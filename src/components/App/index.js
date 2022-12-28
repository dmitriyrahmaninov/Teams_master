import { Context } from "../../context";
import NavBar from "../NavBar";
import { Routes, Route} from 'react-router-dom';
import AddForm from "../../pages/AddForm";
import ListTeams from "../../pages/ListTeams";
import { useEffect, useState } from 'react';


function App() {

  const [users, _setUser] = useState([]);
  
  const setUser = (state) => {
    _setUser(state);
    localStorage.setItem('users', JSON.stringify(state));
  }

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) ?? [];
    setUser(users);
  }, []);

  const [teams, _setTeams] = useState([]);

  const setTeams = (state) => {
    _setTeams(state);
    localStorage.setItem('teams', JSON.stringify(state))
  }

  useEffect(() => {
    const teams = JSON.parse(localStorage.getItem('teams')) ?? [];
    setTeams(teams);
  }, []);

  const addTeams = (title_teams) => {
    const cur_teams = teams.map(team => team.title);
    console.log(cur_teams);
    if (cur_teams.includes(title_teams)) {
      setTeams([...teams]);
    } else {
      setTeams([...teams,
      {
        id: Date.now(),
        title: title_teams
      }])
      console.log(teams);
    }
  }

  const addUser = (name, title) => {
    setUser([...users, 
      {
        id: Date.now(),
        name,
        title
      } 
  ])
}

  return (
    <Context.Provider value={{addUser, addTeams}}>
      <>
        <NavBar />
              <div >
                  <Routes>
                      <Route path='/form' element={<AddForm teams={teams} />} />
                      <Route path='/list' element={<ListTeams users={users} />} />
                  </Routes>
              </div>
      </>
    </Context.Provider>
  );
}

export default App;
