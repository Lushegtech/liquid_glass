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

const LightningIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
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

function App() {
  const [config, setConfig] = useState({
    opacity: 0.15,
    blur: 20,
    saturation: 180,
    brightness: 110,
    contrast: 100,
    hueRotate: 0,
    borderRadius: 16,
    borderOpacity: 0.3,
    specularHighlight: true,
    liquidAnimation: true
  })

  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')
  const [darkMode, setDarkMode] = useState(false)
  const [previewMode, setPreviewMode] = useState('chat')

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
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon"><LightningIcon size={24} color="currentColor" /></div>
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
                    <div className="avatar large">S</div>
                    <div className="status-dot"></div>
                  </div>
                  <h2>Sarah Chen</h2>
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
                  {['Emma Wilson', 'David Kim', 'Lisa Zhang'].map((name, i) => (
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