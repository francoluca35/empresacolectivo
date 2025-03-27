{selectedImg && (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={() => setSelectedImg(null)}
    >
      <div
        className="bg-white p-4 rounded shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedImg(null)}
          className="absolute top-2 right-2 text-red-500 text-xl font-bold"
        >
          &times;
        </button>
  
        <Image
          src={selectedImg.img}
          alt="Imagen ampliada"
          width={800}
          height={600}
          className="w-full h-auto object-contain rounded mb-4"
        />
        <p className="text-gray-700 text-base">{selectedImg.text}</p>
      </div>
    </div>
  )}
  