"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Navigation from "@/components/Navigation";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function AuthRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <motion.body
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
      <Navigation />
    </motion.body>
  );
}
