import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Button } from './components/Button';
import { NewNote } from './components/NewNote';
import { Start } from './components/Start';
import { Notes } from './components/Notes';
import { Note } from './components/Note';
import { notes_all } from './components/notes_array';
import { NotFound } from './components/404';
import { Login } from './components/Login';
import { Register } from './components/Register';
import {FaSignInAlt, FaUserPlus} from "react-icons/fa"
import {TbNotes} from 'react-icons/tb'
import {CgNotes} from 'react-icons/cg'
import {BsJournalPlus} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'

function App() {
  const [user, setUser] = useState()
  const [allnotes, setAllnotes] = useState([])
  useEffect(()=>{
    setUser(
      {
        username: 'ArmaanChaand',
        name: "Armaan Chaand",
        is_Authenticated:false,
        notes: 20,
        complete:15,
        incomplete:5,
      }
    )
    setAllnotes(notes_all)
  }, [])
  const notes = user ? allnotes.filter((note)=> note.maker === user.username) : undefined
  return (
    <main className="MAIN">
      <div className='top-bar'>
        <h1>Django <span>X</span> React</h1>
        <p>Notes App</p>
      </div>
      <div className='body'>
        <nav className='nav'>
          <Button to="/" name='Home' icon={<HiHome/>}/>
          <Button to="/newnote" name='New Note' icon={<BsJournalPlus/>} />
          <Button to="/notes" name='My Notes' icon={<TbNotes/>} />
          <Button to="/allnotes" name='All Notes' icon={<CgNotes/>}/>
          <Button to="/login" name='Log in' icon={<FaSignInAlt />} />
          <Button to="/register" name='Register' icon={<FaUserPlus />} />
        </nav>
        <section className='content'>
          <Routes>
            <Route path='/' element={
              <Start 
                user={user}
              />
            } />
            <Route path='/newnote/' element={<NewNote/>}/>
            <Route path='/notes/' element={
                <Notes
                  notes={notes}
                  page="My Notes"
                />
            }/>
            <Route path='/allnotes/' element={
                <Notes
                  notes={allnotes}
                  page="All Notes"
                />
            }/>
            <Route path='/note/:id/' element={
                <Note
                  notes={allnotes}
                />
            }/>
            <Route path='/login/' element={
                <Login/>
            } />
            <Route path='/register/' element={
                <Register/>
            } />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;
