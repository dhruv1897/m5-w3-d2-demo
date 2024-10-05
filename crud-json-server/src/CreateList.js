import React from 'react';

function CreateList({ singleData, handleChange, createList }) {
    return (
        <div>
            <input
                type="text"
                name="title"
                value={singleData.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name="author"
                value={singleData.author}
                onChange={handleChange}
                placeholder="Author"
            />
            <button className="btn btn-success" onClick={createList}>
                Save
            </button>
        </div>
    );
}

export default CreateList;
