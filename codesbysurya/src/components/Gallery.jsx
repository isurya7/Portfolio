import { useState } from "react";
import { 
  FiCamera, 
  FiMaximize2, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight,
  FiHeart,
  FiAperture,
  FiEye
} from "react-icons/fi";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Photography categories with sample images
  const photographyCategories = [
    {
      title: "Urban Exploration",
      images: ["/images/Urban1.HEIC", "/images/Urban2.HEIC", "/images/urban-3.jpg"],
      description: "Cityscapes and architectural beauty"
    },
    {
      title: "Nature & Landscapes",
      images: ["/images/Landscape1.heic", "/images/Landscape2.heic", "/images/Landscape3.heic"],
      description: "Capturing the beauty of natural environments"
    },
    {
      title: "Portrait Moments",
      images: ["/images/Potrait1.HEIC", "/images/Potrait2.HEIC", "/images/Potrait3.HEIC"],
      description: "Candid and expressive human moments"
    }
  ];

  // All images flattened for the gallery
  const allImages = photographyCategories.flatMap(category => 
    category.images.map(img => ({
      src: img,
      category: category.title,
      description: category.description
    }))
  );

  const openImage = (index) => {
    setSelectedImage(allImages[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <FiCamera className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Visual Perspective</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Photography <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Passion</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            When I'm not coding, you'll find me exploring the world through my lens. 
            Photography is my creative escape—capturing moments, perspectives, and stories.
          </p>

          {/* Photography Enthusiasm */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <FiEye className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Seeing Differently</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <FiHeart className="w-4 h-4 text-purple-400" />
              <span className="text-sm">Creative Expression</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full">
              <FiAperture className="w-4 h-4 text-pink-400" />
              <span className="text-sm">Storytelling</span>
            </div>
          </div>
        </div>

        {/* Photography Categories */}
        <div className="space-y-12 mb-16">
          {photographyCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
                <span className="text-sm text-gray-500">{category.images.length} photos</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.images.map((img, imgIndex) => {
                  const globalIndex = catIndex * 3 + imgIndex;
                  return (
                    <div 
                      key={imgIndex}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                      onClick={() => openImage(globalIndex)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                          <div className="text-center p-8">
                            <div className="text-4xl mb-4">
                              {catIndex === 0 ? "🏙️" : catIndex === 1 ? "🌄" : "📸"}
                            </div>
                            <p className="text-gray-400 text-sm">Photo {imgIndex + 1}</p>
                            <p className="text-gray-500 text-xs mt-2">{category.title}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold mb-1">{category.title}</h4>
                              <p className="text-gray-300 text-sm">Click to view</p>
                            </div>
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                              <FiMaximize2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Photography Philosophy */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-6">
            <div className="text-3xl mt-2">🎨</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Photography?</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Photography started as a hobby but quickly became a <span className="text-cyan-300 font-medium">creative passion</span>. 
                  It's my way of taking a break from screens and code, to explore and appreciate the world visually.
                </p>
                <p className="text-gray-300">
                  Just like in development where I <span className="text-purple-300 font-medium">solve problems</span>, in photography I <span className="text-pink-300 font-medium">capture moments</span>—both require attention to detail, composition, and creativity.
                </p>
                <p className="text-gray-300">
                  It's not about fancy equipment, but about <span className="text-blue-300 font-medium">seeing things differently</span> and sharing perspectives that might otherwise go unnoticed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Add More Photos Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-dashed border-white/20 hover:border-white/40 transition-all duration-300">
          <div className="aspect-video flex flex-col items-center justify-center p-12">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">+</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Add Your Photos Here</h3>
            <p className="text-gray-400 text-center max-w-md mb-6">
              Upload your photography to the <code className="bg-black/30 px-2 py-1 rounded">/public/images/photography/</code> folder
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-sm font-medium mb-1">Step 1</div>
                <div className="text-xs text-gray-400">Add photos to folder</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-sm font-medium mb-1">Step 2</div>
                <div className="text-xs text-gray-400">Name them properly</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-sm font-medium mb-1">Step 3</div>
                <div className="text-xs text-gray-400">They'll appear here</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <FiX className="w-6 h-6 text-white" />
          </button>
          
          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <FiChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <FiChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Image Container */}
          <div 
            className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-6">📷</div>
                <h3 className="text-2xl font-bold mb-2">{selectedImage.category}</h3>
                <p className="text-gray-400">{selectedImage.description}</p>
                <p className="text-gray-500 text-sm mt-4">Add your photo to see it here</p>
              </div>
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="text-xl font-bold mb-2">{selectedImage.category}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <div className="text-sm text-gray-400 mt-2">
                {currentIndex + 1} / {allImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;