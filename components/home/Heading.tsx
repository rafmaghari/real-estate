import animation from "@/public/assets/lottie/house.json";
import LetsGetStarted from "@/components/common/LetsGetStarted";
import {Player} from "@lottiefiles/react-lottie-player";

const Heading = () => {
    return (
        <section>
            <div className="flex flex-col items-center rounded-2xl bg-red-50 py-6 md:justify-between lg:px-20 xl:flex-row">
                <div className="order-2 w-full px-8 lg:px-0 xl:order-1 xl:w-1/2">
                    <p className="text-center text-3xl font-black text-red-900 lg:text-left lg:text-5xl">Experience Unwavering Integrity and Exceptional Service with Integrity Realty</p>
                    <p className="my-4 text-center text-xs text-red-700 lg:text-left lg:text-sm">At Integrity Realty, We&apos;re Committed to Providing You with Honest Guidance, Personalized Solutions, and Unmatched Excellence in Real Estate Services</p>

                    <div className="flex flex-col items-center gap-2 lg:flex-row">
                        <LetsGetStarted />
                    </div>
                </div>
                <div className="order-1 hidden md:block xl:order-2 xl:w-1/2">
                    <Player
                        autoplay
                        loop
                        src={animation}
                        style={{height: '500px', width: '500px'}}
                    >
                    </Player>
                </div>
            </div>
        </section>
    );
};

export default Heading;