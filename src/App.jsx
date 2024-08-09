import SimpleNoteForm from "./UI/AddNote"
import NotesApp from "./UI/home"



function App() {


  return (
    <>
      <NotesApp />
      <div className="pb-40">
      <SimpleNoteForm />

      </div>
    </>
  )
}

export default App
