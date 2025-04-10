
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full animate-on-scroll">
      {icon && <div className="text-rareminds-purple mb-4 text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold text-rareminds-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
