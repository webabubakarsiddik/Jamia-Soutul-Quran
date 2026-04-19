'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/ui/image-upload';
import { Copy, Check } from 'lucide-react';

export default function TestUploadPage() {
    const [imageUrl, setImageUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(imageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                    Image Upload Test
                </h1>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Upload an Image
                        </label>
                        <ImageUpload
                            value={imageUrl}
                            onChange={(url) => setImageUrl(url)}
                            onRemove={() => setImageUrl('')}
                        />
                    </div>

                    {imageUrl && (
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 break-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-gray-500 uppercase">
                                    Uploaded URL
                                </span>
                                <button
                                    onClick={onCopy}
                                    className="p-1 hover:bg-gray-200 rounded-full transition"
                                    title="Copy URL"
                                >
                                    {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                                </button>
                            </div>
                            <code className="text-xs text-blue-600 font-mono">
                                {imageUrl}
                            </code>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
