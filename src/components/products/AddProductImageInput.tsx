import React from "react";
import { IconButton, Input } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface IProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}
export default function AddProductImageInput({ images, setImages }: IProps) {
  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(e.target.files || []);

    if (files && images.length + files.length <= 5) {
      setImages((prevImages) => [...prevImages, ...files]);
    } else {
      alert("You can only add up to 5 images.");
    }
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <div className="mb-2">
      {images.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Selected Images:</h4>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, i) => (
              <div key={i} className="border p-2 relative">
                <IconButton
                  onClick={() => deleteImage(i)}
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  <HighlightOffIcon />
                </IconButton>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${image.name}`}
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm text-gray-600 mt-2">{image.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <Input
        onChange={handleImages}
        type="file"
        inputProps={{ accept: "image/*", multiple: true }}
      />
    </div>
  );
}
