import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
    src: string;
    alt?: string;
    placeholder: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt = '', placeholder }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const currentImage = imageRef.current;

        if (currentImage) {
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(123)
                    if (entry.isIntersecting) {
                        setImageSrc(src);
                        observer?.unobserve(currentImage);
                    }
                });
            });

            observer.observe(currentImage);
        }

        return () => {
            if (observer && currentImage) {
                observer.unobserve(currentImage);
            }
        };
    }, [src]);

    return <img ref={imageRef} src={imageSrc} alt={alt} />;
};

export default LazyImage;