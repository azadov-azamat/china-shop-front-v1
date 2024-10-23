interface starRatingProps {
    rating: number;
}

export default function Component({rating}: starRatingProps) {
    const fullStars = Math.floor(rating); // To'liq bo'yalgan yulduzlar
    const halfStar = rating % 1 !== 0; // Yarmi bo'yalgan yulduz
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="flex items-center">
            {/* To'liq bo'yalgan yulduzlar */}
            {Array(fullStars).fill(0).map((_, i) => (
                <svg key={`full-${i}`} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.36 2.445a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.36-2.445a1 1 0 00-1.175 0l-3.36 2.445c-.785.57-1.84-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.364 9.385c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.958z"/>
                </svg>
            ))}

            {/* Yarmi bo'yalgan yulduz (agar mavjud bo'lsa) */}
            {halfStar && (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.36 2.445a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.36-2.445a1 1 0 00-1.175 0l-3.36 2.445c-.785.57-1.84-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.364 9.385c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.958z"/>
                    <rect x="10" y="0" width="10" height="20" fill="white"/>
                    {/* Yulduzning yarmi ochiq */}
                </svg>
            )}

            {/* Bo'yalmagan yulduzlar */}
            {Array(emptyStars).fill(0).map((_, i) => (
                <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.36 2.445a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.36-2.445a1 1 0 00-1.175 0l-3.36 2.445c-.785.57-1.84-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.364 9.385c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.958z"/>
                </svg>
            ))}

            {/* Reyting raqami */}
            <span className="ml-2 text-gray-600 text-sm">({rating.toFixed(1)})</span>
        </div>
    )
}