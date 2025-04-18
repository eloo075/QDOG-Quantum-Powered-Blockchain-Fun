"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bone, Dog, ExternalLink, Lock, Rocket, Shield, Twitter, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { FallingElements } from "@/components/FallingElements";
import { QanxInfo } from "@/components/QanxInfo";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { BlackHole } from "@/components/BlackHole";

export default function Home() {
  useEffect(() => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio && audio.paused) {
      console.log('Auto-play blocked by browser');
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5 relative">
      <BackgroundMusic />
      <div className="quantum-grid" />
      <BlackHole />
      <div className="cosmic-background" />
      <FallingElements />
      

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="quantum-particles" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-block animate-bounce mb-4">
              <span className="text-4xl">🐾</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
              Meet QDOG: The Quantum Pup with a Playful Bite!
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Bark to the future! QDOG is here to unleash quantum energy, wagging tails, and blockchain surprises. 
              Fetching innovation on the QANX Network—Mainnet launch incoming!
            </p>
            <div className="mt-10">
              <Button 
                className="quantum-button text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 font-semibold tracking-wide"
              >
                🎾 Join the Quantum Revolution (Waitlist) 🎾
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QANX Phases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="quantum-particles opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
            The Power of QANplatform
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 font-light italic">
            Post-Quantum blockchain launching its Mainnet soon
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Phase 1 */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/20 quantum-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">Quantum-Resistant Development</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  QDOG is being built on the QANplatform, the quantum-resistant Layer 1 hybrid blockchain platform. 
                  It enables developers and enterprises to build quantum-resistant solutions including smart contracts, 
                  DApps, DeFi, DAOs, tokens, CBDCs, NFTs, Metaverse, and Web3 solutions in any programming language.
                </p>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/20 quantum-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">Revolutionary Blockchain Technology</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  QANplatform is pioneering quantum-resistant hybrid blockchain with unmatched time to market for Web3 development. 
                  Serving retail, institutions, and government infrastructure projects, it achieved a major milestone in March 2024 
                  with adoption by the first EU country. The platform empowers developers with quantum-resistant security while 
                  maintaining the freedom to code in their preferred languages.
                </p>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/20 quantum-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">Industry Leadership</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  QANplatform has joined the Linux Foundation's Post-Quantum Cryptography Alliance (PQCA), 
                  alongside industry giants like IBM, Google, Meta, and Nvidia. This partnership demonstrates 
                  QANplatform's commitment to advancing quantum-resistant blockchain technology alongside 
                  the world's leading tech innovators.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://www.qanplatform.com/en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
            >
              Learn More About QANplatform
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Add QanxInfo section here */}
      <QanxInfo />

      {/* Media Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
            QDOG Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-1.jpg.jpg"
                alt="QDOG Design 1" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Quantum Realm Explorer</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-2.jpg.jpg" 
                alt="QDOG Design 2" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Portal Guardian</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-3.jpg.jpg" 
                alt="QDOG Design 3" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Cyberpunk Companion</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-4.jpg.jpg" 
                alt="QDOG Design 4" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Neural Pulse Sentinel</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-5.jpg.jpg" 
                alt="QDOG Design 5" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Cosmic Explorer</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-6.jpg.jpg" 
                alt="QDOG Design 6" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Holographic Drift Warden</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-7.jpg.jpg" 
                alt="QDOG Design 7" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Nano Synth Operative</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-8.jpg.jpg" 
                alt="QDOG Design 8" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Astral Cryptic Navigator</p>
              </div>
            </div>
            <div className="media-container aspect-square">
              <img 
                src="/images/qdog-9.jpg.jpg" 
                alt="QDOG Design 9" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="media-overlay">
                <p className="text-white text-lg font-medium tracking-wide">Chronoflux Vigil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
            Bringing Quantum Energy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="video-container">
              <video controls autoPlay loop className="w-full h-full object-cover rounded-lg">
                <source src="/videos/video_2025-04-11_14-14-07.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-container">
              <video controls autoPlay loop className="w-full h-full object-cover rounded-lg">
                <source src="/videos/video_2025-04-11_14-14-04.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-container">
              <video controls autoPlay loop className="w-full h-full object-cover rounded-lg">
                <source src="/videos/video_2025-04-11_14-14-02.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* What is QDOG Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
            What is QDOG?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 font-light italic">Where quantum tech meets belly rubs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur quantum-glow">
              <Dog className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Quantum Fetch</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Solve puzzles, earn rewards, and watch QDOG "fetch" surprises from the quantum void.
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur quantum-glow">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Hyper-Energy</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our community runs on 110% mischief (naps optional).
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur quantum-glow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Unshakable Security</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                QANX's quantum-resistant blockchain keeps your bones (and data) safe.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
              QDOG Tokenomics
            </h2>
            <p className="text-xl text-muted-foreground font-light italic">Fair, Transparent, and Pack-First Distribution</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12 rounded-full bg-card/30 backdrop-blur-sm border-2 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all duration-300 hover:shadow-[0_0_80px_rgba(16,185,129,0.5)]">
                  <h3 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-3">
                    Total Supply
                  </h3>
                  <div className="relative">
                    <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 tracking-wider">
                      100,000,000
                    </p>
                    <p className="text-2xl font-bold text-emerald-400 mt-1 tracking-[0.2em]">
                      QDOG
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 quantum-glow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <Dog className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">Community (70%)</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">The Pack Rules! Fueling rewards, games, and governance. Because you are the alpha!</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 quantum-glow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">CEX Listings (13%)</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">Reserved for exchange listings and liquidity pools to ensure smooth trading.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 quantum-glow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">Developers (7%)</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">Locked for 1 year, released proportionally over 2 years to keep our paws on long-term growth.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 quantum-glow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">Marketing (10%)</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">Released after TGE to fuel growth, partnerships, and global adoption.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* QANX Network Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
            Why QANX Network?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 font-light italic">Because even quantum dogs need a future-proof leash!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="quantum-glow p-6 rounded-lg">
              <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Quantum-Safe 🛡️</h3>
              <p className="font-light leading-relaxed">Hackers? More like squirrels—QANX keeps them chasing tails.</p>
            </div>
            <div className="quantum-glow p-6 rounded-lg">
              <Zap className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Lightning Speed ⚡</h3>
              <p className="font-light leading-relaxed">Transactions faster than QDOG chasing a laser pointer.</p>
            </div>
            <div className="quantum-glow p-6 rounded-lg">
              <Rocket className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Designed for Tomorrow 🚀</h3>
              <p className="font-light leading-relaxed">We're digging holes to 3023, not burying bones in the past.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://www.qanplatform.com/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors quantum-button px-4 py-2 rounded-lg font-medium tracking-wide"
            >
              Learn more about QAN Platform <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Join the Pack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 [text-shadow:_0_2px_10px_rgb(59_130_246_/_30%)]">
            Join the Quantum Pack
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-light italic">Follow us on social media for the latest updates!</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/The_QuantumDog"
              target="_blank"
              rel="noopener noreferrer"
              className="quantum-button inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 backdrop-blur hover:bg-card/70 transition-all font-medium tracking-wide"
            >
              <Twitter className="h-5 w-5" />
              Follow on X
            </a>
            <a
              href="https://t.me/The_Quantum_Qdog"
              target="_blank"
              rel="noopener noreferrer"
              className="quantum-button inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 backdrop-blur hover:bg-card/70 transition-all font-medium tracking-wide"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.145.118.181.344.203.483.023.139.041.454.041.454z"/>
              </svg>
              Join Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-2xl font-extrabold">
              <Dog className="h-8 w-8 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">QDOG</span>
            </div>
            <a 
              href="https://www.qanplatform.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors quantum-button px-2 py-1 rounded font-medium tracking-wide"
            >
              QAN Platform <ExternalLink className="h-3 w-3" />
            </a>
            <p className="text-sm text-muted-foreground font-light">
              © 2025 The Quantum Dog (QDOG). Built with qubits, kibble, and infinite zoomies.
            </p>
          </div>
        </div>
      </footer>

      <audio id="background-music" autoPlay loop muted>
        <source src="/music/quantum-beats.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}
