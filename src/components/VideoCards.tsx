import { Card, CardContent } from '~/components/ui/card'

export default function VideoCards() {
    return (
        <div className="mx-auto w-full max-w-7xl p-6">
            <h1 className="mb-12 text-center text-4xl font-bold">THE RESULTS</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Social Media Card */}
                <Card className="bg-gray-50">
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                            <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                                <source src="/placeholder.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="p-6">
                            <h2 className="mb-3 text-2xl font-bold">Shine bright on socials</h2>
                            <p className="text-gray-600">
                                A sparkling mix of simple tools and rad effects is sure to bring you more views, likes,
                                and followers for anything you create: short clips, daily vlogs, product reviews, and
                                more. Explore more opportunities to create breathtaking videos.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Business Card */}
                <Card className="bg-gray-50">
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                            <img
                                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8wunJiP6Kzle6ior4P8o4BvZiNYrr.png`}
                                alt="Business promotion example"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="mb-3 text-2xl font-bold">Boost your business</h2>
                            <p className="text-gray-600">
                                Save hours with our clear design, powerful AI, and handy presets. From a short promo
                                reel to a project presentation – you'll quickly make a compelling video that'll earn
                                attention, clients, and money for you.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Family Card */}
                <Card className="bg-gray-50">
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                            <img
                                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8wunJiP6Kzle6ior4P8o4BvZiNYrr.png`}
                                alt="Family memories example"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="mb-3 text-2xl font-bold">Make your loved ones smile</h2>
                            <p className="text-gray-600">
                                Create and edit videos about family get-togethers, birthday parties, holiday
                                celebrations, and, of course, your pets! Easily add effects, titles, and music to create
                                memories that'll never fade.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
