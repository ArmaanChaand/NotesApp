function NewNote(){
    return(
        <div className="NEWNOTE">
            <h2 className="page-heading">Create a New Note</h2>
            <form onSubmit={(e)=>e.preventDefault()} className="create-note">
                <label htmlFor="noteHeading">Heading</label>
                <input 
                    type="text"
                    className="noteHeading"
                    name="noteHeading"
                    id="noteHeading"
                />
                <label htmlFor="noteBody">Body</label>
                <textarea
                    className="noteBody"
                    name="noteBody"
                    id="noteBody"
                />
                <button type="submit">Create Note</button>
            </form>
        </div>
    )
}
export {NewNote}