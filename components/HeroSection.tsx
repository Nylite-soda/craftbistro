"use client";

import { Button, Container } from "@mantine/core";
import {
  IconBrandFacebook,
  IconStar,
  IconArrowDown,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

type ParticleData = { left: string; top: string; animationDelay: string };

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ParticleData[]>([]);

  // Set initial visibility and mouse tracking
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth scroll to sections
  const scrollToMenu = () =>
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  const scrollToReservations = () =>
    document
      .getElementById("reservations")
      ?.scrollIntoView({ behavior: "smooth" });

  // Typing effect
  useEffect(() => {
    const txt = "Modern Cuisine.";
    const speed = 100;
    let i = 0;

    const typeWriter = () => {
      const typeElem = document.getElementById("type");
      if (typeElem && i < txt.length) {
        typeElem.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, []);

  // Generate particles only on client
  useEffect(() => {
    const generatedParticles: ParticleData[] = Array.from(
      { length: 20 },
      () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      })
    );
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      suppressHydrationWarning
    >
      {/* Animated Background Particles */}
      <div className="particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          // transform: `translate(${mousePosition.x * 0.01}px, ${
          //   mousePosition.y * 0.01
          // }px)`,
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-restaurant-gold/20 rotate-45 animate-float" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-restaurant-gold/30 animate-float animate-delay-300" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-restaurant-gold/10 rounded-full animate-pulse-custom animate-delay-500" />
      </div>

      {/* Content Container */}
      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-restaurant-cream mb-6 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            Historic Charm.
            <br />
            <span className="text-restaurant-gold">
              <span id="type"></span>
              <span className=" typewriter animate-glow"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`font-sans text-lg sm:text-xl md:text-2xl text-restaurant-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"
            }`}
          >
            Fine Dining in the Heart of West Jefferson's Historic Theater
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "animate-scale-in-bounce animate-delay-500"
                : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              onClick={scrollToReservations}
              className="interactive-button !bg-restaurant-burgundy hover:!bg-restaurant-burgundy-dark !text-restaurant-cream font-sans font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              leftSection={<IconStar size={24} />}
            >
              Reserve a Table
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToMenu}
              className="interactive-button border-2 !border-restaurant-gold !text-restaurant-gold !hover:bg-restaurant-gold !hover:text-restaurant-brown font-sans font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm"
              leftSection={<IconArrowDown size={24} />}
            >
              View Our Menu
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 ${
              isVisible
                ? "animate-slide-in-bottom animate-delay-300"
                : "opacity-0"
            }`}
          >
            {/* TripAdvisor Rating */}
            <div className="interactive-card flex items-center gap-2 bg-restaurant-cream/10 backdrop-blur-md rounded-xl px-4 py-2 border border-restaurant-gold/30 hover:border-restaurant-gold/60">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={i}
                    className="w-4 h-4 fill-restaurant-gold text-restaurant-gold animate-rotate-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-restaurant-cream font-open-sans font-medium">
                4.9★ TripAdvisor
              </span>
            </div>

            {/* Facebook Badge */}
            <div className="flex items-center gap-2 bg-restaurant-cream/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-restaurant-gold/20">
              <IconBrandFacebook className="w-4 h-4 text-restaurant-gold" />
              <span className="text-restaurant-cream font-open-sans font-medium">
                Follow Us
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-restaurant-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-restaurant-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};
