
import { 
  Users, 
  Building2, 
  Factory, 
  Clock,
  CheckCircle2, 
  BadgeCheck, 
  Star, 
  Map, 
  Award,
  Briefcase,
  Globe
} from 'lucide-react';
import StatCard from '../ui/StatCard';

const WhyRareminds = () => {
  return (
    <section id="why-rareminds" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted. Proven. Scalable.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<Users size={32} />} 
            number="5,00,000+" 
            description="candidates successfully placed"
            subtext="We've matched over half a million individuals with meaningful careers — and counting" 
          />
          <StatCard 
            icon={<Building2 size={32} />} 
            number="250+" 
            description="hiring partners and growing"
            subtext="Corporates across India rely on us to scale their teams efficiently and effectively" 
          />
          <StatCard 
            icon={<Factory size={32} />} 
            number="20+" 
            description="industries served across India"
            subtext="From IT to Manufacturing, BFSI to Healthcare — we understand your business language" 
          />
          <StatCard 
            icon={<Clock size={32} />} 
            number="2x" 
            description="faster Turnaround Time"
            subtext="We don't just find talent — we deliver it at speed, without compromising quality" 
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard 
            icon={<CheckCircle2 size={32} />} 
            number="92%" 
            description="Role Closure Rate"
            subtext="of roles closed within the first shortlist round" 
          />
          <StatCard 
            icon={<BadgeCheck size={32} />} 
            number="98%" 
            description="Offer Acceptance Rate"
            subtext="candidate offer acceptance rate" 
          />
          <StatCard 
            icon={<Star size={32} />} 
            number="4.8/5" 
            description="CSAT Score"
            subtext="Rated by corporate clients for quality and communication" 
          />
          <StatCard 
            icon={<Map size={32} />} 
            number="20+" 
            description="States"
            subtext="Pan-India reach with regional hiring" 
          />
          <StatCard 
            icon={<Award size={32} />} 
            number="20+" 
            description="Brands"
            subtext="C-Suite hires in the past year" 
          />
          <StatCard 
            icon={<Briefcase size={32} />} 
            number="150+" 
            description="Roles"
            subtext="Job Families Successfully Placed" 
          />
        </div>
        
        <div className="mt-16 flex justify-center">
          <StatCard 
            icon={<Globe size={32} />} 
            number="10" 
            description="Countries"
            subtext="Domestic hiring @ International Locations" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyRareminds;
