
const PlaceholderImage = ({ width = 'w-64', height = 'h-48', text = '', className = '' }) => {
  return (
    <div 
      className={`
        ${width} ${height}
        flex items-center justify-center
        bg-gray-200 rounded-lg
        animate-pulse
        ${className}
      `}
    >
      {text && (
        <span className="text-gray-500 text-sm">
          {text}
        </span>
      )}
    </div>
  );
};

export default PlaceholderImage;