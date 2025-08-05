import type {StructureBuilder, StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S:StructureBuilder) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
