"use client";
import dynamic from "next/dynamic";
import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogSection";
import ConstructionUpdate from "@/components/ConstructionUpdate";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import Footer from "@/components/Footer";
// import GallerySection from "@/components/GallerySection";
const GallerySection = dynamic(() => import("@/components/GallerySection"), { ssr: false });
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import MoreAboutProject from "@/components/MoreAboutProject";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";

export default function Home() {
  return (
    <>
    <HeroSection/>
    {/* <HeroSection1/> */}
    <ProjectHighlights/>
    <PriceListSection/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <ConstructionUpdate/>
    <MoreAboutProject/>
    <FaqSection/>
    </>
  );
}
