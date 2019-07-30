import { IImages } from './IImages'
import { IUser } from './IUser'

export interface IGIF {
  bitly_url: string
  create_datetime: string
  embed_url: string
  id: string
  images: IImages
  import_datetime: string
  slug: string
  source: string
  source_post_url: string
  source_tld: string
  title: string
  trending_datetime: string
  type: string
  update_datetime: string
  url: string
  user: IUser
  username: string
}
