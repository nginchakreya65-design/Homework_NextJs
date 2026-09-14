import { Metadata } from 'next';
import React from 'react'
// static metadata for about page
export const metadata: Metadata = {
  title: 'About',
  description: "This is about page of BlockCommerce which detail about how the service was created with mission, vision, and team.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title:'About',
     description: 'This is about page of BlockCommerce which detail about how the service was created with mission, vision, and team.',
     images: ['A1_Thumbnail_project.png']
  }
};

export default function AboutPage() {
  return (
    <div>
    
    </div>
  )
}
