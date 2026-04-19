'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ImagePlus, Trash, X } from 'lucide-react';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    onRemove: (url: string) => void;
    disabled?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
    value,
    onChange,
    onRemove,
    disabled
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Hydration fix
    useState(() => {
        setIsMounted(true);
    });

    if (!isMounted) {
        return null;
    }

    const handleUpload = async (file: File) => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();
            onChange(data.url);
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Something went wrong with the upload.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled) {
            setIsDragging(true);
        }
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (disabled) return;

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            handleUpload(file);
        }
    };

    const handleClick = () => {
        if (!disabled) {
            fileInputRef.current?.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleUpload(file);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-4 flex items-center gap-4">
                {value && (
                    <div className="relative w-50 h-50 rounded-md overflow-hidden border border-gray-200">
                        <div className="absolute top-2 right-2 z-10">
                            <button
                                type="button"
                                onClick={() => onRemove(value)}
                                className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition shadow-sm"
                                disabled={disabled}
                            >
                                <Trash className="w-4 h-4" />
                            </button>
                        </div>
                        <Image
                            fill
                            className="object-cover"
                            alt="Image"
                            src={value}
                        />
                    </div>
                )}
            </div>

            {!value && (
                <div
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
            relative 
            border-2 
            border-dashed 
            rounded-lg 
            p-10 
            transition 
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-4 
            text-gray-500
            ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 hover:bg-gray-50'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
                >
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        disabled={disabled}
                    />
                    <div className="p-4 bg-gray-100 rounded-full">
                        {isLoading ? (
                            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <ImagePlus className="w-6 h-6" />
                        )}
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-sm">
                            {isLoading ? 'Uploading...' : 'Click or drag image to upload'}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Supports JPG, PNG, GIF
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
