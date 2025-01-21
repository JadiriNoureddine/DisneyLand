import React, { useState } from 'react';
import { ChevronRight, Castle, Sparkles, AlignRight, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    badge: "Until 9 January 2025",
    title: "Disney Electrical Sky Parade",
    description: "Until 9 January 2025 when the sun sets, float over to Sleeping Beauty Castle after sunset, look up and you'll see a dance of drones painting the night with all the colours of magic.",
    image: "https://images.unsplash.com/photo-1605123728007-df0534c6a0e1?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-purple-600"
  },
  {
    id: 2,
    badge: "From 10 January 2025",
    title: "Disney Tales of Magic",
    description: "Let your heart be captivated and your spirit lifted with our brand-new nighttime spectacular, coming to Disneyland Park from 10 January 2025!",
    image: "https://images.unsplash.com/photo-1612826213462-68e7c4fad5e8?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-purple-600"
  },
  {
    id: 3,
    badge: "Back on 17 May 2025",
    title: "Alice & the Queen of Hearts: Back to Wonderland",
    description: "From 17 May 2025, join Alice, the Queen of Hearts, and other beloved Characters as they return to Wonderland in an electrifying show in Walt Disney Studios Park.",
    image: "https://images.unsplash.com/photo-1610041518868-f9284e7eecfe?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-purple-600"
  },
  {
    id: 4,
    badge: "New",
    title: "Disney Music Festival",
    description: "Celebrate Disney hits - from classics to today's chart toppers in concerts, dance shows and street entertainment at Disneyland Park, starring beloved Disney and Pixar Characters.",
    image: "https://images.unsplash.com/photo-1580687774725-4e23db308d4f?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-pink-300"
  },
  {
    id: 5,
    badge: "Coming Soon",
    title: "Marvel Superhero Adventure",
    description: "Join your favorite Marvel superheroes in an epic adventure featuring spectacular shows, meet-and-greets, and interactive experiences that will make you feel like part of the team.",
    image: "https://images.unsplash.com/photo-1556707752-481d500a2c58?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-red-500"
  },
  {
    id: 6,
    badge: "Limited Time",
    title: "Star Wars: Galaxy's Edge",
    description: "Experience the epic Star Wars saga like never before with immersive attractions, unique dining experiences, and unforgettable character encounters.",
    image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-blue-500"
  },
  {
    id: 7,
    badge: "Seasonal",
    title: "Disney's Halloween Festival",
    description: "Experience spooktacular fun with our Halloween celebration featuring special shows, decorated attractions, and your favorite Disney Villains.",
    image: "https://images.unsplash.com/photo-1601024445121-e294d33ea0dd?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-orange-500"
  },
  {
    id: 8,
    badge: "Coming Winter",
    title: "Frozen Wonderland",
    description: "Step into Arendelle's magical winter wonderland with Anna, Elsa, and friends for an unforgettable adventure filled with music, magic, and memories.",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80&w=1200",
    badgeColor: "bg-cyan-500"
  }
];

function App() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 4 < events.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Castle className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">Disneyland Paris</span>
            </div>
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <AlignRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          The Disneyland Paris experience
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Escape to the heart of the Disney, Pixar, MARVEL and Star Wars universes that you love so much.
          Disneyland Paris is full of activities for all ages and all tastes!
        </p>
      </div>

      {/* Horizontal Cards with Peek */}
      <div className="relative max-w-[95rem] mx-auto px-4 py-12">
        <div className="flex gap-6 transition-transform duration-300 ease-in-out relative">
          {events.map((event, index) => {
            const isVisible = index >= startIndex && index < startIndex + 4;
            const isPeeking = index === startIndex + 3;

            if (!isVisible) return null;

            return (
              <div
                key={event.id}
                className={`flex-none w-[calc(25%-1.2rem)] transition-all duration-300 ${isPeeking ? 'opacity-40' : ''
                  }`}
              >
                <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden h-full transform transition duration-300 hover:scale-[1.02] flex flex-col">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`${event.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {event.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-1">{event.description}</p>
                    <button className="w-full mt-auto inline-flex items-center justify-center text-blue-600 font-semibold hover:bg-blue-50 transition-colors text-sm border-2 border-blue-600 rounded-full py-2 px-4">
                      Find out more
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {startIndex + 4 < events.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10"
            >
              <ArrowRight className="h-6 w-6 text-gray-800" />
            </button>
          )}

          {/* Previous Arrow */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10 rotate-180"
            >
              <ArrowRight className="h-6 w-6 text-gray-800" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(events.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * 4)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${Math.floor(startIndex / 4) === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-0 transform -translate-y-1/2 opacity-10">
        <Sparkles className="h-64 w-64 text-blue-600" />
      </div>
    </div>
  );
}

export default App;