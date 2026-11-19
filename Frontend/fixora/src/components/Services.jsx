import ServiceCard from "./ServiceCard";

import services from "../data/services";

const Services = () => {
    return (
        <section className="services-section">

            <div className="services-heading">
                <h2>Our Services</h2>

                <p>
                    Find trusted professionals for all your everyday needs.
                </p>
            </div>

            <div className="services">

                {services.map((service) => (
                    <ServiceCard
                        id = {service.id}
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        workType = {service.workTypes}
                        
                    />
                ))}

            </div>

        </section>
    );
};

export default Services;