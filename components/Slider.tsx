import React, { useState } from 'react'
import type { NewsCard as NewsCardType } from '../types/Topics'
import NewsCard from './News/NewsCard'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

type Props = { news: NewsCardType[] }

const Slider = ({ news }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === news.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? news.length - 1 : prevIndex - 1
        );
    };
    const buttonStyles = "rounded-full bg-white bg-opacity-70 p-2 absolute top-1/2 -translate-y-1/2  z-10"
    return (
        // <div className="bg-accent-100">
        <div className="relative h-fit overflow-hidden bg-white bg-opacity-70">
            <div className="h-fit bg-accent-100 flex  flex-nowrap gap-2 lg:gap-8 overflow-x-scroll p-4 snap-x ">
                {news.map((card, i) => (
                    <NewsCard index={i} card={card} width={300} key={card.slug} />
                ))}
            </div>
            {["left", "right"].map((direction) => {
                const directionStyle = direction === "left" ? "left-4" : "right-4"
                return (
                    <button className={`${directionStyle} ${buttonStyles}`}>
                        {direction === "left" ? <FiArrowLeft className="text-2xl" /> : <FiArrowRight className="text-2xl" />}
                    </button>)
            }
            )}

        </div>
    )
}

export default Slider