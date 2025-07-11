'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Review {
    id: number;
    author: string;
    rating: number;
    comment: string;
    location: string;
    date: string;
}

const fakeReviews: Review[] = [
    {
        id: 1,
        author: "Oussama Benali",
        rating: 5,
        comment: "الخدمة ممتازة! التقييم كان دقيق جداً وساعدني في اتخاذ قراري.",
        location: "Maarif",
        date: "منذ يومين"
    },
    {
        id: 2,
        author: "Zakaria El Amrani",
        rating: 4,
        comment: "واجهة سهلة الاستخدام ونتائج مفصلة. أنصح به بشدة!",
        location: "CFC",
        date: "منذ أسبوع"
    },
    {
        id: 3,
        author: "Marouane Tazi",
        rating: 5,
        comment: "أداة لا غنى عنها لأي استثمار عقاري. شكراً رنتابيليو!",
        location: "Beauséjour",
        date: "منذ 3 أيام"
    },
    {
        id: 4,
        author: "Simo Alami",
        rating: 5,
        comment: "تقييم احترافي للغاية. النتائج تتوافق مع سوق العقارات الحالي.",
        location: "Marina",
        date: "منذ 5 أيام"
    },
    {
        id: 5,
        author: "Karim Benjelloun",
        rating: 4,
        comment: "أداة رائعة للحصول على تقييم أولي. أوصي بها!",
        location: "Gauthier",
        date: "منذ يوم واحد"
    }
];

const ReviewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % fakeReviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden bg-opacity-10 backdrop-blur-sm bg-gray-800 rounded-lg py-4 mt-8">
            <motion.div
                className="flex"
                animate={{
                    x: `-${currentIndex * 100}%`
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            >
                {fakeReviews.map((review) => (
                    <div
                        key={review.id}
                        className="min-w-full px-6"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white mb-2 text-lg font-arabic">{review.comment}</p>
                            <div className="text-gray-400 text-sm">
                                <span className="font-semibold">{review.author}</span>
                                <span className="mx-2">•</span>
                                <span>{review.location}</span>
                                <span className="mx-2">•</span>
                                <span className="font-arabic">{review.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ReviewsCarousel; 