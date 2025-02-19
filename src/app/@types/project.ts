import type { LinkType } from "./link"
import type { TechType } from "./tech"
import type { Types } from "./type"

export type ProjectType = {
  name: string
  type: Types[]
  description: string
  links: LinkType
  techs: TechType[]
}