// app/characters/[name]/page.js

import characters from '../../../public/data/characters'; 
import Image from 'next/image';
import { User, Heart, Calendar, Home, Users, Gift, Star, Award, Coffee,ArrowLeft } from 'lucide-react';

export default function CharacterPage({ params }) {
    const name = params.name
    const character = characters.find(c => c.name.toLowerCase() === name.toLowerCase());

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <>
            <a href="/">
            <button><ArrowLeft className='text-emerald-600 w-12 h-10 m-4 '/></button>
            </a>

        <div className="my-auto rounded-lg  overflow-hidden  ">
            <div className="flex flex-col lg:flex-row">
                {/* Left column - Image and basic details */}
                <div className="lg:w-1/3 p-6 border-r border-emerald-200">
                {/* Header with name */}
                <div className="bg-emerald-600 text-white p-4 rounded-t-lg mb-4">
                    <h1 className="text-2xl font-bold flex items-center">
                    <User className="mr-2" size={24} />
                    {character.name}
                    </h1>
                    <div className="mt-2 bg-white text-emerald-600 rounded-full px-3 py-1 text-sm font-medium inline-block">
                    {character.Marryable === "Yes" ? "Marryable" : "Not Marryable"}
                    </div>
                </div>
                
                {/* Character image */}
                <div className="flex justify-center">
                    <div className="relative w-64 h-64 border-4 border-emerald-300 rounded-lg overflow-hidden bg-white shadow-md">
                    <img 
                        src={character.image} 
                        alt={character.name} 
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
                
                {/* Basic information */}
                <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                    <div className="space-y-4">
                    <div className="flex items-center">
                        <Calendar size={20} className="text-emerald-600 min-w-6 mr-3" />
                        <span className="font-medium w-24">Birthday:</span>
                        <span>{character.birthday}</span>
                    </div>
                    
                    <div className="flex items-center">
                        <Home size={20} className="text-emerald-600 min-w-6 mr-3" />
                        <span className="font-medium w-24">Lives:</span>
                        <span>{character.lives}</span>
                    </div>
                    
                    <div className="flex items-center">
                        <Users size={20} className="text-emerald-600 min-w-6 mr-3" />
                        <span className="font-medium w-24">Family:</span>
                        <span>{character.Family}</span>
                    </div>
                    
                    <div className="flex items-center">
                        <Award size={20} className="text-emerald-600 min-w-6 mr-3" />
                        <span className="font-medium w-24">Occupation:</span>
                        <span>{character.occupation}</span>
                    </div>
                    
                    <div className="flex items-center">
                        <Coffee size={20} className="text-emerald-600 min-w-6 mr-3" />
                        <span className="font-medium w-24">Favorite:</span>
                        <span>{character.favoriteActivity}</span>
                    </div>
                    </div>
                </div>
                </div>
                
                {/* Right column - Gift preferences */}
                <div className="lg:w-2/3 p-6">
                <div className="mb-8">
                    <h2 className="flex items-center font-bold text-xl mb-4 text-emerald-700 pb-2 border-b border-emerald-200">
                    <Heart size={24} className="mr-2 text-red-500" />
                    Loved Gifts
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {character.loves.map((item, index) => (
                        <div key={`love-${index}`} className="bg-white border border-emerald-200 rounded-lg p-3 flex items-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-red-50 p-2 rounded-full mr-3">
                            <Gift size={18} className="text-red-500" />
                        </div>
                        <span className="font-medium">{item}</span>
                        </div>
                    ))}
                    </div>
                </div>
                
                <div>
                    <h2 className="flex items-center font-bold text-xl mb-4 text-emerald-700 pb-2 border-b border-emerald-200">
                    <Star size={24} className="mr-2 text-emerald-500" />
                    Liked Gifts
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {character.likes.map((item, index) => (
                        <div key={`like-${index}`} className="bg-white border border-emerald-200 rounded-lg p-3 flex items-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-emerald-50 p-2 rounded-full mr-3">
                            <Gift size={18} className="text-emerald-500" />
                        </div>
                        <span className="font-medium">{item}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
    </>
    );
}
