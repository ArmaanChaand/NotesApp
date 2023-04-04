import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NotFound } from "./404"

function Note({notes}){
    const {id} = useParams()
    const [theNote, setTheNote] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        const the_note = notes.length !== 0 && notes.filter((note) => note.id === parseInt(id))
        setTheNote(the_note[0])
    }, [notes, id])

    return (
        <>
            {theNote ?
            <div className="NOTE">
                <button className="goBack" onClick={()=>navigate(-1)}>Go Back</button>
                <div className="note-section">
                    <h2 className="page-heading">{theNote.heading}</h2>
                    <p className="note-body">{theNote.body}</p>
                </div>
            </div>
            : <NotFound /> }
        </>
    )
}
export {Note}