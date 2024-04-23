import { useGSAP } from "@gsap/react"
import { chipImg, frameImg, frameVideo } from "../utils"
import gsap from "gsap"
import { useRef } from "react"

function HowItWorks() {

    const videoRef = useRef();



useGSAP(() => {
    gsap.from('#chip', {
        scrollTrigger: {
            trigger: "#chip",
            start: "20% bottom"
        },
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: 'power2.inOut'
    })
},[])

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div id="chip" className="flex-center w-full my-20">
                <img src={chipImg} alt="chip" width={180} height={180}/>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="hiw-title">
                    A17 Pro Chip.
                    <br /> A monster win for gaming. 
                </h2>
                <p className="hiw-subtitle">
                    It's here. The biggest redesign in the history of Apple GPUs.
                </p>
            </div>
            <div className="mt-10 md:mt-20 mb-14">
                <div className="relative h-full flex-center">
                    <div className="overflow-hidden">
                        <img 
                        src={frameImg}
                        alt="frame"
                        className="bg-transparent relative z-10"
                        >
                        </img>
                        </div>
                        <div className="hiw-video">
                                                <video 
                        className="pointer-events-none" 
                        controls
                        style={{ 
                          clipPath: 'inset(0 0% 0 0)',
                          WebkitClipPath: 'inset(0 0% 0 0)', // for Safari support
                          borderTopRightRadius: '10px', // Adjust the value as needed
                          borderBottomRightRadius: '10px', // Adjust the value as needed
                          webkitAppearance: 'none', /* Hides default Safari controls */
                          mozAppearance: 'none', /* Hides default Firefox controls */
                          appearance: 'none', /* Hides default controls for other browsers */
                          pointerEvents: 'none' /* Prevents mouse events on the video */
                        }}
                       
                        preload="none"
                        playsInline
                        muted
                        autoPlay
                        ref={videoRef}
                        > 
                        <source src={frameVideo} type="video/mp4"/>
                        </video>
                        </div>
                </div>
                <p className="text-gray font-semibold text-center mt-3">Honlai: Starr Rail</p>

                            <div className="hiw-text-container">
                                <div className="flex flex-1 justify-center flex-col">
                                    <p className="hiw-text g_text">
                                        A17 Pro is an entirely new class of Iphone{' '}
                                        <span className="text-white">
                                           best graphic performance by far 
                                        </span>,
                                        using the same alloy that spacescrafts use for missions to Mars.
                                    </p>
                                </div>
                                </div>

            </div>
        </div>
    </section>
  )
}

export default HowItWorks