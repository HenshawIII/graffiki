import {defineField, defineType} from 'sanity'

export const work = defineType({
    name: "work",
    title: "Work",
    type: "document",
    fields: [

        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (Rule) => Rule.required().error("Image is required"),
        }),
        defineField({
            name: "content",
            type: "markdown",
        }),
        defineField({
            name:"video",
            type: "file",
            options: {
                accept: "video/*",
            },
        }),


    ],
})