import { useNavigate } from "react-router-dom";

const ServiceCard = ({id, icon, title, description }) => {

    const navigate = useNavigate();
    
    return (
        <button
            className="service-card"
            onClick={ () =>  navigate(`/services/${id}`)}
        >

            <div className="service-icon">
                {icon}
            </div>

            <h2>{title}</h2>

            <p>{description}</p>

        </button>
    );
};

export default ServiceCard;