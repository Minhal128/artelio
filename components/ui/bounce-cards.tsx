"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BounceCardsProps {
    className?: string;
    images?: string[];
    containerWidth?: number;
    containerHeight?: number;
    cardWidth?: number;
    cardHeight?: number;
    animationDelay?: number;
    animationStagger?: number;
    easeType?: string;
    transformStyles?: string[];
    enableHover?: boolean;
    borderColor?: string;
    borderWidth?: number;
}

export default function BounceCards({
    className = '',
    images = [],
    containerWidth = 400,
    containerHeight = 400,
    cardWidth = 200,
    cardHeight,
    animationDelay = 0.5,
    animationStagger = 0.06,
    easeType = 'elastic.out(1, 0.8)',
    transformStyles = [
        'rotate(10deg) translate(-170px)',
        'rotate(5deg) translate(-85px)',
        'rotate(-3deg)',
        'rotate(-10deg) translate(85px)',
        'rotate(2deg) translate(170px)'
    ],
    enableHover = false,
    borderColor = 'white',
    borderWidth = 8
}: BounceCardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.card',
                { scale: 0 },
                {
                    scale: 1,
                    stagger: animationStagger,
                    ease: easeType,
                    delay: animationDelay
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [animationDelay, animationStagger, easeType]);

    const getNoRotationTransform = (transformStr: string): string => {
        const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
        if (hasRotate) {
            return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
        } else if (transformStr === 'none') {
            return 'rotate(0deg)';
        } else {
            return `${transformStr} rotate(0deg)`;
        }
    };

    const getPushedTransform = (baseTransform: string, offsetX: number): string => {
        const translateRegex = /translate\(([-0-9.]+)px\)/;
        const match = baseTransform.match(translateRegex);
        if (match) {
            const currentX = parseFloat(match[1]);
            const newX = currentX + offsetX;
            return baseTransform.replace(translateRegex, `translate(${newX}px)`);
        } else {
            return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
        }
    };

    const pushSiblings = (hoveredIdx: number) => {
        const q = gsap.utils.selector(containerRef);
        if (!enableHover || !containerRef.current) return;

        images.forEach((_, i) => {
            const selector = q(`.card-${i}`);
            gsap.killTweensOf(selector);

            const baseTransform = transformStyles[i] || 'none';

            if (i === hoveredIdx) {
                const noRotation = getNoRotationTransform(baseTransform);
                gsap.to(selector, {
                    transform: noRotation,
                    duration: 0.4,
                    ease: 'back.out(1.4)',
                    overwrite: 'auto'
                });
            } else {
                // Increase offset for larger cards
                const pushDist = cardWidth * 0.6;
                const offsetX = i < hoveredIdx ? -pushDist : pushDist;
                const pushedTransform = getPushedTransform(baseTransform, offsetX);

                const distance = Math.abs(hoveredIdx - i);
                const delay = distance * 0.05;

                gsap.to(selector, {
                    transform: pushedTransform,
                    duration: 0.4,
                    ease: 'back.out(1.4)',
                    delay,
                    overwrite: 'auto'
                });
            }
        });
    };

    const resetSiblings = () => {
        if (!enableHover || !containerRef.current) return;
        const q = gsap.utils.selector(containerRef);

        images.forEach((_, i) => {
            const selector = q(`.card-${i}`);
            gsap.killTweensOf(selector);

            const baseTransform = transformStyles[i] || 'none';
            gsap.to(selector, {
                transform: baseTransform,
                duration: 0.4,
                ease: 'back.out(1.4)',
                overwrite: 'auto'
            });
        });
    };

    return (
        <div
            className={`relative flex items-center justify-center ${className}`}
            ref={containerRef}
            style={{
                width: containerWidth,
                height: containerHeight
            }}
        >
            {images.map((src, idx) => (
                <div
                    key={idx}
                    className={`card card-${idx} absolute rounded-[30px] overflow-hidden`}
                    style={{
                        width: cardWidth,
                        height: cardHeight || cardWidth,
                        border: `${borderWidth}px solid ${borderColor}`,
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        transform: transformStyles[idx] || 'none',
                        zIndex: idx
                    }}
                    onMouseEnter={() => pushSiblings(idx)}
                    onMouseLeave={resetSiblings}
                >
                    <img className="w-full h-full object-cover" src={src} alt={`card-${idx}`} />
                </div>
            ))}
        </div>
    );
}
