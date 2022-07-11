import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar(props) {
	const noteElements = props.notes.map((note) => (
		<Link to={note.id} key={note.id} className="note-wrapper">
			<div
				className={`title ${
					note.id === props.currentNote.id ? 'selected-note' : ''
				}`}
				onClick={() => {
					props.setCurrentNoteId(note.id);
				}}
			>
				<div className="note-info">
					<div className="upper">
						<h4 className="text-snippet">{note.body.split('\n')[0]}</h4>
						<span className='note-date'>{`written at ${note.created}`}</span>
					</div>
					<div className="bottom">
						<div className="title-desc">{note.body.split('\n').slice(1)}</div>
					</div>
				</div>
				<div className="note-trash">
					<button
						className="delete-btn"
						onClick={(event) => props.deleteNote(event, note.id)}
					>
						<i className="gg-trash trash-icon"></i>
					</button>
				</div>
			</div>
		</Link>
	));

	return (
		<section className="pane sidebar">
			<div className="sidebar--header">
				<h3>Notes</h3>
				<button className="new-note" onClick={props.newNote}>
					+
				</button>
			</div>
			{noteElements}
	
		</section>
	);
}
