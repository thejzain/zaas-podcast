
import { useState } from 'react';
import PocketBase from 'pocketbase';
const MAX_FILE_SIZE = 5242880;

function VideoUploadPage() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [File, setFile] = useState(null);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [speaker, setSpeaker] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSpeakerChange = (event) => {
        setSpeaker(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size > MAX_FILE_SIZE) {
            alert('File size is too large. Maximum allowed size is 5MB.');
        } else {
            setFile(file);
        }
    };


    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', File);
        formData.append('category',category);
        formData.append('type',type);
        formData.append("speaker",speaker)
        // formData.append('audios', audioFile);
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            const createdRecord = await pb.collection('media').create(formData, { headers });
            console.log('Media files uploaded successfully');
            console.log(createdRecord);
        } catch (error) {
            console.error('Error uploading media files', error);
        }
    };

    return (
        <div className="bg-gradient-to-tr from-[#141413] to-[#2A2B2A] h-screen justify-center text-white">
            <div className="grid justify-center border rounded-2xl p-11 w-96">
                <h1 className="text-2xl font-bold mb-4">Upload File</h1>
                <form >
                    <div className="m-5">
                        <input
                            type="text"
                            className="p-2 text-black rounded-2xl opacity-75 "
                            placeholder="Title"
                            value={title}
                            onChange={handleTitleChange}
                        ></input>
                    </div>
                    <div className="m-5">
                        <textarea
                            className="p-2 text-black rounded-2xl opacity-75"
                            placeholder="Description"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    <div className="m-5">
                        <input
                            type="text"
                            className="p-2 text-black rounded-2xl opacity-75 "
                            placeholder="Category"
                            value={category}
                            onChange={handleCategoryChange}
                        ></input>
                    </div>

                    <div className="m-5">
                        <label htmlFor="type">Type:</label>
                        <select
                            className="p-2 text-black rounded-2xl opacity-75"
                            value={type}
                            onChange={handleTypeChange}
                        >
                            <option value="">Select type</option>
                            <option value="audio">Audio</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div className="m-5">
                        <input
                            type="text"
                            className="p-2 text-black rounded-2xl opacity-75 "
                            placeholder="Speaker Name"
                            value={speaker}
                            onChange={handleSpeakerChange}
                        ></input>
                    </div>
                    <div className="m-5">
                        <label htmlFor="title">File:</label>
                        <input
                            type="file"
                            className="p-2 text-white rounded-2xl opacity-75"
                            onChange={handleFileChange}
                        ></input>
                    </div>
                    <div className="grid justify-center">
                        <div className="grid place-content-center">
                            <button
                                className="bg-slate-700 px-5 py-2 rounded-2xl"
                                onClick={handleSubmit}>
                                Upload
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default VideoUploadPage;