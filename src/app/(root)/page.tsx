import React from 'react'
import { FolderGit2, GitBranch, Github, Search } from 'lucide-react';
import FeatureCard from '@/components/featureCard';

function page() {
    return (
        <div className="min-h-screen bg-white">
            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <FolderGit2 className="w-6 h-6" />
                            <span className="text-xl font-semibold">GitHub Groups</span>
                        </div>
                        <a href="https://chrome.google.com/webstore"
                            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                            Add to Chrome
                        </a>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 400 400">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="400" height="400" fill="url(#grid)" />
                            <rect width="400" height="400" fill="url(#dots)" />
                        </svg>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                                Organize GitHub Repos,
                                <br />
                                <span className="text-gray-700">Your Way</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Create custom groups for your GitHub repositories. The organization feature you've been waiting for.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="https://chrome.google.com/webstore"
                                    target='_blank'
                                    className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200">
                                    Install Extension
                                </a>
                                <a href="https://github.com/gh-groups/chrome-extension"
                                    target='_blank'
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 flex items-center">
                                    <Github className="w-5 h-5 mr-2" />
                                    View Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-gray-50 py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<FolderGit2 className="w-8 h-8" />}
                                title="Custom Groups"
                                description="Create and manage custom repository groups to organize your GitHub projects effectively."
                            />
                            <FeatureCard
                                icon={<Search className="w-8 h-8" />}
                                title="Quick Access"
                                description="Find your repositories faster with organized groups and quick search functionality."
                            />
                            <FeatureCard
                                icon={<GitBranch className="w-8 h-8" />}
                                title="Simple Integration"
                                description="Seamlessly integrates with GitHub's interface for a natural user experience."
                            />
                        </div>
                    </div>
                </div>

                {/* Preview Section */}
                <div className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5">
                                <svg className="w-full h-full" viewBox="0 0 400 400">
                                    <rect width="400" height="400" fill="url(#dots)" />
                                </svg>
                            </div>
                            <div className="relative">
                                <h2 className="text-3xl font-bold mb-8 text-center">See It In Action</h2>
                                <img src="demo.png" alt="screenshot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page