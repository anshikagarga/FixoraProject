
import services from '../data/services';
import { useParams, Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();

    const service = services.find(
        (item) => item.id === id
    );

    if (!service) {
        return (
            <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-purple-400">
                    Service Not Found
                </h1>
                <p className="text-gray-400 mt-3">
                    The service you are looking for does not exist.
                </p>
                <Link
                    to="/services"
                    className="mt-6 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-600 transition text-white"
                >
                    Explore Services
                </Link>
            </main>
        );
    }

    const features = [
        {
            icon: "🔍",
            title: "Precision Diagnosis",
            description: "Quickly identify issues and provide accurate repair solutions."
        },
        {
            icon: "🛡️",
            title: "Verified Professionals",
            description: "Connect with trusted and verified service professionals."
        },
        {
            icon: "💜",
            title: "Transparent Pricing",
            description: "Get reliable services at fair and transparent prices."
        }
    ];

    return (
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10">

            {/* Service Introduction */}
            <section className="rounded-2xl border border-purple-900 bg-gradient-to-br from-[#1b1029] to-[#090909] p-7 sm:p-10 mb-12">

                <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
                    FIXORA SERVICES
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
                    {service.icon} {service.title}
                </h1>

                <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">
                    {service.description}
                </p>

                <Link
                    to="/contact"
                    className="inline-block mt-7 px-7 py-3 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-semibold transition"
                    state={{selectedService: service}}
                >
                    Book This Service
                </Link>

            </section>

            {/* Available Work Types */}
            {service.workTypes && (
                <section className="mb-14">

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Available <span className="text-purple-400">Work Types</span>
                    </h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.workTypes.map((work, index) => (
                            <li
                                key={index}
                                className="p-5 rounded-xl border border-purple-900 bg-[#100c17] text-gray-200 flex items-center gap-3"
                            >
                                <span className="text-purple-400">✓</span>
                                {work}
                            </li>
                        ))}
                    </ul>

                </section>
            )}

            {/* Why Choose FIXORA */}
            <section className="py-8 mb-8">

                <div className="text-center mb-9">
                    <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
                        THE FIXORA ADVANTAGE
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                        Why Choose <span className="text-purple-400">FIXORA?</span>
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Quality service, trusted professionals and a better experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-6 rounded-2xl border border-purple-900 bg-gradient-to-br from-[#191022] to-[#0d0d0d] hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-3xl mb-5">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </section>

        </main>
    );
};

export default ServiceDetails;
