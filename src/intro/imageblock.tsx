export default function ImageBlock() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white p-4">
      <div className="max-w-7xl w-full h-full flex items-center justify-center">
        <img 
          src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/88a46bd6-3c97-45d6-539b-3eb1a5031f00/public" 
          alt="Image block"
          className="w-full h-auto max-h-full object-contain rounded-lg shadow-none"
        />
      </div>
    </div>
  );
}

