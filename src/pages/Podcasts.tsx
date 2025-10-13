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
    spotifyUrl: "https://open.spotify.com/episode/0i1wZqkYsuFx6B2n3cKpLS?si=Z3w90kZGRaaEtvAswSJupg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/a95fd7e1-9cf2-43b6-aaca-7a942a140350/startup-stories-aravindh-ravichandran-perplexity-startup-story-aravind-srinivas-the-answer-engine-revolution",
    image: "/podcasts/perplexity.png"
  },
  {
    id: 7,
    title: "Startup Story of Zomato Eternal: Deepinder Goyal's Relentless Reinvention",
    description: "Follow Deepinder Goyal's journey from food discovery struggle to building Zomato into India's iconic tech brand. Learn about reinvention, market wins, and what it takes to thrive in cutthroat competition.",
    duration: "13:39",
    spotifyUrl: "https://open.spotify.com/episode/6nUc9ZtmfnP7KNnu7n8BUB?si=MjBas8HNTYer02rhHQtrnA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/224bb147-36ef-4dfd-bfd6-917dedf14d67/startup-stories-aravindh-ravichandran-startup-story-of-zomato-eternal-deepinder-goyal%E2%80%99s-relentless-reinvention",
    image: "/podcasts/zomato.png"
  },
  {
    id: 6,
    title: "Story of Zoho: Sridhar Vembu's Quiet Tech Revolution",
    description: "Sridhar Vembu founded Zoho from rural India and built a global SaaS empire. Dive into his philosophy, the power of bootstrapping, and the impact of calm, persistent innovation.",
    duration: "09:20",
    spotifyUrl: "https://open.spotify.com/episode/5LtvU4qv9E3fGp2yhoLHWN?si=QTYwyfHeTdCIpF9aR1AGZw",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/0890de64-e8bd-4c8f-9e97-413c95f3b914/startup-stories-aravindh-ravichandran-story-of-zoho-sridhar-vembu%E2%80%99s-quiet-tech-revolution",
    image: "/podcasts/zoho.png"
  },
  {
    id: 5,
    title: "Move Fast, Break All: Zuckerberg's Secrets, Backstabs & Metaverse Bets",
    description: "Chart Mark Zuckerberg's journey beyond Facebook's origins into the era of the Metaverse, competition, and company controversies. This episode unveils the drive that fuels Silicon Valley's youngest mogul.",
    duration: "11:49",
    spotifyUrl: "https://open.spotify.com/episode/2hczREIL8MtIkDe1v3rAnE?si=xJV0wuCdQR2NmA8ye03XYg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/76c84e0d-6565-4d54-a49a-b4c39ae5b058/startup-stories-aravindh-ravichandran-move-fast-break-all-zuckerberg%E2%80%99s-secrets-backstabs-metaverse-bets",
    image: "/podcasts/meta.png"
  },
  {
    id: 4,
    title: "Think Rebellion: Apple's Eye-Opening Saga of Pirates, Betrayal & Reinvention",
    description: "From garage beginnings to world's most valuable company, Apple's saga is a story of risk-takers, pirates, betrayals, and constant reinvention. Learn leadership lessons from Jobs and Cook's eras.",
    duration: "15:42",
    spotifyUrl: "https://open.spotify.com/episode/0YLY1OC5SRwOzFMwAknxL8?si=YaLqVtIYTEmTYMDu09nudA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/b289923d-6061-42b7-8596-1181588910fe/startup-stories-aravindh-ravichandran-think-rebellion-apple%E2%80%99s-eye-opening-saga-of-pirates-betrayal-reinvention",
    image: "/podcasts/apple.png"
  },
  {
    id: 3,
    title: "Empire Built From Code: Microsoft's Rise, Rivalries & Reinventions",
    description: "Discover how Microsoft grew from Bill Gates's vision into a global powerhouse, navigating fierce rivalries, market shakeups, and rebirth under Satya Nadella.",
    duration: "12:13",
    spotifyUrl: "https://open.spotify.com/episode/7FWWnw3uNMGjPA24D9PLkQ?si=_bgGV3QDQb-EnC4P_9s4bg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/153f99be-07dd-4336-b2e3-0e03bee3fda6/startup-stories-aravindh-ravichandran-empire-built-from-code-microsoft%E2%80%99s-rise-rivalries-reinventions",
    image: "/podcasts/microsoft.png"
  },
  {
    id: 2,
    title: "Ruling the Search: Google's Journey From Dorm Room to Global AI Labs",
    description: "Trace Google's journey from a Stanford dorm idea to the dominant force in the digital world, influencing everything from search to AI breakthroughs and beyond.",
    duration: "14:01",
    spotifyUrl: "https://open.spotify.com/episode/5pKrEZq2UWOSem0keEXODm?si=95jQ7P_7T0eLX6SaBcXU5g",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/ad0cf557-0794-44c3-adfd-58d9537a92c5/startup-stories-aravindh-ravichandran-ruling-the-search-google%E2%80%99s-journey-from-dorm-room-to-global-ai-labs",
    image: "/podcasts/google.png"
  },
  {
    id: 1,
    title: "ELON: From Scarred Childhood to Becoming the 21st Century's First Half-Trillionaire",
    description: "Elon Musk's path is one of deep scars, bold vision, and world-changing gambles—from rockets to electric cars. See how adversity shaped his legacy.",
    duration: "TBD",
    spotifyUrl: "https://open.spotify.com/episode/6CmRqMRj2ZFqOhEoyszdjF?si=onCJsdE4TpWIzjxejG39VA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/0c988299-2e96-49d2-b036-c70a61d46c99/startup-stories-aravindh-ravichandran-elon-from-scarred-childhood-to-becoming-the-21st-century%E2%80%99s-first-half-trillionaire",
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
      className="w-full bg-foreground text-background rounded-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
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
            <p className="text-background/90 text-base md:text-lg leading-relaxed mb-2">
              {episode.description}
            </p>
            <p className="text-background/70 text-sm">Duration: {episode.duration}</p>
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
                className="h-[3.25rem] md:h-[3.9rem]"
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

      <main className="min-h-screen bg-background pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-foreground to-foreground/90 text-background py-16 md:py-24">
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
              <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto leading-relaxed">
                Explore all Startup Stories episodes, a showcase of pivotal business journeys, 
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
