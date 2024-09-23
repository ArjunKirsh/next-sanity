import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props={
    params:{project:string}
}

const  Project = async ({params}:Props) => {
    const slug=params.project;
    const project =await getProject(slug);
    
    return (
        <div className="max-w-3xl mx-auto py-20">
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-orange-400 vai-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow-lg">  
                     {project.name}</h1>
                <a className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition" href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                >View Project</a>
            </header>
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content}/>
                <Image 
                src={project.image}
                alt={project.name}
                className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
                width={1820}
                height={980}
                />
            </div>
         
        </div>
    );
}

export default Project