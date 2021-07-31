import React, { Component } from 'react'
import ThreeLayout from './ThreeLayout'

export default class App extends Component {
    render() {
        return (
            <ThreeLayout leftContent={'left content'} rightContent={'rightContent'} gap={20}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio dignissimos dolore labore, vero quasi reprehenderit. Repellat sint, aspernatur fuga eligendi dolor impedit necessitatibus perferendis numquam, voluptatem sequi minima assumenda vero molestias dolores quis quae aliquid? Dolor quos dignissimos accusamus natus iste voluptate dolorum quas, possimus reprehenderit optio, facilis nulla!
            </ThreeLayout>
        )
    }
}
