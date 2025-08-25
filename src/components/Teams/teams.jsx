import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import teamsData from "../../data/teams.json";

export default function Teams() {
    const TeamCard = ({ member }) => (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-white/20">
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4 text-sm sm:text-base">{member.position}</p>

                <div className="flex justify-center space-x-3 sm:space-x-4">
                    {member.social.linkedin && (
                        <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transform hover:scale-125 transition-all duration-200 p-2 rounded-full hover:bg-blue-50"
                            aria-label={`${member.name} LinkedIn`}
                        >
                            <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
                        </a>
                    )}
                    {member.social.instagram && (
                        <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-800 transform hover:scale-125 transition-all duration-200 p-2 rounded-full hover:bg-pink-50"
                            aria-label={`${member.name} Instagram`}
                        >
                            <FaInstagram size={18} className="sm:w-5 sm:h-5" />
                        </a>
                    )}
                    {member.social.github && (
                        <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-black transform hover:scale-125 transition-all duration-200 p-2 rounded-full hover:bg-gray-50"
                            aria-label={`${member.name} GitHub`}
                        >
                            <FaGithub size={18} className="sm:w-5 sm:h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    const TeamSection = ({ title, members, gradient }) => (
        <section className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
                    {title}
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cus-violet to-cus-pink mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {members.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>
        </section>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-cus-violet/20 via-background to-cus-orange/20 select-none">
            <div className="text-center pt-20 pb-16 px-8">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cus-violet via-cus-pink to-cus-orange bg-clip-text text-transparent mb-4">
                    Meet Our Team
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The passionate individuals behind Impulse 2K25 Success.
                </p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {teamsData.convener && teamsData.convener.length > 0 && (
                    <TeamSection
                        title="Faculty Convener"
                        members={teamsData.convener}
                        gradient="from-cus-violet to-cus-pink"
                    />
                )}
                
                {teamsData.coordinator && teamsData.coordinator.length > 0 && (
                    <TeamSection
                        title="Event Coordinator"
                        members={teamsData.coordinator}
                        gradient="from-cus-orange to-hazel-green"
                    />
                )}

                {teamsData.organizers && teamsData.organizers.length > 0 && (
                    <TeamSection
                        title="Event Organizers"
                        members={teamsData.organizers}
                        gradient="from-cus-pink to-cus-orange"
                    />
                )}
                
                {teamsData["head-coordinators"] && teamsData["head-coordinators"].length > 0 && (
                    <TeamSection
                        title="Head Coordinators"
                        members={teamsData["head-coordinators"]}
                        gradient="from-hazel-green to-cus-violet"
                    />
                )}
                
                {teamsData.developers && teamsData.developers.length > 0 && (
                    <TeamSection
                        title="Dev Team"
                        members={teamsData.developers}
                        gradient="from-cus-violet to-cus-pink"
                    />
                )}
            </div>
        </div>
    );
}