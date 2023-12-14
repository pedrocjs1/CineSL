export default function VideoPlayer({ videoUrl }) {
  const iframeSrc = `https://vidhidepro.com/v/${videoUrl}`;
  return (
    <iframe
      src={iframeSrc}
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      scrolling="NO"
      width="960"
      height="540"
      allowFullScreen
    ></iframe>
  );
}
