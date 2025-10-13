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
    spotifyUrl: "https://open.spotify.com/episode/0i1wZqkYsuFx6B2n3cKpLS?si=Z3w90kZGRaaEtvAswSJupg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/a95fd7e1-9cf2-43b6-aaca-7a942a140350/startup-stories-aravindh-ravichandran-perplexity-startup-story-aravind-srinivas-the-answer-engine-revolution",
    image: "/podcasts/perplexity.png"
  },
  {
    id: 7,
    title: "Startup Story of Zomato Eternal: Deepinder Goyal's Relentless Reinvention",
    spotifyUrl: "https://open.spotify.com/episode/6nUc9ZtmfnP7KNnu7n8BUB?si=MjBas8HNTYer02rhHQtrnA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/224bb147-36ef-4dfd-bfd6-917dedf14d67/startup-stories-aravindh-ravichandran-startup-story-of-zomato-eternal-deepinder-goyal%E2%80%99s-relentless-reinvention",
    image: "/podcasts/zomato.png"
  },
  {
    id: 6,
    title: "Story of Zoho: Sridhar Vembu's Quiet Tech Revolution",
    spotifyUrl: "https://open.spotify.com/episode/5LtvU4qv9E3fGp2yhoLHWN?si=QTYwyfHeTdCIpF9aR1AGZw",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/0890de64-e8bd-4c8f-9e97-413c95f3b914/startup-stories-aravindh-ravichandran-story-of-zoho-sridhar-vembu%E2%80%99s-quiet-tech-revolution",
    image: "/podcasts/zoho.png"
  },
  {
    id: 5,
    title: "Move Fast, Break All: Zuckerberg's Secrets, Backstabs & Metaverse Bets",
    spotifyUrl: "https://open.spotify.com/episode/2hczREIL8MtIkDe1v3rAnE?si=xJV0wuCdQR2NmA8ye03XYg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/76c84e0d-6565-4d54-a49a-b4c39ae5b058/startup-stories-aravindh-ravichandran-move-fast-break-all-zuckerberg%E2%80%99s-secrets-backstabs-metaverse-bets",
    image: "/podcasts/meta.png"
  },
  {
    id: 4,
    title: "Think Rebellion: Apple's Eye-Opening Saga of Pirates, Betrayal & Reinvention",
    spotifyUrl: "https://open.spotify.com/episode/0YLY1OC5SRwOzFMwAknxL8?si=YaLqVtIYTEmTYMDu09nudA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/b289923d-6061-42b7-8596-1181588910fe/startup-stories-aravindh-ravichandran-think-rebellion-apple%E2%80%99s-eye-opening-saga-of-pirates-betrayal-reinvention",
    image: "/podcasts/apple.png"
  },
  {
    id: 3,
    title: "Empire Built From Code: Microsoft's Rise, Rivalries & Reinventions",
    spotifyUrl: "https://open.spotify.com/episode/7FWWnw3uNMGjPA24D9PLkQ?si=_bgGV3QDQb-EnC4P_9s4bg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/153f99be-07dd-4336-b2e3-0e03bee3fda6/startup-stories-aravindh-ravichandran-empire-built-from-code-microsoft%E2%80%99s-rise-rivalries-reinventions",
    image: "/podcasts/microsoft.png"
  },
  {
    id: 2,
    title: "Ruling the Search: Google's Journey From Dorm Room to Global AI Labs",
    spotifyUrl: "https://open.spotify.com/episode/5pKrEZq2UWOSem0keEXODm?si=95jQ7P_7T0eLX6SaBcXU5g",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/ad0cf557-0794-44c3-adfd-58d9537a92c5/startup-stories-aravindh-ravichandran-ruling-the-search-google%E2%80%99s-journey-from-dorm-room-to-global-ai-labs",
    image: "/podcasts/google.png"
  },
  {
    id: 1,
    title: "ELON: From Scarred Childhood to Becoming the 21st Century's First Half-Trillionaire",
    spotifyUrl: "https://open.spotify.com/episode/6CmRqMRj2ZFqOhEoyszdjF?si=onCJsdE4TpWIzjxejG39VA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/0c988299-2e96-49d2-b036-c70a61d46c99/startup-stories-aravindh-ravichandran-elon-from-scarred-childhood-to-becoming-the-21st-century%E2%80%99s-first-half-trillionaire",
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
