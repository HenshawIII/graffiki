import {defineField, defineType} from 'sanity'

export const post = defineType({
    name: "post",
    title: "Post",
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
            name: "author",
            type: "string",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.required().min(1).max(20).error("Category must be between 1 and 20 characters"),
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

    ],
})