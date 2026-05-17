import Link from 'next/link';
import React from 'react'

export default function BlogsPage() {
  const blogs=[
  {
    "id": 1,
    "title": "Getting Started with JavaScript",
    "author": "John Doe",
    "date": "2026-03-10",
    "category": "Programming",
    "content": "JavaScript is a powerful language used for web development. In this blog, we explore the basics...",
    "tags": ["JavaScript", "Web Development", "Beginner"],
    "views": 1200
  },
  {
    "id": 2,
    "title": "10 Tips for Healthy Living",
    "author": "Sarah Lee",
    "date": "2026-02-25",
    "category": "Health",
    "content": "Maintaining a healthy lifestyle doesn't have to be difficult. Here are 10 simple tips...",
    "tags": ["Health", "Lifestyle", "Wellness"],
    "views": 980
  },
  {
    "id": 3,
    "title": "Top Travel Destinations in 2026",
    "author": "Michael Smith",
    "date": "2026-01-15",
    "category": "Travel",
    "content": "Looking for your next adventure? Here are the top travel destinations you should consider...",
    "tags": ["Travel", "Adventure", "Tourism"],
    "views": 1500
  },
  {
    "id": 4,
    "title": "Understanding Artificial Intelligence",
    "author": "Emily Johnson",
    "date": "2026-03-30",
    "category": "Technology",
    "content": "Artificial Intelligence is transforming industries. This blog explains the core concepts...",
    "tags": ["AI", "Machine Learning", "Technology"],
    "views": 2000
  }
];
    
  
  return (
 <>
    <div>
       <h2 className='text-xl font-bold mb-4'>Blogs</h2>
        {blogs.map(blog=> <div key={blog.id}>
        
        <h3 className='text-4xl font-bold mb-2'>{blog.title}</h3>
        <Link href={`/blogs/${blog.id}`}>Show Details</Link>
         </div>)}
    </div>
 </>
  );
}

