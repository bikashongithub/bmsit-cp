import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'

const Blogs = () => {
    return (
        <div>
            <div className="mx-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-0">
                <BlogCard
                    link="https://medium.com/@developinggamer/how-i-made-my-github-profile-stand-out-d2d2bf6e98c7"
                    img="https://miro.medium.com/max/1400/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg"
                    category="Article"
                    title="How I made my Github profile stand out !"
                    description="GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects...."
                    writer="Armaan Jain"
                    t1="Tech"
                    t2="Programming"
                    t3="Code"
                />
            </div>
        </div>
    )
}

export default Blogs;
