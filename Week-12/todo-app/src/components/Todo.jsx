import React, {useState} from 'react';

function Todo (props) {
    const todoId = props.data.id;
    const [editTodoText, setEditTodoText] = useState(props.data.title);
    const [enableEdit, setEnableEdit] = useState(false);
    return(
        <div className="todo">
            <div className="d-flex">
                {
                    enableEdit ? 
                    <input className="form-control w-75" onChange={(e) => setEditTodoText(e.target.value)} value={editTodoText}/>
                    : <>
                        <input type="checkbox" className="form-check-input mx-2" onChange={() => props.complete(todoId)}/>
                        <p>
                            {props.data.title}
                        </p>
                    </>
                }

            </div>
            <div className="actions">
                {
                    enableEdit ?
                    <>
                      <button type="button" className='btn btn-sm btn-danger' onClick={(e) => setEditTodoText('')} disabled={editTodoText==""}>Clear</button>
                      <button type="button" className="btn btn-sm btn-success" disabled={editTodoText==""} onClick={() => setEnableEdit(false) || props.edit(todoId, editTodoText)}>Save</button>
                    </>
                    :
                    <>
                        <button type="button" className="btn btn-sm btn-warning" onClick={() => setEnableEdit(!enableEdit)}>Edit</button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => props.delete(todoId)}>Delete</button>
                    </>
                }
            </div>
        </div>
    )
}
export default Todo