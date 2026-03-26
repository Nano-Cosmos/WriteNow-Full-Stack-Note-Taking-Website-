import Loader from "./Loader"
import NoteCard from "./NoteCard"

const NoteCardContainer = ({ notes, isLoading }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#0f172a",   // dark app background
        minHeight: "100vh",
        paddingTop: "30px",
        paddingBottom: "40px"
      }}
    >
      <div className="note-has-grid row">
        {isLoading && <Loader isLoading={isLoading} />}
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}

export default NoteCardContainer
