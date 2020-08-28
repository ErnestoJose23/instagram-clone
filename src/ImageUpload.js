import React, { useState } from "react";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [ulr, setUrl] = useState("");

  return (
    <div>
      <h2>hola</h2>
      <input
        type="text"
        placefolder="Enter a caption..."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      ></input>
      <input type="file" onChange={handleChange}></input>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
