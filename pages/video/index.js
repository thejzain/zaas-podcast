
import { useState } from 'react';
import PocketBase from 'pocketbase';
const MAX_FILE_SIZE = 5242880;

function VideoUploadPage() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleVideoFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size > MAX_FILE_SIZE) {
            alert('File size is too large. Maximum allowed size is 5MB.');
        } else {
            setVideoFile(file);
        }
    };
    const handleAudioFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size > MAX_FILE_SIZE) {
            alert('File size is too large. Maximum allowed size is 5MB.');
        } else {
            setAudioFile(file);
        }
    };
    

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('videos', videoFile);
    formData.append('audios', audioFile);
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
                <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
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
                    <label htmlFor="title">Video File:</label>
                        <input
                            type="file"
                            accept="video/*"
                            className="p-2 text-white rounded-2xl opacity-75"
                            onChange={handleVideoFileChange}
                        ></input>
                    </div>
                    <div className="m-5">
                    <label htmlFor="title">Audio File:</label>
                        <input
                            type="file"
                            accept="audio/*"
                            className="p-2 text-white rounded-2xl opacity-75"
                            onChange={handleAudioFileChange}
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