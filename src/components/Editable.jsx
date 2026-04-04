import React, { useRef, useEffect } from 'react';

/**
 * EditableText - renders as a span/div with contentEditable when editMode is true.
 */
export function EditableText({ children, className = '', tag = 'span', editMode, style = {} }) {
  const ref = useRef(null);
  const Tag = tag;

  // Keep internal content in sync with initial children
  useEffect(() => {
    if (ref.current && ref.current.textContent === '') {
      ref.current.textContent = children;
    }
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      contentEditable={editMode}
      suppressContentEditableWarning
    >
      {children}
    </Tag>
  );
}

/**
 * EditableImage - renders an img that can be replaced by clicking in edit mode.
 */
export function EditableImage({ src, alt, className = '', style = {}, editMode }) {
  const inputRef = useRef(null);
  const imgRef = useRef(null);

  const handleClick = () => {
    if (editMode && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (imgRef.current) imgRef.current.src = url;
  };

  return (
    <div
      className={`editable-image-wrap ${className}`}
      style={style}
      onClick={handleClick}
    >
      <img ref={imgRef} src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFile}
      />
    </div>
  );
}
