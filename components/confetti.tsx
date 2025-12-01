"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  scale: number
}

export function Confetti({ trigger }: { trigger: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (trigger) {
      const colors = ["#0A5F4E", "#E85D4C", "#F39C12", "#4ECDC4", "#9B59B6"]
      const newPieces: ConfettiPiece[] = []

      for (let i = 0; i < 20; i++) {
        newPieces.push({
          id: i,
          x: 50 + (Math.random() - 0.5) * 60,
          y: 50 + (Math.random() - 0.5) * 60,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5,
        })
      }

      setPieces(newPieces)

      const timeout = setTimeout(() => {
        setPieces([])
      }, 600)

      return () => clearTimeout(timeout)
    }
  }, [trigger])

  if (pieces.length === 0) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-burst absolute h-2 w-2 rounded-full"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`,
          }}
        />
      ))}
    </div>
  )
}
