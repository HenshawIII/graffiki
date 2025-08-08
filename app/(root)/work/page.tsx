import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

// Define the Work type based on actual schema
interface Work {
  _id: string;
  title: string;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  };
  video?: {
    asset: {
      url: string;
    };
  };
  content?: string;
}

// Fetch works from Sanity
async function getWorks(): Promise<Work[]> {
  const query = groq`
    *[_type == "work"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      image {
        asset-> {
          url
        }
      },
      video {
        asset-> {
          url
        }
      },
      content
    }
  `;
  
  return client.fetch(query);
}

export default async function WorkPage() {
  const works = await getWorks();
  console.log(works);

  return (
    <div className="min-h-screen bg-black text-white pt-24 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 w-full p-6 ">
        {/* <div className="text-center mb-16">
          <AnimatedContent delay={100}>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Our Creative Portfolio
          </h1>
          </AnimatedContent>
          <AnimatedContent delay={200}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-fahkwang">
            Explore our latest projects and creative work.
            </p>
          </AnimatedContent>
        </div> */}

        {/* <hr className="border-gray-700 my-16" /> */}

        {/* Works Grid */}
        {works.length > 0 ? (
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-2 gap-4">
            {works.map((work) => (
              <article key={work._id} className="group h-full">
                <Link href={`/work/${work.slug.current}`}>
                                     <div className="overflow-hidden h-full transition-all duration-500">
                     {/* Work Video or Image */}
                     {work.video ? (
                       <div className="relative xl:h-screen md:h-[45vh] h-[50vh] overflow-hidden">
                         <video
                           src={work.video.asset.url}
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                           muted
                           loop
                           autoPlay
                           playsInline
                         />
                       </div>
                     ) : work.image && (
                       <div className="relative xl:h-screen md:h-[45vh] h-[50vh] overflow-hidden">
                         <Image
                           src={work.image.asset.url}
                           alt={work.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                       </div>
                     )}
                    
                    {/* Work Content */}
                    <div className="py-6">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-[#F4C42E] transition-colors duration-300">
                        {work.title}
                      </h2>
                      
                     
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-fahkwang font-bold mb-4">No works yet</h3>
            <p className="text-gray-400">Check back soon for our latest projects.</p>
          </div>
        )}
      </div>
      <footer className="mt-auto bg-black backdrop-blur-md border-t max-h-[100px] border-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/Logowhite.png" alt="Logo" width={100} height={100} />
          </div>
          
          {/* Social Media Icons */}    
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
             <Image src="/footFb.png" alt="" width={24} height={20} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Image src={"/footX.png"} alt='X' width={24} height={20}/>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Image src={"/footIg.png"} alt='X' width={24} height={20}/>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-300 hidden md:block">
            2025 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
