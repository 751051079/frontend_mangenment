import React, { useState } from 'react';

const MultiImageUpload: React.FC = () => {
    const [base64Images, setBase64Images] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imagesArray: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (!file.type.startsWith('image/')) {
                    setError(`File ${file.name} is not a valid image.`);
                    return;
                }
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result as string;
                    imagesArray.push(base64);
                    if (imagesArray.length === files.length) {
                        setBase64Images(imagesArray);
                        setError(null);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {base64Images.map((base64, index) => (
                <div key={index}>
                    <p>Base64 String {index + 1}:</p>
                    <textarea
                        value={base64}
                        readOnly
                        rows={10}
                        cols={50}
                        style={{ width: '100%' }}
                    />
                    <img src={base64} alt={`Uploaded ${index}`} style={{ maxWidth: '100%', marginTop: '10px' }} />
                </div>
            ))}
        </div>
    );
};

export default MultiImageUpload;
