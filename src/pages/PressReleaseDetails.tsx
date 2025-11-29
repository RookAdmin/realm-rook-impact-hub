import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pressReleases } from '@/data/pressReleasesData';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Calendar, Tag } from 'lucide-react';
import DownloadButton from '@/components/common/DownloadButton';
import CtaSection from '@/components/CtaSection';

const PressReleaseDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    console.log('Current slug:', slug);
    // Try to find by slug first, then by ID to support legacy links
    const release = pressReleases.find(r => r.slug === slug || r.id === slug);
    console.log('Found release:', release);

    useEffect(() => {
        if (!release) {
            // Ideally redirect to 404 or back to list, but for now just stay or show error
            // navigate('/resources/press-releases');
        }
        window.scrollTo(0, 0);
    }, [release, navigate]);

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

    return (
        <>
            <Helmet>
                <title>{release.title} | Realm by Rook</title>
                <meta name="description" content={release.subtitle || release.title} />
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

                        <div className="max-w-4xl">
                            <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/70">
                                <span className="flex items-center gap-1.5">
                                    <Tag size={14} />
                                    {release.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    {formatDate(release.date)}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
                                {release.title}
                            </h1>

                            {release.subtitle && (
                                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                                    {release.subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <section className="realm-section">
                    <div className="realm-container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-8">
                                {release.image && (
                                    <div className="mb-10 rounded-lg overflow-hidden border border-realm-lightgray">
                                        <img
                                            src={release.image}
                                            alt={release.title}
                                            className="w-full h-auto object-cover max-h-[500px]"
                                        />
                                    </div>
                                )}

                                <div
                                    className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-a:text-realm-black prose-a:underline hover:prose-a:text-realm-gray"
                                    dangerouslySetInnerHTML={{ __html: release.content || '' }}
                                />
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
                                            url={release.url}
                                            className="w-full justify-center"
                                        />

                                        <div className="pt-6 border-t border-realm-lightgray mt-6">
                                            <h4 className="font-medium mb-2">Media Contact</h4>
                                            <p className="text-sm text-realm-gray mb-1">Media Relations Team</p>
                                            <a href="mailto:press@realmrook.com" className="text-sm font-medium underline">
                                                press@realmrook.com
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
