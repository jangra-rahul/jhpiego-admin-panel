import React from 'react';

interface CommonButtonProps {
  text: string;
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string ;
  image?: string; // optional image src
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
  onClick,
}) => {
  return (
    <button
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
        padding: '8px 16px'
      }}
    >
      {image && <img src={image} alt="icon" style={{ height: '20px', width: '20px' }} />}
      {text}
    </button>
  );
};

export default CommonButton;
