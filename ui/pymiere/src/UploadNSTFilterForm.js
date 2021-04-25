import React, { Component, useState } from 'react';
import { uploadFile } from 'react-s3';

const S3_BUCKET ='adobo-pymiere';
const REGION ='us-east-1';
const ACCESS_KEY ='AKIAYA22OMIBDDNHCQWM';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    dirName: "styles",
}

const UploadNSTFilterForm = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <div>Upload NST Style Filter</div>
        <input type="file" onChange={handleFileInput} accept="image/*"/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadNSTFilterForm;