import { useState } from 'react';
import BrandBanner from './components/BrandBanner';
import HeroSection from './components/HeroSection';
import WhyVisitKerala from './components/WhyVisitKerala';
import Itinerary from './components/Itinerary';
import Inclusions from './components/Inclusions';
import Pricing from './components/Pricing';
import RelatedPackages from './components/RelatedPackages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import LeadFormModal from './components/LeadFormModal';
import WhatsAppButton from './components/WhatsAppButton';
import PageFooter from './components/PageFooter';

export default function App() {
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
    const [selectedPackageInterest, setSelectedPackageInterest] = useState('General');

    const handleOpenLeadForm = (packageInterest: string) => {
        setSelectedPackageInterest(packageInterest || 'General');
        setIsLeadFormOpen(true);
    };

    const handleCloseLeadForm = () => {
        setIsLeadFormOpen(false);
    };

    return (
        <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
            <BrandBanner />

            <main>
                <HeroSection onOpenLeadForm={handleOpenLeadForm} />
                <WhyVisitKerala />
                <Itinerary />
                <Inclusions />
                <Pricing onOpenLeadForm={handleOpenLeadForm} />
                <RelatedPackages onOpenLeadForm={handleOpenLeadForm} />
                <Testimonials />
                <FAQ />
                <FinalCTA onOpenLeadForm={handleOpenLeadForm} />
            </main>

            <PageFooter />

            <LeadFormModal
                isOpen={isLeadFormOpen}
                onClose={handleCloseLeadForm}
                packageInterest={selectedPackageInterest}
            />

            <WhatsAppButton />
        </div>
    );
}
