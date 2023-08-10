export default {
    name: 'inductee',
    type: 'document',
    title: 'Inductee',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'associated_business',
        type: 'string',
        title: 'Associated Business',
      },
      {
        name: 'interview_video_url',
        type: 'url',
        title: 'Interview Video URL',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'induction_year',
        type: 'number',
        title: 'Induction Year',
      },
      {
        name: 'videos',
        type: 'array',
        title: 'Videos',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                name: 'url',
                type: 'url',
                title: 'Video URL',
              },
            ],
          },
        ],
      },
    ],
  };