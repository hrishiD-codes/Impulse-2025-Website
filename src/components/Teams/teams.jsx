import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import teamsData from "../../data/teams.json";

export default function Teams() {
    const [teamData, setTeamData] = useState({
        conveners: [],
        organizers: [],
        coordinators: [],
        developers: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load team data from imported JSON
    useEffect(() => {
        const loadTeamData = () => {
            try {
                setTeamData(teamsData);
            } catch (err) {
                setError('Failed to load team data');
            } finally {
                setLoading(false);
            }
        };

        // Simulate loading time for better UX
        setTimeout(loadTeamData, 500);
    }, []);

    const TeamCard = ({ member, index }) => (
        <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
        >
            <div className="relative overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
        </motion.div>
    );

    const TeamSection = ({ title, members, gradient }) => (
        <motion.section
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="text-center mb-8 sm:mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
                    {title}
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cus-violet to-cus-pink mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {members.map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                ))}
            </div>
        </motion.section>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-cus-violet/20 via-background to-cus-orange/20">
            {loading ? (
                // Loading state
                <div className="flex items-center justify-center min-h-screen">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cus-violet mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Loading our amazing team...</p>
                    </motion.div>
                </div>
            ) : error ? (
                // Error state
                <div className="flex items-center justify-center min-h-screen">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
                        <p className="text-xl text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-cus-violet text-white px-6 py-3 rounded-lg hover:bg-cus-violet/80 transition-colors duration-200"
                        >
                            Try Again
                        </button>
                    </motion.div>
                </div>
            ) : (
                // Main content
                <>
                    {/* Header */}
                    <motion.div
                        className="text-center pt-20 pb-16 px-8"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-cus-violet via-cus-pink to-cus-orange bg-clip-text text-transparent mb-6">
                            Meet Our Team
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The passionate individuals behind Impulse 2025. Our dedicated team works tirelessly to bring you an unforgettable cultural experience.
                        </p>
                    </motion.div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                        {/* Conveners Section */}
                        {teamData.conveners && teamData.conveners.length > 0 && (
                            <TeamSection
                                title="Faculty Conveners"
                                members={teamData.conveners}
                                gradient="from-cus-violet to-cus-pink"
                            />
                        )}

                        {/* Organizers Section */}
                        {teamData.organizers && teamData.organizers.length > 0 && (
                            <TeamSection
                                title="Event Organizers"
                                members={teamData.organizers}
                                gradient="from-cus-pink to-cus-orange"
                            />
                        )}

                        {/* Coordinators Section */}
                        {teamData.coordinators && teamData.coordinators.length > 0 && (
                            <TeamSection
                                title="Event Coordinators"
                                members={teamData.coordinators}
                                gradient="from-cus-orange to-hazel-green"
                            />
                        )}

                        {/* Developers Section */}
                        {teamData.developers && teamData.developers.length > 0 && (
                            <TeamSection
                                title="Development Team"
                                members={teamData.developers}
                                gradient="from-hazel-green to-cus-violet"
                            />
                        )}
                    </div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        className="bg-gradient-to-r from-cus-violet to-cus-pink py-16 mt-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-4xl mx-auto text-center px-8">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Want to Join Our Team?
                            </h3>
                            <p className="text-white/90 text-lg mb-8">
                                We're always looking for passionate individuals to help make Impulse even better.
                            </p>
                            <motion.button
                                className="bg-white text-cus-violet font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
}