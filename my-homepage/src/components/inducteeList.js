import * as React from "react"
import { graphql } from "gatsby"

export default function Inductees(props) {
    return (
        <div>
            <p>hello world</p>
        </div>
    )
}

export const query = graphql`
    fragment inducteeListContent on inducteeList {
    id
    kicker
    content {
        id
        ...inducteeContent
    }
    }
`