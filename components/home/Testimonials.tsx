import {BsQuote} from "react-icons/bs";
import {Heading} from "@/components/common/Heading";


const Values = () => {
    const cards = [
        {
            id: 1,
            description: "We are well-pleased with the kind of service we received from INTEGRITY REALTY.  They have helped us in every step of the way. - MARVIN & RESIE, IT Professionals, Singapore"
        },
        {
            id: 2,
            description: "I think I was their first client who decided to buy a unit in Riverfront by just looking at the website. - AYEN, IT Consultant, Libya"
        },
        {
            id: 3,
            description: "Their service is true to their name! They're not simply satisfied in increasing their sales; they want their clients to be satisfied with their purchases as well... - CHENAI, IT Consultant,Philippines"
        },
    ];

    return (
        <div className="lg:mx-24 my-10">
            <Heading text="TESTIMONIALS"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div key={card.id}
                         className="rounded-lg  overflow-hidden  hover:bg-red-300 group">
                        <div className="p-8 hover:text-red-50">
                            <div className="flex justify-center text-red-900 group-hover:text-red-50">
                                <BsQuote className="text-5xl"/>
                            </div>
                            <p className="text-center text-red-900 text-sm group-hover:text-red-50">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center mt-5 underline text-sm text-red-900">See more</p>
        </div>
    );
};

export default Values;
