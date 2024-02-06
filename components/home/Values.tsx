import {Player} from "@lottiefiles/react-lottie-player";
import heart from "@/public/assets/lottie/heart.json";
import service from "@/public/assets/lottie/service.json";
import award from "@/public/assets/lottie/award.json";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Heading} from "@/components/common/Heading";

const Process = () => {
    const steps = [
        {
            id: 1,
            description:  <p className="text-center text-red-900 text-xl group-hover:text-red-50"><strong>INTEGRITY REALTY</strong> values <strong>INTEGRITY</strong>. We give you the complete, truthful picture.</p>,
            animation: heart
        },
        {
            id: 2,
            description:  <p className="text-center text-red-900 text-xl group-hover:text-red-50"><strong>INTEGRITY REALTY</strong> values <strong>SERVICE</strong>. We take time to understand your specific needs.</p>,
            animation: service
        },
        {
            id: 3,
            description:  <p className="text-center text-red-900 text-xl group-hover:text-red-50"><strong>INTEGRITY REALTY</strong> values <strong>EXCELLENCE</strong>. We strive to become the best so we could give you service beyond expectations.</p>,
            animation: award
        },
    ];
    return (
        <section className="mx-10 rounded-2xl p-10 lg:mx-0 lg:my-5 lg:px-20">
            <div className="text-center text-slate-50">
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Heading text="OUR VALUES" />
                </AnimationOnScroll>
            </div>
            <div className="mt-12">
                {steps.map((step, index) => (
                    <div key={index}
                         className={`flex flex-col ${(index === 1 ? 'xl:flex-row' : 'xl:flex-row-reverse')} mb-1 items-center xl:justify-around xl:space-x-10`}>
                        <div className="my-2 w-full text-center lg:my-0 lg:text-left xl:w-1/2">
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                {step.description}
                            </AnimationOnScroll>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <Player
                                className="w-full lg:w-6/12 xl:w-8/12"
                                autoplay
                                loop
                                src={step.animation}
                            >
                            </Player>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Process;