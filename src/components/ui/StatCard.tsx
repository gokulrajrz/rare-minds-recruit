
import { ReactNode } from 'react';

interface StatCardProps {
  icon?: ReactNode;
  number: string;
  description: string;
  subtext?: string;
}

const StatCard = ({ icon, number, description, subtext }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
      {icon && <div className="text-rareminds-purple mb-4">{icon}</div>}
      <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{number}</h3>
      <p className="text-gray-700 font-medium mb-1">{description}</p>
      {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
    </div>
  );
};

export default StatCard;
