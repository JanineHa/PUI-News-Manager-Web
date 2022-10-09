export interface Article {
  id?: number;
  title: string;
  subtitle: string;
  category: string;
  abstract: string;
  body?: string;
  image_media_type?: string;
  image_data?: string;
  thumbnail_image?: string;
  thumbnail_media_type?: string;
}
