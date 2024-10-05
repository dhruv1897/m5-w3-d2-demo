import React from 'react';

function Lists({ alldata, getList, updateList, deleteList }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {alldata.map(item => (
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={() => getList(item._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteList(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Lists;
