import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  duration: string;
  spotifyLink: string;
  amazonMusicLink: string;
  image: string;
}

const episodes: PodcastEpisode[] = [
  {
    id: 8,
    title: "Perplexity Startup Story: Aravind Srinivas & the Answer Engine Revolution",
    description: "Uncover how Aravind Srinivas built Perplexity into an AI answer engine shaping the next era of search. Get a behind-the-scenes look at product pivots, scaling strategy, and the future of AI.",
    duration: "07:60",
    spotifyLink: "https://open.spotify.com/episode/your-perplexity-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-perplexity-link",
    image: "/podcasts/perplexity.png"
  },
  {
    id: 7,
    title: "Startup Story of Zomato Eternal: Deepinder Goyal's Relentless Reinvention",
    description: "Follow Deepinder Goyal's journey from food discovery struggle to building Zomato into India's iconic tech brand. Learn about reinvention, market wins, and what it takes to thrive in cutthroat competition.",
    duration: "13:39",
    spotifyLink: "https://open.spotify.com/episode/your-zomato-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-zomato-link",
    image: "/podcasts/zomato.png"
  },
  {
    id: 6,
    title: "Story of Zoho: Sridhar Vembu's Quiet Tech Revolution",
    description: "Sridhar Vembu founded Zoho from rural India and built a global SaaS empire. Dive into his philosophy, the power of bootstrapping, and the impact of calm, persistent innovation.",
    duration: "09:20",
    spotifyLink: "https://open.spotify.com/episode/your-zoho-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-zoho-link",
    image: "/podcasts/zoho.png"
  },
  {
    id: 5,
    title: "Move Fast, Break All: Zuckerberg's Secrets, Backstabs & Metaverse Bets",
    description: "Chart Mark Zuckerberg's journey beyond Facebook's origins into the era of the Metaverse, competition, and company controversies. This episode unveils the drive that fuels Silicon Valley's youngest mogul.",
    duration: "11:49",
    spotifyLink: "https://open.spotify.com/episode/your-meta-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-meta-link",
    image: "/podcasts/meta.png"
  },
  {
    id: 4,
    title: "Think Rebellion: Apple's Eye-Opening Saga of Pirates, Betrayal & Reinvention",
    description: "From garage beginnings to world's most valuable company, Apple's saga is a story of risk-takers, pirates, betrayals, and constant reinvention. Learn leadership lessons from Jobs and Cook's eras.",
    duration: "15:42",
    spotifyLink: "https://open.spotify.com/episode/your-apple-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-apple-link",
    image: "/podcasts/apple.png"
  },
  {
    id: 3,
    title: "Empire Built From Code: Microsoft's Rise, Rivalries & Reinventions",
    description: "Discover how Microsoft grew from Bill Gates's vision into a global powerhouse, navigating fierce rivalries, market shakeups, and rebirth under Satya Nadella.",
    duration: "12:13",
    spotifyLink: "https://open.spotify.com/episode/your-microsoft-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-microsoft-link",
    image: "/podcasts/microsoft.png"
  },
  {
    id: 2,
    title: "Ruling the Search: Google's Journey From Dorm Room to Global AI Labs",
    description: "Trace Google's journey from a Stanford dorm idea to the dominant force in the digital world, influencing everything from search to AI breakthroughs and beyond.",
    duration: "14:01",
    spotifyLink: "https://open.spotify.com/episode/your-google-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-google-link",
    image: "/podcasts/google.png"
  },
  {
    id: 1,
    title: "ELON: From Scarred Childhood to Becoming the 21st Century's First Half-Trillionaire",
    description: "Elon Musk's path is one of deep scars, bold vision, and world-changing gambles—from rockets to electric cars. See how adversity shaped his legacy.",
    duration: "16:32",
    spotifyLink: "https://open.spotify.com/episode/your-elon-link",
    amazonMusicLink: "https://music.amazon.com/podcasts/your-elon-link",
    image: "/podcasts/elon.png"
  }
];

const PodcastTile = ({ episode, index }: { episode: PodcastEpisode; index: number }) => {
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (tileRef.current) {
      observer.observe(tileRef.current);
    }

    return () => {
      if (tileRef.current) {
        observer.unobserve(tileRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={tileRef}
      className="opacity-0 transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-[#55185d] text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
        <div className="grid md:grid-cols-[300px_1fr] gap-6 p-8 md:p-10">
          {/* Episode Image */}
          <div className="flex items-center justify-center">
            <img 
              src={episode.image} 
              alt={episode.title}
              className="w-full max-w-[300px] h-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Episode Content */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {episode.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {episode.description}
              </p>
              <p className="text-sm text-white/70">
                Duration: {episode.duration}
              </p>
            </div>

            {/* Platform Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={episode.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Listen on Spotify"
              >
                <img 
                  src="/podcasts/spotify-button.png" 
                  alt="Listen on Spotify"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href={episode.amazonMusicLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Listen on Amazon Music"
              >
                <img 
                  src="/podcasts/amazon-music-button.png" 
                  alt="Listen on Amazon Music"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Podcasts = () => {
  return (
    <>
      <Helmet>
        <title>Startup Stories Podcast - Realm by Rook</title>
        <meta 
          name="description" 
          content="Explore all Startup Stories episodes—a showcase of pivotal business journeys, founder wisdom, and the wild evolution of world-changing companies." 
        />
        <meta 
          name="keywords" 
          content="startup stories, entrepreneurship podcast, founder stories, business podcast, startup journey" 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Startup Stories Podcast Series
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore all Startup Stories episodes—a showcase of pivotal business journeys, 
              founder wisdom, and the wild evolution of world-changing companies. Every episode 
              is crafted for insight and emotion, revealing exclusive stories and startup strategies.
            </p>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {episodes.map((episode, index) => (
              <PodcastTile key={episode.id} episode={episode} index={index} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Podcasts;
