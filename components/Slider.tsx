import React from 'react'
import type { NewsCard as NewsCardType } from '../types/Topics'
import NewsCard from './News/NewsCard'

type Props = { news: NewsCardType[] }

const Slider = ({ news }: Props) => {
    return (
        // <div className="bg-accent-100">
        // <div className="container  h-fit overflow-hidden bg-white bg-opacity-70">
        <div className="h-fit bg-white flex flex-1 gap-2 lg:gap-8 overflow-x-scroll ">
            {news.map((card) => (
                <NewsCard card={card} width={300} key={card.slug} />
            ))}
        </div>
        // </div>
        // </div>
    )
}

export default Slider