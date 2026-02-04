"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Music } from "lucide-react"

const userName = "Arvin"

const mockTrack = {
  name: "Blinding Lights",
  artist: "The Weeknd",
  album: "After Hours",
  albumArt: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
  isPlaying: true,
  progress: 65,
  duration: "3:20",
  spotifyUrl: "https://open.spotify.com",
}

export function SpotifyWidget() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card border border-border rounded-2xl p-4 shadow-xl w-72"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Now Playing
                </span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-secondary rounded-full transition-colors"
                aria-label="Close widget"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="flex gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                <img
                  src={mockTrack.albumArt || "/placeholder.svg"}
                  alt={mockTrack.album}
                  className="w-full h-full object-cover"
                />
                {mockTrack.isPlaying && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="flex items-end gap-0.5 h-4">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-[#1DB954] rounded-full"
                          animate={{ height: ["40%", "100%", "40%"] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate text-sm">
                  {mockTrack.name}
                </h4>
                <p className="text-xs text-muted-foreground truncate">
                  {mockTrack.artist}
                </p>
                <p className="text-xs text-muted-foreground/70 truncate">
                  {mockTrack.album}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#1DB954] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${mockTrack.progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {mockTrack.isPlaying ? "Playing on Spotify" : "Paused"}
              </span>
              <a
                href={mockTrack.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[#1DB954] hover:underline"
              >
                Open <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 sm:gap-3 bg-card border border-border rounded-full shadow-lg pl-1 pr-2 sm:pr-4 py-1 group relative"
            aria-label="Show currently playing on Spotify"
          >
            {/* Album art */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={mockTrack.albumArt || "/placeholder.svg"}
                alt={mockTrack.album}
                className="w-full h-full object-cover"
              />
              {/* Pulse ring animation */}
              <span className="absolute inset-0 rounded-full border-2 border-[#1DB954] animate-pulse" />
            </div>
            
            {/* Track info - hidden on mobile, visible on sm+ */}
            <div className="hidden sm:flex flex-col items-start min-w-0 max-w-48">
              <span className="text-[10px] text-[#1DB954] font-medium uppercase tracking-wider flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]" />
                </span>
                {userName} is listening to
              </span>
              <span className="text-sm font-medium text-foreground truncate w-full">
                {mockTrack.name}
              </span>
              <span className="text-xs text-muted-foreground truncate w-full">
                {mockTrack.artist}
              </span>
            </div>
            
            {/* Spotify icon - always visible */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
              <svg className="w-full h-full text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
