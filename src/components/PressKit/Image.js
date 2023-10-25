function Image({ imageUrl, fileName }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.setAttribute('download', fileName);
    link.click();
    link.remove();
  };

  return (
    <img src={imageUrl} className="screenshot" alt={fileName}
      onClick={handleDownload}
    />
  );
}

export default Image;
