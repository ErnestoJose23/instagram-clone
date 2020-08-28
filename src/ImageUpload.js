import React, { useState } from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      ></input>
      <input type="file" onChange={handleChange}></input>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
