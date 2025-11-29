import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Calendar, Tag } from 'lucide-react';
import DownloadButton from '@/components/common/DownloadButton';
import CtaSection from '@/components/CtaSection';
import { client3, urlForClient3 } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';

interface SanityPressRelease {
    _id: string;
    title: string;
    description?: string;
    slug: {
        current: string;
    };
    mainImage?: any;
    pdfFile?: {
        asset: {
            url: string;
        };
    };
    categories?: {
        _id: string;
        title: string;
    }[];
    publishedAt: string;
    body?: any[];
}

const PressReleaseDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [release, setRelease] = useState<SanityPressRelease | null>(null);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    useEffect(() => {
        const fetchPressRelease = async () => {
            if (!slug) {
                setLoading(false);
                return;
            }

            try {
                console.log('Fetching press release with slug:', slug);

                const query = `*[_type == "post" && slug.current == $slug][0] {
                    _id,
                    title,
                    description,
                    slug,
                    mainImage,
                    pdfFile,
                    categories[]->{
                        _id,
                        title
                    },
                    publishedAt,
                    body
                }`;

                const data = await client3.fetch<SanityPressRelease>(query, { slug });

                if (data) {
                    console.log('Successfully fetched press release:', data);
                    setRelease(data);
                    setUsingFallback(false);
                } else {
                    console.log('No data found');
                    setRelease(null);
                    setUsingFallback(true);
                }
                setLoading(false);
                window.scrollTo(0, 0);
            } catch (error) {
                console.error('Error fetching press release:', error);
                setRelease(null);
                setUsingFallback(true);
                setLoading(false);
            }
        };

        fetchPressRelease();
    }, [slug]);

    if (loading) {
        return (
            <div className="realm-container py-20">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 w-1/2 mb-8"></div>
                    <div className="aspect-video bg-gray-200 mb-8"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 w-3/4"></div>
                        <div className="h-4 bg-gray-200 w-5/6"></div>
                        <div className="h-4 bg-gray-200 w-2/3"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!release) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Press Release Not Found</h2>
                    <p className="mb-4 text-gray-500">Could not find press release with identifier: {slug}</p>
                    <Button onClick={() => navigate('/resources/press-releases')} className="realm-button">
                        Back to Press Releases
                    </Button>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const category = release.categories && release.categories.length > 0 
        ? release.categories[0].title 
        : 'Uncategorized';
    const pdfUrl = release.pdfFile?.asset?.url || '';

    return (
        <>
            <Helmet>
                <title>{release.title} | Realm by Rook</title>
                <meta name="description" content={release.description || release.title} />
            </Helmet>

            <main>
                <div className="bg-realm-black text-white pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="realm-container">
                        <Button
                            variant="ghost"
                            className="text-white/70 hover:text-white hover:bg-white/10 mb-8 pl-0 gap-2"
                            onClick={() => navigate('/resources/press-releases')}
                        >
                            <ArrowLeft size={16} /> Back to Press Releases
                        </Button>

                        {usingFallback && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                                <p className="text-yellow-800">
                                    Currently showing demo content. Connect to Sanity CMS to display live data.
                                </p>
                            </div>
                        )}

                        <div className="max-w-4xl">
                            <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/70">
                                <span className="flex items-center gap-1.5">
                                    <Tag size={14} />
                                    {category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    {formatDate(release.publishedAt)}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
                                {release.title}
                            </h1>

                            {release.description && (
                                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                                    {release.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <section className="realm-section">
                    <div className="realm-container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-8">
                                {release.mainImage && (
                                    <div className="mb-10 rounded-lg overflow-hidden border border-realm-lightgray">
                                        <img
                                            src={urlForClient3(release.mainImage).width(1200).url()}
                                            alt={release.title}
                                            className="w-full h-auto object-cover max-h-[500px]"
                                        />
                                    </div>
                                )}

                                {release.body && release.body.length > 0 ? (
                                    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-a:text-realm-black prose-a:underline hover:prose-a:text-realm-gray">
                                        <PortableText
                                            value={release.body}
                                            components={{
                                                block: {
                                                    normal: ({ children }) => (
                                                        <p className="text-lg leading-relaxed mb-6">{children}</p>
                                                    ),
                                                    h1: ({ children }) => (
                                                        <h1 className="text-4xl font-display font-bold mt-12 mb-6">
                                                            {children}
                                                        </h1>
                                                    ),
                                                    h2: ({ children }) => (
                                                        <h2 className="text-3xl font-display font-bold mt-10 mb-4">
                                                            {children}
                                                        </h2>
                                                    ),
                                                    h3: ({ children }) => (
                                                        <h3 className="text-2xl font-display font-bold mt-8 mb-4">
                                                            {children}
                                                        </h3>
                                                    ),
                                                    h4: ({ children }) => (
                                                        <h4 className="text-xl font-display font-bold mt-6 mb-4">
                                                            {children}
                                                        </h4>
                                                    ),
                                                },
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <p className="text-lg text-realm-gray">No content available.</p>
                                )}
                            </div>

                            <div className="lg:col-span-4">
                                <div className="sticky top-32 p-6 bg-realm-lightgray/30 border border-realm-lightgray rounded-lg">
                                    <h3 className="text-xl font-display font-medium mb-4">Media Assets</h3>
                                    <p className="text-realm-gray mb-6 text-sm">
                                        Download the official press release and related assets.
                                    </p>

                                    <div className="space-y-4">
                                        <DownloadButton
                                            label="Download PDF Version"
                                            url={pdfUrl}
                                            className="w-full justify-center"
                                        />

                                        <div className="pt-6 border-t border-realm-lightgray mt-6">
                                            <h4 className="font-medium mb-2">Media Contact</h4>
                                            <p className="text-sm text-realm-gray mb-1">Media Relations Team</p>
                                            <a href="mailto:hlo@realmrook.com" className="text-sm font-medium underline">
                                                hlo@realmrook.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaSection />
            </main>
        </>
    );
};

export default PressReleaseDetails;
