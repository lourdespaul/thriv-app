import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-background">
                <header className="container mx-auto px-4 py-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                {auth.user ? (
                                    <Link href={route('dashboard')}>
                                        <Button variant="ghost">Dashboard</Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route('login')}>
                                            <Button variant="ghost">Log in</Button>
                                        </Link>
                                        <Link href={route('register')}>
                                            <Button>Register</Button>
                                        </Link>
                                    </>
                                )}
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </header>

                <main className="container mx-auto px-4 py-12">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">Welcome to Laravel</CardTitle>
                                <CardDescription className="text-lg">
                                    A modern web application framework for PHP
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <Badge variant="secondary">Documentation</Badge>
                                        <a
                                            href="https://laravel.com/docs"
                                            target="_blank"
                                            className="text-primary hover:underline"
                                        >
                                            Read the documentation
                                        </a>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center space-x-4">
                                        <Badge variant="secondary">Tutorials</Badge>
                                        <a
                                            href="https://laracasts.com"
                                            target="_blank"
                                            className="text-primary hover:underline"
                                        >
                                            Watch video tutorials
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <a
                                    href="https://cloud.laravel.com"
                                    target="_blank"
                                    className="w-full"
                                >
                                    <Button className="w-full">Deploy to Laravel Cloud</Button>
                                </a>
                            </CardFooter>
                        </Card>

                        <div className="relative hidden lg:block">
                            <Card className="h-full border-none bg-primary/5">
                                <CardContent className="flex h-full items-center justify-center p-6">
                                    <div className="text-center">
                                        <h2 className="mb-4 text-4xl font-bold">Laravel</h2>
                                        <p className="text-muted-foreground">
                                            The PHP Framework for Web Artisans
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
