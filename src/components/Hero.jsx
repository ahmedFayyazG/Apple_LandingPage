import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";



function Hero() {
    const [videoSrc, setVidoeSrc] = useState(window.innerWidth < 760 ? smallHeroVideo: heroVideo);
   
    const handleVideoSrcSet = () => {
        if(window.innerWidth <760) {
            setVidoeSrc(smallHeroVideo)
        }
        else {
            setVidoeSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    },[])


    useGSAP(() => {
        gsap.to('#hero', {opacity: 1, delay: 0.5})
        gsap.to('#cta', {opacity: 1,y: -50, delay: 2})

    }, [])
  return (
    <section className="w-full nav-height bg-black relative" >
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="hero" className="hero-title">iphone 15 Pro</p>
            <div className="md:w-10/12 w-9/12">
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>

        <div id='cta' className="flex flex-col items-center opacity-0 translate-y-20">
            <a  href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/month or $1999</p>

        </div>

    </section>
  )
}

export default Hero