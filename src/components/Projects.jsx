import { useState } from "react";
import { motion } from "framer-motion"
import { PROJECTS } from "../constants"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const projectVariants = {
    hidden: {
        opacity: 0, y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.3
        }
    }
}

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 6;

    const filteredProjects = PROJECTS.filter(project => {
        const matchYear = selectedYear ? project.ano.includes(selectedYear) : true;
        const matchTag = selectedTag ? project.tag === selectedTag : true;
        return matchYear && matchTag;
    });

    const sortedProjects = filteredProjects.sort((a, b) => a.id - b.id);

    const nextPage = () => {
        if (currentPage < Math.floor(sortedProjects.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const paginatedProjects = sortedProjects.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

    return(
        <section className="px-6 py-10" id="producoes">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
                Produções
            </h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>
            <div className="mb-8 flex space-x-4">
                {/* Filtro por ano */}
                <select
                    className="p-2 border border-gray-300 rounded text-black"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="">Todos os Anos</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    {/* Adicione mais anos conforme necessário */}
                </select>

                {/* Filtro por tag */}
                <select
                    className="p-2 border border-gray-300 rounded text-black"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="">Todas as Produções</option>
                    <option value="Filme">Filme</option>
                    <option value="Série">Série</option>
                    <option value="Animação">Animação</option>
                    <option value="Novela">Novela</option>
                    <option value="Dorama">Dorama</option>
                    {/* Adicione mais tags conforme necessário */}
                </select>
            </div>
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`text-3xl ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
                    <RiArrowLeftSLine />
                </button>
                <span className="text-lg">
                    {currentPage + 1} de {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className={`text-3xl ${currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                    <RiArrowRightSLine />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {paginatedProjects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="relative rounded-lg overflow-hidden h-[500px] transition transform"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={projectVariants}>
                                <img src={project.image} 
                                    alt={project.name}
                                    className="absolute inset-0 w-[600px] h-[600px] object-cover transition-opacity duration-300"/>
                                <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white">
                                    <h2 className="text-2xl font-medium mb-4 uppercase p-2 rounded-lg bg-stone-900/40">
                                        {project.name}
                                    </h2>
                                    <div className="flex flex-col justify-between bg-stone-900/30 rounded-lg p-2">
                                        <p className="text-lg">
                                            {project.description}
                                        </p>
                                        <p className="text-lg">
                                            {project.season}
                                        </p>
                                        <p className="text-lg">
                                            {project.tipo}
                                        </p>
                                        <p className="text-lg">
                                            {project.disp}
                                        </p>
                                        <p className="text-lg">
                                            Ano: {project.ano}
                                        </p>
                                        <a href={project.link}
                                            target="_blank"
                                            rel="noopener norefferer"
                                            className="bg-white text-stone-900 rounded-full py-2 w-32 text-sm hover:bg-grey-100 text-center">
                                                {project.botao}
                                            </a>
                                    </div>
                                </div>
                        </motion.div>
                    ))}
            </div>
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`text-3xl ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
                    <RiArrowLeftSLine />
                </button>
                <span className="text-lg">
                    {currentPage + 1} de {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className={`text-3xl ${currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                    <RiArrowRightSLine />
                </button>
            </div>
        </section>
    )
}

export default Projects