import { useState, useRef, useEffect } from 'react'
import './WelcomeWithUpload.css'

export default function WelcomeWithUpload() {
    const [videoUrl, setVideoUrl] = useState<string>('/videos/warm.mp4')
    const [showText, setShowText] = useState<boolean>(true)
    const [textOpacity, setTextOpacity] = useState<number>(100)
    const [thaiText, setThaiText] = useState<string>('คริสตจักรเมล็ดพันธุ์กรุงเทพ')
    const [englishText, setEnglishText] = useState<string>('The Seed Of Bangkok City Church')
    const [thaiFontSize, setThaiFontSize] = useState<number>(144) // Base pixel size (9rem = 144px)
    const [englishFontSize, setEnglishFontSize] = useState<number>(72) // Base pixel size (4.5rem = 72px)
    const [showControlPanel, setShowControlPanel] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Load saved video and settings from localStorage on mount
    useEffect(() => {
        const savedVideo = localStorage.getItem('welcomeBackgroundVideo')
        const savedShowText = localStorage.getItem('welcomeShowText')
        const savedOpacity = localStorage.getItem('welcomeTextOpacity')
        const savedThaiText = localStorage.getItem('welcomeThaiText')
        const savedEnglishText = localStorage.getItem('welcomeEnglishText')
        const savedThaiFontSize = localStorage.getItem('welcomeThaiFontSize')
        const savedEnglishFontSize = localStorage.getItem('welcomeEnglishFontSize')

        if (savedVideo) setVideoUrl(savedVideo)
        if (savedShowText) setShowText(savedShowText === 'true')
        if (savedOpacity) setTextOpacity(Number(savedOpacity))
        if (savedThaiText) setThaiText(savedThaiText)
        if (savedEnglishText) setEnglishText(savedEnglishText)
        if (savedThaiFontSize) setThaiFontSize(Number(savedThaiFontSize))
        if (savedEnglishFontSize) setEnglishFontSize(Number(savedEnglishFontSize))
    }, [])

    // Save settings when they change
    useEffect(() => {
        localStorage.setItem('welcomeShowText', String(showText))
        localStorage.setItem('welcomeTextOpacity', String(textOpacity))
        localStorage.setItem('welcomeThaiText', thaiText)
        localStorage.setItem('welcomeEnglishText', englishText)
        localStorage.setItem('welcomeThaiFontSize', String(thaiFontSize))
        localStorage.setItem('welcomeEnglishFontSize', String(englishFontSize))
    }, [showText, textOpacity, thaiText, englishText, thaiFontSize, englishFontSize])

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
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    style={{ display: 'none' }}
                />
            </div>

            {/* Control Panel - Top Right Corner */}
            <div className="control-panel-container">
                <button
                    className="control-toggle-button"
                    onClick={() => setShowControlPanel(!showControlPanel)}
                    aria-label="Toggle control panel"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="control-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
                    </svg>
                </button>

                {showControlPanel && (
                    <div className="control-panel">
                        <h3 className="control-panel-title">Text Controls</h3>

                        {/* Toggle Text Display */}
                        <div className="control-group">
                            <label className="control-label">
                                <input
                                    type="checkbox"
                                    checked={showText}
                                    onChange={e => setShowText(e.target.checked)}
                                    className="control-checkbox"
                                />
                                <span>Show Text</span>
                            </label>
                        </div>

                        {/* Text Opacity Slider */}
                        <div className="control-group">
                            <label className="control-label-block">
                                <span>Text Opacity: {textOpacity}%</span>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={textOpacity}
                                    onChange={e => setTextOpacity(Number(e.target.value))}
                                    className="control-slider"
                                />
                            </label>
                        </div>

                        {/* Thai Text Input */}
                        <div className="control-group">
                            <label className="control-label-block">
                                <span>Thai Text</span>
                                <input
                                    type="text"
                                    value={thaiText}
                                    onChange={e => setThaiText(e.target.value)}
                                    className="control-input"
                                    placeholder="คริสตจักรเมล็ดพันธุ์กรุงเทพ"
                                />
                            </label>
                        </div>

                        {/* English Text Input */}
                        <div className="control-group">
                            <label className="control-label-block">
                                <span>English Text</span>
                                <input
                                    type="text"
                                    value={englishText}
                                    onChange={e => setEnglishText(e.target.value)}
                                    className="control-input"
                                    placeholder="The Seed Of Bangkok City Church"
                                />
                            </label>
                        </div>

                        {/* Thai Font Size Controls */}
                        <div className="control-group">
                            <label className="control-label-block">
                                <span>Thai Text Size: {thaiFontSize}px</span>
                                <div className="font-size-controls">
                                    <button
                                        className="font-size-btn"
                                        onClick={() => setThaiFontSize(Math.max(48, thaiFontSize - 12))}
                                        aria-label="Decrease Thai font size"
                                    >
                                        A-
                                    </button>
                                    <input
                                        type="range"
                                        min="48"
                                        max="288"
                                        step="12"
                                        value={thaiFontSize}
                                        onChange={e => setThaiFontSize(Number(e.target.value))}
                                        className="control-slider"
                                    />
                                    <button
                                        className="font-size-btn"
                                        onClick={() => setThaiFontSize(Math.min(288, thaiFontSize + 12))}
                                        aria-label="Increase Thai font size"
                                    >
                                        A+
                                    </button>
                                </div>
                            </label>
                        </div>

                        {/* English Font Size Controls */}
                        <div className="control-group">
                            <label className="control-label-block">
                                <span>English Text Size: {englishFontSize}px</span>
                                <div className="font-size-controls">
                                    <button
                                        className="font-size-btn"
                                        onClick={() => setEnglishFontSize(Math.max(24, englishFontSize - 8))}
                                        aria-label="Decrease English font size"
                                    >
                                        A-
                                    </button>
                                    <input
                                        type="range"
                                        min="24"
                                        max="144"
                                        step="8"
                                        value={englishFontSize}
                                        onChange={e => setEnglishFontSize(Number(e.target.value))}
                                        className="control-slider"
                                    />
                                    <button
                                        className="font-size-btn"
                                        onClick={() => setEnglishFontSize(Math.min(144, englishFontSize + 8))}
                                        aria-label="Increase English font size"
                                    >
                                        A+
                                    </button>
                                </div>
                            </label>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="content-wrapper" style={{ opacity: showText ? textOpacity / 100 : 0 }}>
                <div className="content-container">
                    <h1 
                        className="church-title" 
                        style={{ fontSize: `${thaiFontSize}px` }}
                    >
                        {thaiText}
                    </h1>
                    <h2 
                        className="subtitle" 
                        style={{ fontSize: `${englishFontSize}px` }}
                    >
                        {englishText}
                    </h2>
                </div>
            </div>
        </div>
    )
}
