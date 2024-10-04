import React, { useState, useEffect } from "react";
import Lists from "./Lists";
import CreateList from "./CreateList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [alldata, setAlldata] = useState([]);
    const [singleData, setSingleData] = useState({ title: "", author: "" });

    const getLists = () => {
        setLoading(true);
        fetch("http://localhost:5000/posts")
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                setAlldata(result);
            })
            .catch(console.log);
    };

    const getList = (id) => {
        setSingleData({ title: "Loading....", author: "Loading...." });
        fetch("http://localhost:5000/posts/" + id)
            .then(res => res.json())
            .then(result => {
                setSingleData({
                    title: result.title,
                    author: result.author ? result.author : ""
                });
            });
    };

    useEffect(() => {
        getLists();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSingleData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const createList = () => {
        fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleData)
        }).then(() => {
            setSingleData({ title: "", author: "" });
            getLists();
        });
    };

    const updateList = (id) => {
        fetch("http://localhost:5000/posts/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleData)
        })
            .then(res => res.json())
            .then(() => {
                setSingleData({ title: "", author: "" });
                getLists();
            });
    };

    const deleteList = (id) => {
        fetch("http://localhost:5000/posts/" + id, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => {
                setSingleData({ title: "", author: "" });
                getLists();
            });
    };

    const listTable = loading ? (
        <span>Loading Data...... Please be patient.</span>
    ) : (
        <Lists
            alldata={alldata}
            singleData={singleData}
            getList={getList}
            updateList={updateList}
            deleteList={deleteList}
            handleChange={handleChange}
        />
    );

    return (
        <div className="container">
            <span className="title-bar">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={getLists}
                >
                    Get Lists
                </button>
                <CreateList
                    singleData={singleData}
                    handleChange={handleChange}
                    createList={createList}
                />
                <button className="btn btn-primary" onClick={createList}>
                    Create List
                </button>
            </span>
            {listTable}
        </div>
    );
}

export default App;
