import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';

// Define the Post type based on actual schema
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  description?: string;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
  views?: number;
}

// Fetch posts from Sanity
async function getPosts(): Promise<Post[]> {
  const query = groq`
    *[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      author,
      description,
      category,
      image {
        asset-> {
          url
        }
      },
      views
    }
  `;
  
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-fahkwang font-bold mb-6">
            The latest from our world and beyond.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Read, watch and go deeper on what's happening with us and our work.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post._id} className="group">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:bg-gray-800 hover:scale-105">
                    {/* Post Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}
                    
                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-[#F4C42E] font-medium">
                          {post.category}
                        </span>
                        {post.views && (
                          <span className="text-xs text-gray-500">
                            {post.views} views
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-xl font-fahkwang font-bold mb-3 group-hover:text-[#F4C42E] transition-colors duration-300">
                        {post.title}
                      </h2>
                      
                      {post.description && (
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {post.description}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-fahkwang font-bold mb-4">No posts yet</h3>
            <p className="text-gray-400">Check back soon for our latest updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
