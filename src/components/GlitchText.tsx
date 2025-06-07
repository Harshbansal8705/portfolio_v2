interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <span 
      className={`glitch ${className}`} 
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;