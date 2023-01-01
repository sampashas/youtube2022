// import React, { useRef, useEffect } from 'react';
// import { TweenMax, Power2 } from 'gsap';
// import * as THREE from 'three';

// const Slider = () => {
//   const sliderRef = useRef(null);
//   const cardRefs = [useRef(null)];

//   useEffect(() => {
//     // Загрузка displacement map
//     const displacementMap = new THREE.TextureLoader().load('displacement-map.jpg');

//     // Настройка материала с displacement map
//     const material = new THREE.MeshBasicMaterial({
//       map: displacementMap,
//       transparent: true
//     });

//     // Создание меша с материалом
//     const mesh = new THREE.Mesh(sliderRef.current, material);

//     const handleMouseEnter = (ref) => {
//       TweenMax.to(displacementMap, 1, {
//         offset: 50,
//         ease: Power2.easeInOut
//       });

//       TweenMax.to(ref.current, 1, {
//         distort: {
//           amount: 50,
//           points: 10,
//           scale: 1.5
//         },
//         ease: Power2.easeInOut
//       });
//     };

//     const handleMouseLeave = (ref) => {
//       TweenMax.to(displacementMap, 1, {
//         offset: 0,
//         ease: Power2.easeInOut
//       });

//       TweenMax.to(ref.current, 1, {
//         distort: {
//           amount: 0,
//           points: 0,
//           scale: 1
//         },
//         ease: Power2.easeInOut
//       });
//     };

//     cardRefs.forEach((ref, index) => {
//       ref.current.addEventListener('mouseenter', () => handleMouseEnter(ref));
//       ref.current.addEventListener('mouseleave', () => handleMouseLeave(ref));
//     });

//     return () => {
//       cardRefs.forEach((ref) => {
//         ref.current.removeEventListener('mouseenter', handleMouseEnter);
//         ref.current.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <div
//       ref={sliderRef}
//       className="relative h-64 w-full bg-gray-500 overflow-hidden"
//     >
//       <div className="h-full w-full flex justify
