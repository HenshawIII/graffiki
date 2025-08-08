import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post' 
import { work } from './work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, work],
}
