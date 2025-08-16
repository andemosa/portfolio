import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export const ProjectGallery: FC<ProjectGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center p-4 gap-2 opacity-0 bg-black bg-opacity-80 hover:opacity-90 transition-opacity hover:bg-darkTheme text-white-900">
              <span className=" text-sm font-medium">Click to view</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-darkTheme backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="mb-4 rounded-full bg-black/60 text-white-900 hover:bg-black/80 dark:bg-white/60  dark:hover:bg-white/80 p-2 shadow-lg transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>

              <img
                src={images[selectedImage]}
                alt={`${title} screenshot ${selectedImage + 1}`}
                className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              />

              <div className="mt-4 flex items-center gap-6">
                <button
                  onClick={prevImage}
                  className="rounded-full bg-black/60 text-white-900 hover:bg-black/80 dark:bg-white/60  dark:hover:bg-white/80 p-2 shadow-lg transition-colors"
                >
                  <FiChevronLeft className="w-7 h-7" />
                </button>

                <div className="text-white-900 text-sm bg-black/60 dark:bg-white/60 px-3 py-1 rounded-full">
                  {selectedImage + 1} / {images.length}
                </div>

                <button
                  onClick={nextImage}
                  className="rounded-full bg-black/60 text-white-900 hover:bg-black/80 dark:bg-white/60 dark:hover:bg-white/80 p-2 shadow-lg transition-colors"
                >
                  <FiChevronRight className="w-7 h-7" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
