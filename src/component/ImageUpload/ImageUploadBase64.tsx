import React, { useState } from 'react';
import './css/ImageUploadBase64.css'

const ImageUploadBase64: React.FC = () => {
    const [base64, setBase64] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Please upload a valid image file.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result as string);
                setError(null);
            };
            reader.onerror = () => {
                setError('Failed to read the file');
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {base64 && (
                <div>
                    <p>Base64 String:</p>
                    <textarea
                        value={base64}
                        readOnly
                        rows={10}
                        cols={50}
                        style={{ width: '100%' }}
                    />
                    <img src={base64} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploadBase64;
