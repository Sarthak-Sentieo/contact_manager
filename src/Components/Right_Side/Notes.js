import React from 'react';
import { SharedNotes} from './SharedNotes'

function Notes(props) {
    return (
        <div className='toggle2 ' ref={props.notesRef}>
           
            <div className='heading'>
                Existing Shared Notes
            </div>
            <div className='create'>
                <span><i className="fas fa-plus"></i> Create & Share New Note</span>
            </div>
            <div>
                {SharedNotes.map((sharednotes)=>{return(
                    <div className='notes'>
                    <li><span className='title2'>{sharednotes.title}</span><span className='icon'><i class="fas fa-external-link-alt"></i></span></li>
                    <div>
                    <span className='name'>{sharednotes.name}</span>

                    <span className='time1'>{sharednotes.date}</span>
                    </div>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default Notes;
