import {Heading} from "@/components/common/Heading";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";


const Projects = () => {
    const cards = [
        {
            id: 1,
            city: "Makati",
            projects: [
                "Brio Tower",
                "Fortis Garden Residences",
                "Air Residences",
                "Jazz Residences",
                "100 West",
            ]
        },
        {
            id: 2,
            city: "Mandaluyong/San Juan",
            projects: [
                "Dansalan Gardens",
                "Flair Towers",
                "Sheridan Towers",
                "Tivoli Garden Residences",
                "Valenia Residences"
            ]
        },
        {
            id: 3,
            city: "Quezon",
            projects: [
                "Accolade Place",
                "Magnolia Place",
                "One Castilla Place",
                "Stellar Place",
                "The Amaryllis"
            ]
        },
        {
            id: 4,
            city: "Taguig",
            projects: [
                "Cedar Crest Taguig",
                "Cypress Towers",
                "Ivory Wood",
                "Mahogany Place III - H&L",
                "Maple Place"
            ]
        },
        {
            id: 5,
            city: "Pasig/Ortigas",
            projects: [
                "Accolade Place",
                "Magnolia Place",
                "One Castilla Place",
                "Stellar Place",
                "The Amaryllis"
            ]
        },
        {
            id: 6,
            city: "Manila/Pasay",
            projects: [
                "Accolade Place",
                "Magnolia Place",
                "One Castilla Place",
                "Stellar Place",
                "The Amaryllis"
            ]
        },
    ];

    return (
        <div className="lg:mx-24 my-10">
            <Heading text="PROJECTS"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <div key={card.id} className="rounded-lg shadow-md overflow-hidden bg-red-50">
                        <div className="p-8 hover:text-red-50">
                            <div className="text-red-900">
                                <p className="text-lg font-bold mb-2">{card.city}</p>
                                <div>
                                    {card.projects.map((item,index) => (
                                        <p className="text-sm" key={index}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center mt-10 underline text-sm text-red-900">See more</p>
        </div>
    );
};

export default Projects;
