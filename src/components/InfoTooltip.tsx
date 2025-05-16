import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
    content: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ content }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block ml-1">
            <button
                className="text-white-500 hover:text-white-700 focus:outline-none"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onClick={() => setIsVisible(!isVisible)}
            >
                <Info className="w-4 h-4" />
            </button>

            {isVisible && (
                <div className="absolute z-10 w-64 p-3 text-sm bg-white border border-gray-200 rounded-md shadow-lg text-gray-700 -translate-x-1/2 left-1/2 mt-2 transform origin-top transition-opacity duration-150">
                    <div className="absolute w-3 h-3 bg-white border-t border-l border-gray-200 -top-2 left-1/2 -translate-x-1/2 transform rotate-45"></div>
                    {content}
                </div>
            )}
        </div>
    );
};

export default InfoTooltip;