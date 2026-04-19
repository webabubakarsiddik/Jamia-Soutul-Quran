import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
}

/**
 * Uploads a file buffer to Cloudinary
 */
export const uploadToCloudinary = (
  fileBuffer: Buffer,
  folder: string = 'madrasatu-ahmad'
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          if (!result) {
            reject(new Error('Cloudinary upload failed: No result returned'));
            return;
          }
          resolve(result as unknown as CloudinaryUploadResult);
        }
      )
      .end(fileBuffer);
  });
};

/**
 * Deletes an image from Cloudinary
 */
export const deleteFromCloudinary = async (publicId: string): Promise<any> => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
};
