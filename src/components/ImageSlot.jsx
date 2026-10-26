import { useState } from 'react';
import { Image as ImageIcon, User as UserIcon } from 'lucide-react';

/**
 * ImageSlot component
 * Allows the user to provide their own screenshots/photos via /public/images/.
 * Displays a clean, minimal placeholder slot matching Figma dimensions if no image is present.
 */
export default function ImageSlot({
  src,
  alt = 'Image Slot',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  label = 'Insert Image',
  hint = 'public/images/...',
  isCircle = false,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source or error loading image, render Figma placeholder slot
  const showPlaceholder = !src || hasError;

  if (showPlaceholder) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#F4F6F8] border border-dashed border-[#CCD6DF] text-[#8695A4] transition-colors select-none ${
          isCircle ? 'rounded-full' : 'rounded-md'
        } ${aspectRatio} ${className}`}
        title={`Place your image at: ${hint}`}
      >
        <div className="flex flex-col items-center justify-center p-4 text-center">
          {isCircle ? (
            <UserIcon className="w-12 h-12 text-[#A4B3C1] mb-2" strokeWidth={1.5} />
          ) : (
            <ImageIcon className="w-8 h-8 text-[#A4B3C1] mb-2" strokeWidth={1.5} />
          )}
          <span className="text-xs font-semibold tracking-wide text-[#4F5E71] uppercase">
            {label}
          </span>
          <span className="text-[10px] text-[#8695A4] mt-1 font-mono">
            {hint}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#F4F6F8] ${
        isCircle ? 'rounded-full' : 'rounded-md'
      } ${aspectRatio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E8EFF3] animate-pulse" />
      )}
    </div>
  );
}
