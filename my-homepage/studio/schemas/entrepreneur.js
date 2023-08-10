export default {
    name: 'entrepreneur',
    type: 'document',
    title: 'Entrepreneur',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        // {
        //     name: 'description',
        //     type: 'text',
        //     title: 'Description',
        // },
        {
            name: 'associated_business',
            type: 'string',
            title: 'Associated Business',
        },

        {
            name: 'image_url',
            type: 'url',
            title: 'Image URL',
        },
        {
            name: "linkedin_url",
            type: 'url',
            title: 'LinkedIn URL'
        }
    ],
};