import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

interface PodcastEpisode {
  id: number;
  title: string;
  image: string;
  spotifyUrl: string;
  amazonMusicUrl: string;
}

const episodes: PodcastEpisode[] = [
  {
    id: 8,
    title: "Perplexity Startup Story: Aravind Srinivas & the Answer Engine Revolution",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/perplexity.png"
  },
  {
    id: 7,
    title: "Startup Story of Zomato Eternal: Deepinder Goyal's Relentless Reinvention",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/zomato.png"
  },
  {
    id: 6,
    title: "Story of Zoho: Sridhar Vembu's Quiet Tech Revolution",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/zoho.png"
  },
  {
    id: 5,
    title: "Move Fast, Break All: Zuckerberg's Secrets, Backstabs & Metaverse Bets",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/meta.png"
  },
  {
    id: 4,
    title: "Think Rebellion: Apple's Eye-Opening Saga of Pirates, Betrayal & Reinvention",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/apple.png"
  },
  {
    id: 3,
    title: "Empire Built From Code: Microsoft's Rise, Rivalries & Reinventions",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/microsoft.png"
  },
  {
    id: 2,
    title: "Ruling the Search: Google's Journey From Dorm Room to Global AI Labs",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/google.png"
  },
  {
    id: 1,
    title: "ELON: From Scarred Childhood to Becoming the 21st Century's First Half-Trillionaire",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/elon.png"
  }
];

const PodcastCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Startup Stories Podcast Series
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore pivotal business journeys, founder wisdom, and the wild evolution of world-changing companies
          </p>
          <Link 
            to="/podcasts"
            className="inline-flex items-center text-foreground hover:underline font-medium"
          >
            View All Episodes →
          </Link>
        </motion.div>

        {/* Scrolling carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex gap-6 animate-scroll"
              style={{
                width: `${episodes.length * 320}px`,
              }}
            >
              {/* Duplicate episodes for seamless loop */}
              {[...episodes, ...episodes].map((episode, index) => (
                <div
                  key={`${episode.id}-${index}`}
                  className="flex-shrink-0 w-72 bg-foreground text-background rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 min-h-[3.5rem]">
                      {episode.title}
                    </h3>
                    <div className="flex gap-3 items-center">
                      <a
                        href={episode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                        aria-label="Listen on Spotify"
                      >
                        <img
                          src="/podcasts/spotify-button.png"
                          alt="Spotify"
                          className="h-10"
                        />
                      </a>
                      <a
                        href={episode.amazonMusicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                        aria-label="Listen on Amazon Music"
                      >
                        <img
                          src="/podcasts/amazon-music-button.png"
                          alt="Amazon Music"
                          className="h-10"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PodcastCarousel;
