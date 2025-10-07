import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  duration: string;
  spotifyUrl: string;
  amazonMusicUrl: string;
  image: string;
}

const episodes: PodcastEpisode[] = [
  {
    id: 8,
    title: "Perplexity Startup Story: Aravind Srinivas & the Answer Engine Revolution",
    description: "Uncover how Aravind Srinivas built Perplexity into an AI answer engine shaping the next era of search. Get a behind-the-scenes look at product pivots, scaling strategy, and the future of AI.",
    duration: "07:60",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/perplexity.png"
  },
  {
    id: 7,
    title: "Startup Story of Zomato Eternal: Deepinder Goyal's Relentless Reinvention",
    description: "Follow Deepinder Goyal's journey from food discovery struggle to building Zomato into India's iconic tech brand. Learn about reinvention, market wins, and what it takes to thrive in cutthroat competition.",
    duration: "13:39",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/zomato.png"
  },
  {
    id: 6,
    title: "Story of Zoho: Sridhar Vembu's Quiet Tech Revolution",
    description: "Sridhar Vembu founded Zoho from rural India and built a global SaaS empire. Dive into his philosophy, the power of bootstrapping, and the impact of calm, persistent innovation.",
    duration: "09:20",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/zoho.png"
  },
  {
    id: 5,
    title: "Move Fast, Break All: Zuckerberg's Secrets, Backstabs & Metaverse Bets",
    description: "Chart Mark Zuckerberg's journey beyond Facebook's origins into the era of the Metaverse, competition, and company controversies. This episode unveils the drive that fuels Silicon Valley's youngest mogul.",
    duration: "11:49",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/meta.png"
  },
  {
    id: 4,
    title: "Think Rebellion: Apple's Eye-Opening Saga of Pirates, Betrayal & Reinvention",
    description: "From garage beginnings to world's most valuable company, Apple's saga is a story of risk-takers, pirates, betrayals, and constant reinvention. Learn leadership lessons from Jobs and Cook's eras.",
    duration: "15:42",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/apple.png"
  },
  {
    id: 3,
    title: "Empire Built From Code: Microsoft's Rise, Rivalries & Reinventions",
    description: "Discover how Microsoft grew from Bill Gates's vision into a global powerhouse, navigating fierce rivalries, market shakeups, and rebirth under Satya Nadella.",
    duration: "12:13",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/microsoft.png"
  },
  {
    id: 2,
    title: "Ruling the Search: Google's Journey From Dorm Room to Global AI Labs",
    description: "Trace Google's journey from a Stanford dorm idea to the dominant force in the digital world, influencing everything from search to AI breakthroughs and beyond.",
    duration: "14:01",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/google.png"
  },
  {
    id: 1,
    title: "ELON: From Scarred Childhood to Becoming the 21st Century's First Half-Trillionaire",
    description: "Elon Musk's path is one of deep scars, bold vision, and world-changing gambles—from rockets to electric cars. See how adversity shaped his legacy.",
    duration: "TBD",
    spotifyUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
    amazonMusicUrl: "https://music.amazon.com/podcasts/YOUR_PODCAST_ID",
    image: "/podcasts/elon.png"
  }
];

const PodcastTile = ({ episode }: { episode: PodcastEpisode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#55185d] text-white rounded-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
        {/* Episode Image */}
        <div className="w-full md:w-48 h-48 flex-shrink-0">
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Episode Content */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {episode.title}
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-2">
              {episode.description}
            </p>
            <p className="text-white/70 text-sm">Duration: {episode.duration}</p>
          </div>

          {/* Platform Buttons */}
          <div className="flex gap-4 items-center mt-2">
            <a
              href={episode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
              aria-label="Listen on Spotify"
            >
              <img
                src="/podcasts/spotify-button.png"
                alt="Listen on Spotify"
                className="h-10 md:h-12"
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
                alt="Listen on Amazon Music"
                className="h-10 md:h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Podcasts = () => {
  return (
    <>
      <Helmet>
        <title>Startup Stories Podcast Series | Realm by Rook</title>
        <meta
          name="description"
          content="Explore all Startup Stories episodes—a showcase of pivotal business journeys, founder wisdom, and the wild evolution of world-changing companies."
        />
        <meta
          name="keywords"
          content="startup stories, podcast, entrepreneurship, founders, business strategy, Perplexity, Zomato, Zoho, Meta, Apple, Microsoft, Google, Elon Musk"
        />
        <link rel="canonical" href="https://realm.rook.co.in/podcasts" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-[#55185d] to-[#3d1243] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Startup Stories Podcast Series
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Explore all Startup Stories episodes—a showcase of pivotal business journeys, 
                founder wisdom, and the wild evolution of world-changing companies. Every episode 
                is crafted for insight and emotion, revealing exclusive stories and startup strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-6">
              {episodes.map((episode) => (
                <PodcastTile key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Podcasts;
