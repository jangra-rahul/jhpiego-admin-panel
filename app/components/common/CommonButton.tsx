import Image from 'next/image';
import React from 'react';

interface CommonButtonProps {
  text: string;
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  className?: string;
  fontWeight?: string ;
  image?: string;
  style?: React.CSSProperties; 
  onClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  color = '#fff',
  width = '150px',
  height = '45px',
  fontSize = '16px',
  backgroundColor = '#007bff',
  fontWeight="700",
  image,
  style = {},

  className = "",

  onClick,
}) => {
  return (
    <button
    className={`${className}`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color,
        width,
        height,
        fontSize,
        fontWeight,
        backgroundColor,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        padding: '8px 16px',
        ...style,
      }}
    >
      {image && <Image src={image} alt="icon" style={{ height: '20px', width: '20px' }} />}
      {text}
    </button>
  );
};

export default CommonButton;
