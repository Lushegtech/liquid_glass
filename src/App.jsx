import React, { useState, useEffect } from 'react'
import './App.css'

// WhatsApp-style SVG Icons
const PhoneIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
)

const VideoIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
  </svg>
)

const MoreIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
)

const AttachIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
  </svg>
)

const MicIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
  </svg>
)

const MessageIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
  </svg>
)

const PlayIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const AddIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
)

const SunIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/>
    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
  </svg>
)

const MoonIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.75 4.09L15.22 6.03L16.13 9.09L13.5 7.28L10.87 9.09L11.78 6.03L9.25 4.09L12.44 4L13.5 1L14.56 4L17.75 4.09ZM21.25 11L19.61 12.25L20.2 14.23L18.5 13.06L16.8 14.23L17.39 12.25L15.75 11L17.81 10.95L18.5 9L19.19 10.95L21.25 11ZM22 15.67A7.5 7.5 0 0 1 12.33 2A8.003 8.003 0 0 0 22 15.67Z"/>
  </svg>
)

const LiquidGlassIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#667eea", stopOpacity:1}} />
        <stop offset="50%" style={{stopColor:"#764ba2", stopOpacity:0.8}} />
        <stop offset="100%" style={{stopColor:"#25D366", stopOpacity:0.6}} />
      </linearGradient>
      <linearGradient id="logoHighlight" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" style={{stopColor:"rgba(255,255,255,0.4)", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"rgba(255,255,255,0.1)", stopOpacity:0}} />
      </linearGradient>
    </defs>
    
    {/* Main glass shape */}
    <rect width="24" height="24" rx="6" fill="url(#logoGradient)" opacity="0.9"/>
    
    {/* Glass highlight */}
    <rect x="1.5" y="1.5" width="21" height="10.5" rx="4.5" fill="url(#logoHighlight)"/>
    
    {/* Liquid drop shapes */}
    <circle cx="9" cy="9" r="2.25" fill="rgba(255,255,255,0.3)"/>
    <circle cx="15" cy="15" r="1.875" fill="rgba(255,255,255,0.2)"/>
    <circle cx="6" cy="16.5" r="1.5" fill="rgba(255,255,255,0.25)"/>
    
    {/* Glass border */}
    <rect width="24" height="24" rx="6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75"/>
  </svg>
)

// Simple Slider Component
const Slider = ({ label, value, onChange, min = 0, max = 100, step = 1, unit = '' }) => (
  <div className="slider-container">
    <div className="slider-header">
      <label>{label}</label>
      <span className="slider-value">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="slider"
    />
  </div>
)

// Toggle Component
const Toggle = ({ label, checked, onChange }) => (
  <div className="toggle-container">
    <span>{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className={`toggle ${checked ? 'toggle-on' : 'toggle-off'}`}
    >
      <div className="toggle-thumb" />
    </button>
  </div>
)

// iOS Control Center Custom Icons - Following Apple Design Principles
const WiFiIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <circle cx="12" cy="20" r="1" fill={color}/>
  </svg>
)

const BluetoothIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="none">
    <path d="M12 1l6 6-4.5 4.5L18 16l-6 6V14l-3.5 3.5L7 16l4.5-4L7 8l1.5-1.5L12 10V1zm2 9l2-2-2-2v4zm0 8l2-2-2-2v4z" fill={color}/>
  </svg>
)

const AirplaneIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
)

const BatteryIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="10" x="2" y="7" rx="2" ry="2"/>
    <line x1="22" x2="22" y1="11" y2="13"/>
    <rect width="12" height="6" x="4" y="9" rx="1" fill={color}/>
  </svg>
)

const BrightnessIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" fill={color}/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  </svg>
)

const LockIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1" fill={color}/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const FocusIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="none">
    <path d="M12 3a9 9 0 109 9c-2.5 0-4.8-1-6.5-2.7A6.5 6.5 0 0112 3z" fill={color}/>
  </svg>
)

