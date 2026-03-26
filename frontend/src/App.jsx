import Filter from "./components/Filter"
import MainLayout from "./layouts/MainLayout"
import AddNotePage from "./pages/AddNotePage"
import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import NoteDetailPage from "./pages/NoteDetailPage"
import EditNotePage from "./pages/EditNotePage"
import { useEffect, useState } from "react"
import api from "./api/axios"
import { toast, ToastContainer } from "react-toastify"
import ProtectedRoute from "./components/ProtectedRoute"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { logoutUser } from "./api/auth"
import LandingPage from "./pages/LandingPage"


function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState("All notes");
  const [searchText, setSearchText] = useState("");

  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const handleFilterText = (val) => {
    setFilterText(val);
  }

  const handleSearchText = (val) => {
    setSearchText(val);
  }

  const filteredNotes = notes
    .filter(note =>
      filterText === "All notes" || note.category === filterText
    )
    .filter(note =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.body.toLowerCase().includes(searchText.toLowerCase()) ||
      note.category.toLowerCase().includes(searchText.toLowerCase())
    );

  useEffect(() => {
    if (!token) {
      setNotes([]); // clear notes on logout
      return;
    }

    setIsLoading(true)
    api.get("/notes/")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));

  }, [token])

  const addNote = async (newNote) => {
    try {
      const res = await api.post("/notes/", newNote)
      setNotes(prev => [res.data, ...prev])
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
  const updateNote = async (data, slug) => {
    try {
      const res = await api.put(`/notes/${slug}/`, data);

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.slug === slug ? res.data : note
        )
      );

      toast.success("Note updated successfully");
      return res.data; // ✅ IMPORTANT
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  const deleteNote = async (slug) => {
    try {
      const res = await api.delete(`/notes/${slug}/`);
      setNotes(prevNotes => prevNotes.filter(note => note.slug !== slug));
      toast.success("Note deleted successfully");
      return res;
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete note");
      throw error;
    }
  };

  const handleLogin = (newToken) => setToken(newToken);
  const handleLogout = () => {
    logoutUser();
    setToken(null); // triggers notes clearing
  }

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage setToken={handleLogin} />} />
        <Route path="/register" element={<RegisterPage setToken={handleLogin}/>} />

        {/* protected routes */}
        <Route path="/app" element={
          <ProtectedRoute>
            <MainLayout searchText={searchText} handleSearchText={handleSearchText} logout={handleLogout} />
          </ProtectedRoute>
        }>
          <Route index element={<HomePage notes={filteredNotes} isLoading={isLoading} handleFilterText={handleFilterText} filterText={filterText} />} />
          <Route path="add-note" element={<AddNotePage addNote={addNote} />} />
          <Route path="edit-note/:slug" element={<EditNotePage updateNote={updateNote} />} />
          <Route path="notes/:slug" element={<NoteDetailPage deleteNote={deleteNote} />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App

