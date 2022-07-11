import React, { useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Editor from './Editor';
import Split from 'react-split';
import { nanoid } from 'nanoid';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import { getFirestore, collection, getDocs} from 'firebase/firestore'
// const db = getFirestore();
// const collecRef = collection(db, 'notes');



function Notes() {
	console.log('1');
	const [notes, setNotes] = React.useState(
		() => JSON.parse(localStorage.getItem('notes'))
	)
	console.log('2');
	const [currentNoteId, setCurrentNoteId] = React.useState(
		(notes[0] && notes[0].id) || ''
	);
	console.log('3');
	React.useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes))
	}, [notes]);
	console.log('4');



    function dateGenerated() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const withSlashes = [year, month, day].join('/');
        return withSlashes;
    }

	function createNewNote() {
                const newNote = {
                    id: nanoid(),
                    body: "# Type your markdown note's title here",
                    created: dateGenerated()
                };
                setNotes((prevNotes) => [newNote, ...prevNotes]);
                setCurrentNoteId(newNote.id);
			}
		
    
	function updateNote(text) {
		setNotes((oldNotes) => {
			const newArray = [];
			for (let i = 0; i < oldNotes.length; i++) {
				if (oldNotes[i].id === currentNoteId) {
					newArray.unshift({ ...oldNotes[i], body: text, created: dateGenerated()  });
				} else {
					newArray.push(oldNotes[i]);
				}
			}
			return newArray;
		});
	}
    const navigate = useNavigate()
    useEffect(() => {
		if (notes.length > 0) {
			navigate(`${findCurrentNote().id}`);
		}
		if (notes.length === 0) {
			navigate('');
		}
	}, []);

	function findCurrentNote() {
       
		return (
			notes.find((note) => {
				return note.id === currentNoteId;
			}) || notes[0]
		);
	}

	function deleteNote(event, noteId) {
		event.stopPropagation();
		setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
	}


	return (
		<>
		<Navbar/ >
		<main>
			{notes.length > 0 ? (
				<Split sizes={[30, 70]} direction="horizontal" className="split">
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote={deleteNote}
                       
					/>
                    
					{currentNoteId && notes.length > 0 && (
						<Editor currentNote={findCurrentNote()} updateNote={updateNote} />
					)}
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button className="first-note" onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
		</>
	);
	}


	export default Notes