function App() {
  const [config, setConfig] = useState({
    opacity: 0.1,
    blur: 40,
    saturation: 180,
    brightness: 110,
    contrast: 100,
    hueRotate: 0,
    borderRadius: 20,
    borderOpacity: 0.18,
    specularHighlight: true,
    liquidAnimation: true
  })

  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')
  const [darkMode, setDarkMode] = useState(false)
  const [previewMode, setPreviewMode] = useState('chat')
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll behavior for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 80 // Threshold for when to show sticky state
      
      if (scrollPosition > threshold && !isScrolled) {
        setIsScrolled(true)
      } else if (scrollPosition <= threshold && isScrolled) {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  // Apply CSS variables
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--glass-opacity', config.opacity)
    root.style.setProperty('--glass-blur', `${config.blur}px`)
    root.style.setProperty('--glass-saturation', `${config.saturation}%`)
    root.style.setProperty('--glass-brightness', `${config.brightness}%`)
    root.style.setProperty('--glass-contrast', `${config.contrast}%`)
    root.style.setProperty('--glass-hue', `${config.hueRotate}deg`)
    root.style.setProperty('--glass-border-opacity', config.borderOpacity)
    root.style.setProperty('--glass-border-radius', `${config.borderRadius}px`)
  }, [config])

  // Apply dark mode
  useEffect(() => {
    const body = document.body
    const root = document.documentElement
    
    if (darkMode) {
      body.classList.add('dark-mode')
      // Dark mode glass variables
      root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.4)')
      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)')
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.7)')
      root.style.setProperty('--bg-overlay', 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9))')
    } else {
      body.classList.remove('dark-mode')
      // Light mode glass variables
      root.style.setProperty('--glass-bg', `rgba(255, 255, 255, ${config.opacity})`)
      root.style.setProperty('--glass-border', `rgba(255, 255, 255, ${config.borderOpacity})`)
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.8)')
      root.style.setProperty('--bg-overlay', 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))')
    }
  }, [darkMode, config.opacity, config.borderOpacity])

  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  const presets = {
    minimal: { opacity: 0.05, blur: 15, saturation: 120, brightness: 105, contrast: 100, hueRotate: 0, borderRadius: 20, borderOpacity: 0.15 },
    vibrant: { opacity: 0.2, blur: 25, saturation: 200, brightness: 120, contrast: 110, hueRotate: 30, borderRadius: 12, borderOpacity: 0.4 },
    crystalline: { opacity: 0.08, blur: 8, saturation: 150, brightness: 130, contrast: 120, hueRotate: 180, borderRadius: 8, borderOpacity: 0.6 },
    flowing: { opacity: 0.15, blur: 30, saturation: 170, brightness: 115, contrast: 105, hueRotate: 90, borderRadius: 24, borderOpacity: 0.25 }
  }

  const applyPreset = (presetName) => {
    const preset = presets[presetName]
    if (preset) {
      setConfig(prev => ({ ...prev, ...preset }))
    }
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-sticky' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon"><LiquidGlassIcon size={24} color="currentColor" /></div>
            <div>
              <h1>Liquid Glass UI</h1>
            </div>
          </div>
          
          <div className="header-controls">
            <div className="preview-modes">
              {['chat', 'contact', 'status'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setPreviewMode(mode)}
                  className={`mode-btn ${previewMode === mode ? 'active' : ''}`}
                >
                  {mode}
                </button>
              ))}
            </div>
            
            <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
              {darkMode ? <SunIcon size={20} color="currentColor" /> : <MoonIcon size={20} color="currentColor" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Preview */}
        <div className="preview-section">
          <div className="preview-container">
            {previewMode === 'chat' && (
              <div className="chat-preview">
                {/* Chat Header */}
                <div className="glass-element chat-header">
                  <div className="avatar">E</div>
                  <div className="chat-info">
                    <h3>Elijah on X</h3>
                    <p>online</p>
                  </div>
                  <div className="chat-actions">
                    <button><PhoneIcon size={20} color="currentColor" /></button>
                    <button><VideoIcon size={20} color="currentColor" /></button>
                    <button><MoreIcon size={20} color="currentColor" /></button>
                  </div>
                </div>

                {/* Messages */}
                <div className="messages">
                  <div className="message received">
                    <div className="message-avatar">E</div>
                    <div className="glass-element message-bubble">
                      <p>Hey! How's the liquid glass effect looking?</p>
                      <span className="time">2:34 PM</span>
                    </div>
                  </div>

                  <div className="message sent">
                    <div className="glass-element message-bubble sent-bubble">
                      <p>It looks amazing! The blur and transparency effects are perfect :)</p>
                      <div className="message-meta">
                        <span className="time">2:35 PM</span>
                        <span className="checkmarks">✓✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="message received">
                    <div className="message-avatar">E</div>
                    <div className="glass-element message-bubble voice-message">
                      <div className="voice-controls">
                        <button className="play-btn"><PlayIcon size={20} color="currentColor" /></button>
                        <div className="waveform">
                          {[...Array(15)].map((_, i) => (
                            <div key={i} className="wave-bar" style={{ height: `${Math.random() * 20 + 8}px` }} />
                          ))}
                        </div>
                        <span className="duration">0:15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="glass-element chat-input">
                  <button><AttachIcon size={20} color="currentColor" /></button>
                  <input type="text" placeholder="Type a message..." />
                  <button className="emoji-btn">😊</button>
                  <button><MicIcon size={20} color="currentColor" /></button>
                </div> 
              </div>
            )}

            {previewMode === 'contact' && (
              <div className="contact-preview">
                <div className="glass-element contact-card">
                  <div className="contact-avatar">
                    <div className="avatar large">F</div>
                    <div className="status-dot"></div>
                  </div>
                  <h2>Emmanuel Fatade</h2>
                  <p>+1 (555) 123-4567</p>
                  <p className="last-seen">Last seen today at 3:45 PM</p>
                  
                  <div className="contact-actions">
                    <button className="action-btn">
                      <span><MessageIcon size={20} color="currentColor" /></span>
                      <span>Message</span>
                    </button>
                    <button className="action-btn">
                      <span><PhoneIcon size={20} color="currentColor" /></span>
                      <span>Call</span>
                    </button>
                    <button className="action-btn">
                      <span><VideoIcon size={20} color="currentColor" /></span>
                      <span>Video</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {previewMode === 'status' && (
              <div className="status-preview">
                <div className="glass-element my-status">
                  <div className="status-item">
                    <div className="avatar">M</div>
                    <div className="status-info">
                      <h3>My Status</h3>
                      <p>Tap to add status update</p>
                    </div>
                    <button className="add-status"><AddIcon size={20} color="currentColor" /></button>
                  </div>
                </div>

                <div className="recent-updates">
                  <h4>Recent updates</h4>
                  {['Emma Wilson', 'David Adenuga', 'Esther Wang'].map((name, i) => (
                    <div key={name} className="glass-element status-item">
                      <div className="avatar">{name[0]}</div>
                      <div className="status-info">
                        <h3>{name}</h3>
                        <p>{['25 minutes ago', '1 hour ago', '3 hours ago'][i]}</p>
                      </div>
                      <div className="status-indicator"></div>
                    </div>
                  ))}
                </div>

                {/* iOS Control Center Demo */}
                <div className="ios-controls-demo" style={{ marginTop: '24px' }}>
                  <h4 style={{ marginBottom: '16px', opacity: 0.8, fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>iOS Control Center Demo</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    <div className="glass-element ios-blue" style={{ aspectRatio: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ marginBottom: '8px' }}><WiFiIcon size={24} color="white" /></div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>WiFi</div>
                    </div>
                    <div className="glass-element ios-blue" style={{ aspectRatio: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ marginBottom: '8px' }}><BluetoothIcon size={24} color="white" /></div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>Bluetooth</div>
                    </div>
                    <div className="glass-element" style={{ aspectRatio: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ marginBottom: '8px' }}><AirplaneIcon size={24} color="white" /></div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>Airplane</div>
                    </div>
                    <div className="glass-element ios-green" style={{ aspectRatio: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ marginBottom: '8px' }}><BatteryIcon size={24} color="white" /></div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>Battery</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginTop: '12px' }}>
                    <div className="glass-element" style={{ padding: '16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                      <BrightnessIcon size={20} color="white" />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '4px' }}>Brightness</div>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
                          <div style={{ height: '100%', width: '70%', background: 'white', borderRadius: '2px' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="glass-element ios-orange" style={{ aspectRatio: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ marginBottom: '8px' }}><LockIcon size={24} color="white" /></div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>Lock</div>
                    </div>
                    <div className="glass-element ios-red" style={{ aspectRatio: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ marginBottom: '8px' }}><FocusIcon size={24} color="white" /></div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>Focus</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="controls-section">
          <div className="glass-element controls-panel">
            <h2>Liquid Glass Controls</h2>
            
            {/* Background Selection */}
            <div className="control-group">
              <h3>Background</h3>
              <div className="background-grid">
                {[
                  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop'
                ].map((bg, i) => (
                  <button
                    key={i}
                    onClick={() => setBackgroundImage(bg)}
                    className={`bg-option ${backgroundImage === bg ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${bg})` }}
                  />
                ))}
              </div>
            </div>

            {/* Glass Properties */}
            <div className="control-group">
              <h3>Appearance</h3>
              <Slider
                label="Opacity"
                value={config.opacity}
                onChange={(v) => updateConfig('opacity', v)}
                min={0}
                max={1}
                step={0.01}
              />
              <Slider
                label="Blur"
                value={config.blur}
                onChange={(v) => updateConfig('blur', v)}
                min={0}
                max={50}
                step={1}
                unit="px"
              />
              <Slider
                label="Border Radius"
                value={config.borderRadius}
                onChange={(v) => updateConfig('borderRadius', v)}
                min={0}
                max={40}
                step={1}
                unit="px"
              />
            </div>

            <div className="control-group">
              <h3>Color Effects</h3>
              <Slider
                label="Saturation"
                value={config.saturation}
                onChange={(v) => updateConfig('saturation', v)}
                min={0}
                max={300}
                step={5}
                unit="%"
              />
              <Slider
                label="Brightness"
                value={config.brightness}
                onChange={(v) => updateConfig('brightness', v)}
                min={50}
                max={200}
                step={5}
                unit="%"
              />
              <Slider
                label="Hue Rotate"
                value={config.hueRotate}
                onChange={(v) => updateConfig('hueRotate', v)}
                min={0}
                max={360}
                step={15}
                unit="°"
              />
            </div>

            {/* Effects */}
            <div className="control-group">
              <h3>Effects</h3>
              <Toggle
                label="Specular Highlights"
                checked={config.specularHighlight}
                onChange={(v) => updateConfig('specularHighlight', v)}
              />
              <Toggle
                label="Liquid Animation"
                checked={config.liquidAnimation}
                onChange={(v) => updateConfig('liquidAnimation', v)}
              />
            </div>

            {/* Presets */}
            <div className="control-group">
              <h3>Presets</h3>
              <div className="preset-buttons">
                {Object.keys(presets).map(preset => (
                  <button
                    key={preset}
                    onClick={() => applyPreset(preset)}
                    className="preset-btn"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 