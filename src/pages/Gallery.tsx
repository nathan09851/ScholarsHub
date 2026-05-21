import { useState } from "react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { localBusinessJsonLd } from "@/lib/structuredData";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Image categories for filtering
const categories = ["All", "Trips & Events", "10th Std 2025-2026"];

// Gallery images — all using WebP (97–98% smaller than raw JPEGs)
// Fallback src points to original for browsers without WebP support (Edge Legacy only)
const galleryImages = [
  { id: 1, src: "/gallery-webp/media__1776553220783.webp", fallback: "/gallery-images/media__1776553220783.jpg", alt: "Students engaged in a class discussion", category: "Trips & Events" },
  { id: 2, src: "/gallery-webp/media__1776553220792.webp", fallback: "/gallery-images/media__1776553220792.jpg", alt: "Student eating a snack during break", category: "Trips & Events" },
  { id: 3, src: "/gallery-webp/media__1776553221092.webp", fallback: "/gallery-images/media__1776553221092.jpg", alt: "Students talking near the campus garden", category: "Trips & Events" },
  { id: 4, src: "/gallery-webp/media__1776555466477.webp", fallback: "/gallery-images/media__1776555466477.jpg", alt: "Student with a backpack", category: "Trips & Events" },
  { id: 5, src: "/gallery-webp/media__1776553221134.webp", fallback: "/gallery-images/media__1776553221134.jpg", alt: "Students enjoying outdoor time", category: "Trips & Events" },
  { id: 6, src: "/gallery-webp/media__1776553221130.webp", fallback: "/gallery-images/media__1776553221130.jpg", alt: "Students collaborating on a project", category: "Trips & Events" },
  // Trip & Event Images
  { id: 7,  src: "/gallery-webp/IMG_1691.webp",  fallback: "/gallery-images/IMG_1691.JPG",  alt: "Student splashing in the pool during the school trip", category: "Trips & Events" },
  { id: 8,  src: "/gallery-webp/IMG_1731.webp",  fallback: "/gallery-images/IMG_1731.JPG",  alt: "Cheerful student enjoying the pool outing", category: "Trips & Events" },
  { id: 9,  src: "/gallery-webp/IMG_2054.webp",  fallback: "/gallery-images/IMG_2054.JPG",  alt: "Students having fun in the water", category: "Trips & Events" },
  { id: 10, src: "/gallery-webp/IMG_1726.webp",  fallback: "/gallery-images/IMG_1726.JPG",  alt: "Exciting moment during the school picnic", category: "Trips & Events" },
  { id: 11, src: "/gallery-webp/IMG_1752.webp",  fallback: "/gallery-images/IMG_1752.JPG",  alt: "Students participating in outdoor activities", category: "Trips & Events" },
  { id: 12, src: "/gallery-webp/IMG_1757.webp",  fallback: "/gallery-images/IMG_1757.JPG",  alt: "Fun times at the water park", category: "Trips & Events" },
  { id: 13, src: "/gallery-webp/IMG_1765.webp",  fallback: "/gallery-images/IMG_1765.JPG",  alt: "Student groups enjoying the sunny day", category: "Trips & Events" },
  { id: 14, src: "/gallery-webp/IMG_1771.webp",  fallback: "/gallery-images/IMG_1771.JPG",  alt: "Laughter and joy during the field trip", category: "Trips & Events" },
  { id: 15, src: "/gallery-webp/IMG_1782.webp",  fallback: "/gallery-images/IMG_1782.JPG",  alt: "Memories from the annual school outing", category: "Trips & Events" },
  { id: 16, src: "/gallery-webp/IMG_1819.webp",  fallback: "/gallery-images/IMG_1819.JPG",  alt: "Students bonding outside the classroom", category: "Trips & Events" },
  { id: 17, src: "/gallery-webp/IMG_1862.webp",  fallback: "/gallery-images/IMG_1862.JPG",  alt: "Water slide fun with students", category: "Trips & Events" },
  { id: 18, src: "/gallery-webp/IMG_1864.webp",  fallback: "/gallery-images/IMG_1864.JPG",  alt: "Exciting slide action at the park", category: "Trips & Events" },
  { id: 19, src: "/gallery-webp/IMG_1869.webp",  fallback: "/gallery-images/IMG_1869.JPG",  alt: "Group of students at the top of the slide", category: "Trips & Events" },
  { id: 20, src: "/gallery-webp/IMG_1871.webp",  fallback: "/gallery-images/IMG_1871.JPG",  alt: "Getting ready for a splash", category: "Trips & Events" },
  { id: 21, src: "/gallery-webp/IMG_1954.webp",  fallback: "/gallery-images/IMG_1954.JPG",  alt: "Student smiling for a photo at the event", category: "Trips & Events" },
  { id: 22, src: "/gallery-webp/IMG_2037.webp",  fallback: "/gallery-images/IMG_2037.JPG",  alt: "Candid moment of student life", category: "Trips & Events" },
  { id: 23, src: "/gallery-webp/IMG_2038.webp",  fallback: "/gallery-images/IMG_2038.JPG",  alt: "Friends enjoying the school trip together", category: "Trips & Events" },
  { id: 24, src: "/gallery-webp/group-photo.webp", fallback: "/gallery-images/group-photo.jpeg", alt: "Group photo of students and teachers", category: "Trips & Events" },
  // 10th Std 2025-2026 Batch Images from Google Drive
  { id: 25, src: "https://lh3.googleusercontent.com/d/1LzxthWVtXYG47ynQSbucQ8fBBITvQGuS", fallback: "https://lh3.googleusercontent.com/d/1LzxthWVtXYG47ynQSbucQ8fBBITvQGuS", alt: "10th Std 2025-2026 Batch - Memory 1", category: "10th Std 2025-2026" },
  { id: 26, src: "https://lh3.googleusercontent.com/d/17nmr06B8UeS2bTHvVOKwBJEx4WIDVbr2", fallback: "https://lh3.googleusercontent.com/d/17nmr06B8UeS2bTHvVOKwBJEx4WIDVbr2", alt: "10th Std 2025-2026 Batch - Memory 2", category: "10th Std 2025-2026" },
  { id: 27, src: "https://lh3.googleusercontent.com/d/1h5bI0TK4evabhexXTWb3QW0-xoKKpAMb", fallback: "https://lh3.googleusercontent.com/d/1h5bI0TK4evabhexXTWb3QW0-xoKKpAMb", alt: "10th Std 2025-2026 Batch - Memory 3", category: "10th Std 2025-2026" },
  { id: 28, src: "https://lh3.googleusercontent.com/d/1U_SmMr2EWlda-TdwVfQY6JM8-D6ET6OI", fallback: "https://lh3.googleusercontent.com/d/1U_SmMr2EWlda-TdwVfQY6JM8-D6ET6OI", alt: "10th Std 2025-2026 Batch - Memory 4", category: "10th Std 2025-2026" },
  { id: 29, src: "https://lh3.googleusercontent.com/d/1Jg_k0CcvBDBuCk_D2KW6j7w1OCBr8_aU", fallback: "https://lh3.googleusercontent.com/d/1Jg_k0CcvBDBuCk_D2KW6j7w1OCBr8_aU", alt: "10th Std 2025-2026 Batch - Memory 5", category: "10th Std 2025-2026" },
  { id: 30, src: "https://lh3.googleusercontent.com/d/1J_27jDErdnQgEDxvj9NzKxDIKXYCU2aE", fallback: "https://lh3.googleusercontent.com/d/1J_27jDErdnQgEDxvj9NzKxDIKXYCU2aE", alt: "10th Std 2025-2026 Batch - Memory 6", category: "10th Std 2025-2026" },
  { id: 31, src: "https://lh3.googleusercontent.com/d/1cRyEMN5YB4S5LOI4swRTguKsYmT7Voko", fallback: "https://lh3.googleusercontent.com/d/1cRyEMN5YB4S5LOI4swRTguKsYmT7Voko", alt: "10th Std 2025-2026 Batch - Memory 7", category: "10th Std 2025-2026" },
  { id: 32, src: "https://lh3.googleusercontent.com/d/1GuCarb4mBIJfp2xHSXjw8jkxtbb_R-WF", fallback: "https://lh3.googleusercontent.com/d/1GuCarb4mBIJfp2xHSXjw8jkxtbb_R-WF", alt: "10th Std 2025-2026 Batch - Memory 8", category: "10th Std 2025-2026" },
  { id: 33, src: "https://lh3.googleusercontent.com/d/1uie5LLKcfApnFWWQeG7npy7BevAoFmqq", fallback: "https://lh3.googleusercontent.com/d/1uie5LLKcfApnFWWQeG7npy7BevAoFmqq", alt: "10th Std 2025-2026 Batch - Memory 9", category: "10th Std 2025-2026" },
  { id: 34, src: "https://lh3.googleusercontent.com/d/1ovHNHeacN69qrw4eFjMPwCxZAn9fLv7P", fallback: "https://lh3.googleusercontent.com/d/1ovHNHeacN69qrw4eFjMPwCxZAn9fLv7P", alt: "10th Std 2025-2026 Batch - Memory 10", category: "10th Std 2025-2026" },
  { id: 35, src: "https://lh3.googleusercontent.com/d/1ALNwI5pyIb8JUcPx67e_6mdwORvrVJJf", fallback: "https://lh3.googleusercontent.com/d/1ALNwI5pyIb8JUcPx67e_6mdwORvrVJJf", alt: "10th Std 2025-2026 Batch - Memory 11", category: "10th Std 2025-2026" },
  { id: 36, src: "https://lh3.googleusercontent.com/d/1zgaEvGex_634QUouYAKt7pm0F5-NP9Xa", fallback: "https://lh3.googleusercontent.com/d/1zgaEvGex_634QUouYAKt7pm0F5-NP9Xa", alt: "10th Std 2025-2026 Batch - Memory 12", category: "10th Std 2025-2026" },
  { id: 37, src: "https://lh3.googleusercontent.com/d/15fXuuGjSGmJwKPEhigyEQY-xp6Z4Zd-m", fallback: "https://lh3.googleusercontent.com/d/15fXuuGjSGmJwKPEhigyEQY-xp6Z4Zd-m", alt: "10th Std 2025-2026 Batch - Memory 13", category: "10th Std 2025-2026" },
  { id: 38, src: "https://lh3.googleusercontent.com/d/1bLZ4AgQMOLGYF29JfOaJkuauQWn7-LNm", fallback: "https://lh3.googleusercontent.com/d/1bLZ4AgQMOLGYF29JfOaJkuauQWn7-LNm", alt: "10th Std 2025-2026 Batch - Memory 14", category: "10th Std 2025-2026" },
  { id: 39, src: "https://lh3.googleusercontent.com/d/1y3j-9Izvn9qs2HDRuZHnbgMMMZpQgQgP", fallback: "https://lh3.googleusercontent.com/d/1y3j-9Izvn9qs2HDRuZHnbgMMMZpQgQgP", alt: "10th Std 2025-2026 Batch - Memory 15", category: "10th Std 2025-2026" },
  { id: 40, src: "https://lh3.googleusercontent.com/d/1ahe12CWLD5V3YXAJRC0BhaV7tNcU9Oob", fallback: "https://lh3.googleusercontent.com/d/1ahe12CWLD5V3YXAJRC0BhaV7tNcU9Oob", alt: "10th Std 2025-2026 Batch - Memory 16", category: "10th Std 2025-2026" },
  { id: 41, src: "https://lh3.googleusercontent.com/d/1iZ9RZx21Ms7nfASJFp8SSf4RHaU5gHPq", fallback: "https://lh3.googleusercontent.com/d/1iZ9RZx21Ms7nfASJFp8SSf4RHaU5gHPq", alt: "10th Std 2025-2026 Batch - Memory 17", category: "10th Std 2025-2026" },
  { id: 42, src: "https://lh3.googleusercontent.com/d/1PYGTQm592O9DjEeM1Rastx_vZ6FH5_QI", fallback: "https://lh3.googleusercontent.com/d/1PYGTQm592O9DjEeM1Rastx_vZ6FH5_QI", alt: "10th Std 2025-2026 Batch - Memory 18", category: "10th Std 2025-2026" },
  { id: 43, src: "https://lh3.googleusercontent.com/d/1eFNRO0zABSJcCnIhgM3HYmWCt9AUROnL", fallback: "https://lh3.googleusercontent.com/d/1eFNRO0zABSJcCnIhgM3HYmWCt9AUROnL", alt: "10th Std 2025-2026 Batch - Memory 19", category: "10th Std 2025-2026" },
  { id: 44, src: "https://lh3.googleusercontent.com/d/136-1LTy5cJqR7zaOZlLUn8G-Y39BY2cs", fallback: "https://lh3.googleusercontent.com/d/136-1LTy5cJqR7zaOZlLUn8G-Y39BY2cs", alt: "10th Std 2025-2026 Batch - Memory 20", category: "10th Std 2025-2026" },
  { id: 45, src: "https://lh3.googleusercontent.com/d/1XZt7kO3Gh-H1eRFAQQYdfmNBii6wQ2Ab", fallback: "https://lh3.googleusercontent.com/d/1XZt7kO3Gh-H1eRFAQQYdfmNBii6wQ2Ab", alt: "10th Std 2025-2026 Batch - Memory 21", category: "10th Std 2025-2026" },
  { id: 46, src: "https://lh3.googleusercontent.com/d/1C7IO2nGQfQ8aNale3FaLIwiaYlQyeThL", fallback: "https://lh3.googleusercontent.com/d/1C7IO2nGQfQ8aNale3FaLIwiaYlQyeThL", alt: "10th Std 2025-2026 Batch - Memory 22", category: "10th Std 2025-2026" },
  { id: 47, src: "https://lh3.googleusercontent.com/d/1MxZX2bARCcQXTbIbQ8BBmnbT5YEbrgUX", fallback: "https://lh3.googleusercontent.com/d/1MxZX2bARCcQXTbIbQ8BBmnbT5YEbrgUX", alt: "10th Std 2025-2026 Batch - Memory 23", category: "10th Std 2025-2026" },
  { id: 48, src: "https://lh3.googleusercontent.com/d/14gyGQol7pnd-CHhG5hvh8NpPeItGOIR4", fallback: "https://lh3.googleusercontent.com/d/14gyGQol7pnd-CHhG5hvh8NpPeItGOIR4", alt: "10th Std 2025-2026 Batch - Memory 24", category: "10th Std 2025-2026" },
  { id: 49, src: "https://lh3.googleusercontent.com/d/1Ez3k78ph0smGr5NMYkiOdLYWA8VtpqI7", fallback: "https://lh3.googleusercontent.com/d/1Ez3k78ph0smGr5NMYkiOdLYWA8VtpqI7", alt: "10th Std 2025-2026 Batch - Memory 25", category: "10th Std 2025-2026" },
  { id: 50, src: "https://lh3.googleusercontent.com/d/1-9IqFvvr_3cJa6kN-cYZ8eeWcmh-3PvL", fallback: "https://lh3.googleusercontent.com/d/1-9IqFvvr_3cJa6kN-cYZ8eeWcmh-3PvL", alt: "10th Std 2025-2026 Batch - Memory 26", category: "10th Std 2025-2026" },
  { id: 51, src: "https://lh3.googleusercontent.com/d/1zfmJtkhxgfDXZkjAaws8vyIl__nIJNHs", fallback: "https://lh3.googleusercontent.com/d/1zfmJtkhxgfDXZkjAaws8vyIl__nIJNHs", alt: "10th Std 2025-2026 Batch - Memory 27", category: "10th Std 2025-2026" },
  { id: 52, src: "https://lh3.googleusercontent.com/d/1PyRBBfIwh-UHartI0z60O7HfV58WT_L3", fallback: "https://lh3.googleusercontent.com/d/1PyRBBfIwh-UHartI0z60O7HfV58WT_L3", alt: "10th Std 2025-2026 Batch - Memory 28", category: "10th Std 2025-2026" },
  { id: 53, src: "https://lh3.googleusercontent.com/d/1wvddXKLOibuNwtp1HUSX7yUSWCppsNl1", fallback: "https://lh3.googleusercontent.com/d/1wvddXKLOibuNwtp1HUSX7yUSWCppsNl1", alt: "10th Std 2025-2026 Batch - Memory 29", category: "10th Std 2025-2026" },
  { id: 54, src: "https://lh3.googleusercontent.com/d/14vY-Tu_tMN4U0Iq2xvxQ66Zl0TVw5oy5", fallback: "https://lh3.googleusercontent.com/d/14vY-Tu_tMN4U0Iq2xvxQ66Zl0TVw5oy5", alt: "10th Std 2025-2026 Batch - Memory 30", category: "10th Std 2025-2026" },
  { id: 55, src: "https://lh3.googleusercontent.com/d/11vPBcEGiRUgZ6Boqiwb4Py1JMOqu0Urz", fallback: "https://lh3.googleusercontent.com/d/11vPBcEGiRUgZ6Boqiwb4Py1JMOqu0Urz", alt: "10th Std 2025-2026 Batch - Memory 31", category: "10th Std 2025-2026" },
  { id: 56, src: "https://lh3.googleusercontent.com/d/1OrTu3t1fNEIwU3BWH0khKdfjbYUF1-je", fallback: "https://lh3.googleusercontent.com/d/1OrTu3t1fNEIwU3BWH0khKdfjbYUF1-je", alt: "10th Std 2025-2026 Batch - Memory 32", category: "10th Std 2025-2026" },
  { id: 57, src: "https://lh3.googleusercontent.com/d/11AD_Ok8m2dgYawbzXD216cHMxukAmmHE", fallback: "https://lh3.googleusercontent.com/d/11AD_Ok8m2dgYawbzXD216cHMxukAmmHE", alt: "10th Std 2025-2026 Batch - Memory 33", category: "10th Std 2025-2026" },
  { id: 58, src: "https://lh3.googleusercontent.com/d/1M7tPFvOJL02rQZwljX7dLxMd8UUOdDdP", fallback: "https://lh3.googleusercontent.com/d/1M7tPFvOJL02rQZwljX7dLxMd8UUOdDdP", alt: "10th Std 2025-2026 Batch - Memory 34", category: "10th Std 2025-2026" },
  { id: 59, src: "https://lh3.googleusercontent.com/d/1cxFmxK-wuhs3ng29Odcqx7YcD3V7A58C", fallback: "https://lh3.googleusercontent.com/d/1cxFmxK-wuhs3ng29Odcqx7YcD3V7A58C", alt: "10th Std 2025-2026 Batch - Memory 35", category: "10th Std 2025-2026" },
  { id: 60, src: "https://lh3.googleusercontent.com/d/1csvHrV68Bcz6NNasLo5SgaZNfXZ6cIsp", fallback: "https://lh3.googleusercontent.com/d/1csvHrV68Bcz6NNasLo5SgaZNfXZ6cIsp", alt: "10th Std 2025-2026 Batch - Memory 36", category: "10th Std 2025-2026" },
  { id: 61, src: "https://lh3.googleusercontent.com/d/1pAlY9bkEuqeWdvFmXXHfT_gC1rlhzUl8", fallback: "https://lh3.googleusercontent.com/d/1pAlY9bkEuqeWdvFmXXHfT_gC1rlhzUl8", alt: "10th Std 2025-2026 Batch - Memory 37", category: "10th Std 2025-2026" },
  { id: 62, src: "https://lh3.googleusercontent.com/d/1QEigpcBAitIg-juATuRvVOUrEFka3I55", fallback: "https://lh3.googleusercontent.com/d/1QEigpcBAitIg-juATuRvVOUrEFka3I55", alt: "10th Std 2025-2026 Batch - Memory 38", category: "10th Std 2025-2026" },
  { id: 63, src: "https://lh3.googleusercontent.com/d/1yX0TV7U29SpK2Zv8kD1yGkoE3w-wzx7o", fallback: "https://lh3.googleusercontent.com/d/1yX0TV7U29SpK2Zv8kD1yGkoE3w-wzx7o", alt: "10th Std 2025-2026 Batch - Memory 39", category: "10th Std 2025-2026" },
  { id: 64, src: "https://lh3.googleusercontent.com/d/1-t1cAJyE94tfg2iwvuW_oFJ5VC5tK-5p", fallback: "https://lh3.googleusercontent.com/d/1-t1cAJyE94tfg2iwvuW_oFJ5VC5tK-5p", alt: "10th Std 2025-2026 Batch - Memory 40", category: "10th Std 2025-2026" },
  { id: 65, src: "https://lh3.googleusercontent.com/d/1CBvJFnm0TpyhD-HhuRdBiweJiD1gqCFP", fallback: "https://lh3.googleusercontent.com/d/1CBvJFnm0TpyhD-HhuRdBiweJiD1gqCFP", alt: "10th Std 2025-2026 Batch - Memory 41", category: "10th Std 2025-2026" },
  { id: 66, src: "https://lh3.googleusercontent.com/d/1LdEyjkwynDZ4775MaRXvJm_UYF-6JeJa", fallback: "https://lh3.googleusercontent.com/d/1LdEyjkwynDZ4775MaRXvJm_UYF-6JeJa", alt: "10th Std 2025-2026 Batch - Memory 42", category: "10th Std 2025-2026" },
  { id: 67, src: "https://lh3.googleusercontent.com/d/1Vtxocc-GM8T38hyNFkCGKXzEnHM7cBIU", fallback: "https://lh3.googleusercontent.com/d/1Vtxocc-GM8T38hyNFkCGKXzEnHM7cBIU", alt: "10th Std 2025-2026 Batch - Memory 43", category: "10th Std 2025-2026" },
  { id: 68, src: "https://lh3.googleusercontent.com/d/1QeThwwlauB8yY0dqr5fFmDCUN_L8uWdF", fallback: "https://lh3.googleusercontent.com/d/1QeThwwlauB8yY0dqr5fFmDCUN_L8uWdF", alt: "10th Std 2025-2026 Batch - Memory 44", category: "10th Std 2025-2026" },
  { id: 69, src: "https://lh3.googleusercontent.com/d/1oQX0xmeyMc2ET0Vi96o2AdFHPpbQgxrO", fallback: "https://lh3.googleusercontent.com/d/1oQX0xmeyMc2ET0Vi96o2AdFHPpbQgxrO", alt: "10th Std 2025-2026 Batch - Memory 45", category: "10th Std 2025-2026" },
  { id: 70, src: "https://lh3.googleusercontent.com/d/1qlPzYk3PcRv-vB5b2vuZ9sN3D6jpOvML", fallback: "https://lh3.googleusercontent.com/d/1qlPzYk3PcRv-vB5b2vuZ9sN3D6jpOvML", alt: "10th Std 2025-2026 Batch - Memory 46", category: "10th Std 2025-2026" },
  { id: 71, src: "https://lh3.googleusercontent.com/d/1V8tJG386G3U4Y4QPRTe9LMaiDxpmwhGx", fallback: "https://lh3.googleusercontent.com/d/1V8tJG386G3U4Y4QPRTe9LMaiDxpmwhGx", alt: "10th Std 2025-2026 Batch - Memory 47", category: "10th Std 2025-2026" },
  { id: 72, src: "https://lh3.googleusercontent.com/d/1zTa2y6w2S3ENpfVnwCT7Uw1M0lJE-kNX", fallback: "https://lh3.googleusercontent.com/d/1zTa2y6w2S3ENpfVnwCT7Uw1M0lJE-kNX", alt: "10th Std 2025-2026 Batch - Memory 48", category: "10th Std 2025-2026" },
  { id: 73, src: "https://lh3.googleusercontent.com/d/1aXmj7s-VU76Ff5paTAbvO0ooF-jkpJmc", fallback: "https://lh3.googleusercontent.com/d/1aXmj7s-VU76Ff5paTAbvO0ooF-jkpJmc", alt: "10th Std 2025-2026 Batch - Memory 49", category: "10th Std 2025-2026" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Gallery | Schoolars Hub Goa"
        description="View photos of our campus, events, and student life at Schoolars Hub coaching centre in Goa."
        canonical="/gallery"
        jsonLd={localBusinessJsonLd}
      />

      <div className="section-shell pb-20 pt-10 md:pt-16">
        <div className="container px-4">
          <SectionTitle
            title="Campus Life & Events"
            subtitle="Take a look at the supportive and engaging environment we've built for our students and their families."
            eyebrow="Gallery"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className="mx-auto max-w-6xl min-h-[400px]">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-4">
              {filteredImages.map((image, index) => (
                <div key={`${image.id}-${activeCategory}`}>
                  <AnimatedSection
                    variant="fade-up"
                    delay={Math.min(index * 50, 400)} // cap stagger at 400ms
                    className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative overflow-hidden rounded-2xl">
                          <div className="absolute inset-0 bg-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 flex items-center justify-center">
                            <span className="rounded-full bg-card/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                              View Photo
                            </span>
                          </div>
                          {/* <picture> provides WebP with JPEG fallback for legacy browsers */}
                          <picture>
                            <source srcSet={image.src} type="image/webp" />
                            <img
                              alt={image.alt}
                              className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105 bg-muted"
                              loading="lazy"
                              decoding="async"
                              src={image.fallback}
                              width={700}
                              height={525}
                            />
                          </picture>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                        <div className="relative group">
                          <picture>
                            <source srcSet={image.src} type="image/webp" />
                            <img
                              src={image.fallback}
                              alt={image.alt}
                              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                          <div className="bg-card/90 backdrop-blur-md p-4 mt-2 rounded-lg">
                            <p className="text-foreground font-medium text-center">{image.alt}</p>
                            <p className="text-muted-foreground text-xs text-center mt-1 uppercase tracking-wider">{image.category}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </AnimatedSection>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
