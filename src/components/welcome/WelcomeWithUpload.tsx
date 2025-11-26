import { useState, useRef, useEffect } from 'react'
import './WelcomeWithUpload.css'

export default function WelcomeWithUpload() {
    const [videoUrl, setVideoUrl] = useState<string>('/videos/warm.mp4')
    const videoRef = useRef<HTMLVideoElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Load saved video from localStorage on mount
    useEffect(() => {
        const savedVideo = localStorage.getItem('welcomeBackgroundVideo')
        if (savedVideo) {
            setVideoUrl(savedVideo)
        }
    }, [])

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (file?.type.startsWith('video/')) {
            // Create a URL for the uploaded video
            const newVideoUrl = URL.createObjectURL(file)
            setVideoUrl(newVideoUrl)

            // Save to localStorage
            const reader = new FileReader()
            reader.onload = e => {
                if (e.target?.result) {
                    try {
                        localStorage.setItem('welcomeBackgroundVideo', e.target.result as string)
                    } catch {
                        console.warn('Video too large to save to localStorage')
                    }
                }
            }
            reader.readAsDataURL(file)

            // Play the video
            if (videoRef.current) {
                videoRef.current.load()
                videoRef.current.play()
            }
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="welcome-container">
            {/* Background Video */}
            <div className="video-background">
                <video ref={videoRef} className="background-video" autoPlay muted loop playsInline key={videoUrl}>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Upload Button - Bottom Right Corner */}
            <div className="upload-button-container">
                <button onClick={handleUploadClick} className="upload-button" aria-label="Upload background video">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="upload-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <span className="upload-text">Upload Video</span>
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    style={{ display: 'none' }}
                />
            </div>

            {/* Main Content */}
            <div className="content-wrapper">
                <div className="content-container">
                    <h1 className="church-title">คริสตจักรเมล็ดพันธุ์กรุงเทพ</h1>
                    <h2 className="subtitle">Seed Church Bangkok</h2>
                </div>
            </div>
        </div>
    )
}
