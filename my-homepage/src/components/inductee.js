import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function inductee(props) {
    return (
        <div>
            <p>hello world inductee</p>
        </div>
    )
}

export const query = graphql`
fragment inducteeContent on Inductee {
    id
    name
    description
    associated business
    interview video url
    image {
        id
        gatsbyImageData
    }
    videos {
        id
        name
        url
    }
}
`