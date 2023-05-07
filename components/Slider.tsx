import React, { useEffect, useState } from 'react'
import type { NewsCard as NewsCardType } from '../types/Topics'
import NewsCard from './News/NewsCard'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


type Props = { news: NewsCardType[] }

const Slider = ({ news }: Props) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        const container = containerRef.current;

        // Disable mouse wheel scrolling on the container
        container.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                container.scrollLeft += e.deltaX;
            }
        });
        return () => {
            container.removeEventListener('wheel', () => { })
        }

    }, []);



    const goToNextSlide = () => {
        const container = containerRef.current
        container.scrollLeft += container.clientWidth

    };

    const goToPrevSlide = () => {
        const container = containerRef.current

        container.scrollLeft -= container.clientWidth
    }


    return (
        <div className="relative overflow-hidden bg-accent-100 py-2 px-5">
            <div className="flex  flex-nowrap overflow-x-scroll snap-x remove-scrollbar scroll-smooth " ref={containerRef} >
                {news.map((card, i) => (
                    <NewsCard index={i} card={card} width={300} key={card.slug} />
                ))}
            </div>
            {["left", "right"].map((direction) => {
                const buttonStyles = "text-white rounded-full bg-primaryGreen bg-opacity-70 p-2 absolute top-1/2 -translate-y-1/2  z-10 hover:scale-110 transition-all duration-200 "
                const directionStyle = direction === "left" ? "left-1" : "right-1"
                return (
                    <button onClick={() => direction === "left" ? goToPrevSlide() : goToNextSlide()} className={`${directionStyle} ${buttonStyles}`}>
                        {direction === "left" ? <FiChevronLeft className="text-3xl" /> : <FiChevronRight className="text-3xl" />}
                    </button>)
            }
            )}

        </div>
    )
}

export default Slider