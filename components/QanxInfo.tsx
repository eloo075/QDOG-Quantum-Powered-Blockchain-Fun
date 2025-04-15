"use client";

import { Card } from "@/components/ui/card";
import { Shield, Code, Zap } from "lucide-react";

export function QanxInfo() {
  return (
    <section className="py-24 quantum-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="black-hole absolute -top-20 -right-20 opacity-50"></div>
          <div className="black-hole absolute -bottom-20 -left-20 opacity-50"></div>
          
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 quantum-text-glow">
              POWERED BY QAN PLATFORM
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              The quantum-resistant Layer 1 hybrid blockchain platform enabling the future of secure Web3 development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/20 quantum-glow">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">QUANTUM-RESISTANT SECURITY</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Built with post-quantum cryptography to protect against both classical and quantum computing threats.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/20 quantum-glow">
              <Code className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">MULTI-LANGUAGE SUPPORT</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Develop smart contracts and dApps in any programming language, revolutionizing blockchain development.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/20 quantum-glow">
              <Zap className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">ENTERPRISE READY</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Trusted by major institutions and now integrated with the first EU country's infrastructure.
              </p>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl quantum-glow">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              QANplatform has joined the Linux Foundation's Post-Quantum Cryptography Alliance (PQCA), alongside industry giants like IBM, Google, Meta, and Nvidia, cementing its position at the forefront of quantum-resistant blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}