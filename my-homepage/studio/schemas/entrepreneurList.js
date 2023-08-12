export default {
    name: "entrepreneurList",
    title: "Entrepreneur List",
    type: "document",
    fields: [
        { title: "Heading", name: "heading", type: "string" },
        { title: "Kicker", name: "kicker", type: "string" },
        {
            title: "Content",
            name: "content",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "entrepreneur" }],
                },
            ],
        },
    ],
}