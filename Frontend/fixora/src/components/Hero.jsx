
import { useState } from "react";
import services from "../data/services";


const Hero = ({ selectedService, setSelectedService }) => {

    const [description, setDescription] = useState("");
    const [result, setResult] = useState(null);

    const cardWidth = result
        ? Math.min(240 + result.description.length * 2, 420)
        : 240;


    const handleService = (e) => {
        e.preventDefault();
        const serviceQuery = selectedService.trim();

        if(!serviceQuery){
            setResult(null);
            return;
            }

        const matchedServices = services.filter(
            (item) => item.title.toLowerCase().includes(serviceQuery.toLowerCase())
            
        );
        

        if (matchedServices.length > 0) {
            setResult({
                services: matchedServices,
                query: serviceQuery,
                description: description,
                status: "found"
            })
        } else {
            setResult({
                services: [],
                query: serviceQuery,
                description: description,
                status: "not found",
            })
        }

        console.log("Service:", serviceQuery);
        console.log("Description:", description);


        setSelectedService("");

        setDescription("");
    };

    return (
        <section className="hero">

            <div className="hero-text">

                <h1 className="text">
                    Find the Right Service for Your Problem
                </h1>

                <p className="hero-description">
                    Find trusted professionals for your everyday needs.
                    Search for the right service, connect with skilled providers,
                    and get your problem solved with Fixora.
                </p>

            </div>

            <div className="service-container">

                <form className="service" onSubmit={handleService}>

                    <h2>What do you need help with?</h2>

                    <p>
                        Tell us about your problem and find the right professional.
                    </p>

                    <div className="form-group">

                        <label htmlFor="service">
                            Service
                        </label>

                        <input
                            type="text"
                            id="service"
                            name="service"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            placeholder="e.g. Electrician"
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="description">
                            Describe your problem
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="e.g. My AC is not cooling..."
                            required
                        ></textarea>

                    </div>

                    <button type="submit" className="search">
                        Find Providers
                    </button>

                </form>

                {result && (
                    <div
                        className={`result-card ${result.status === "found" ? "found" : "not-found"}`}
                        style={{ width: `${cardWidth}px` }}
                    >
                        <div className="cloud-content">

                            <h3>🔎 Search Result</h3>

                            <p>
                                <strong>Looking for:</strong> {result.query}
                                
                            </p>
                            {result.services.map((service) => (
                                    <p key={service.title}>✅ {service.title}</p>
                                ))}

                            <p>
                                <strong>Problem:</strong> {result.description}
                            </p>

                            {result.status === "found" ? (
                                <p>✅ Service found in FIXORA!</p>
                            ) : (
                                <p>❌ Sorry, this service is not available yet.</p>
                            )}

                        </div>
                    </div>
                )}

            </div>

        </section>
    );
};

export default Hero;

