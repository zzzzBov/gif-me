export interface IImages {
  downsized: ISizedImage
  downsized_large: ISizedImage
  downsized_medium: ISizedImage
  downsized_small: ISizedImage
  downsized_still: IImg
  fixed_height: IImage
  fixed_height_downsampled: IDownsampledImage
  fixed_height_small: IImage
  fixed_height_small_still: IImg
  fixed_height_still: IImg
  fixed_width: IImage
  fixed_width_small: IImage
  fixed_width_small_still: IImg
  fixed_width_still: IImg
  fixed_width_downsampled: IDownsampledImage
  looping: ILoopingImage
  original: IOriginalImage
  original_still: IImg
  preview: IPreview
  preview_gif: IImg
}

interface IDimension {
  height: string
  width: string
}

interface IImg extends IDimension {
  url: string
}

interface ISize {
  size: string
}

interface IMp4 {
  mp4: string
  mp4_size: string
}

interface IWebp {
  webp: string
  webp_size: string
}

interface ISizedImage extends IImg, ISize {}

interface IImage extends ISizedImage, IMp4, IWebp {}

interface IDownsampledImage extends ISizedImage, IWebp {}

interface ILoopingImage {
  mp4: string
}

interface IOriginalImage extends IImage {
  frames: string
}

interface IPreview extends IDimension, IMp4 {}
