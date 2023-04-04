import { Link } from "react-router-dom"

function Notes({notes, page}){
    const notes_links = notes ? (notes.map((note)=>{
        return (
            <Link key={note.id} to={`/note/${note.id}`}>
                {note.heading}
            </Link>
        )
    })): []
    return(
        <div className="NOTES">
            <h2 className="page-heading">{page}</h2>
            <div className="note-links">
                {notes_links}
            </div>
        </div>
    )
}
export {Notes}