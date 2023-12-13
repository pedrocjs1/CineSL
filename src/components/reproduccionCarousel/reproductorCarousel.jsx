export default function VideoPlayer({ videoUrl }) {
  const iframeSrc = `https://vidhidepro.com/v/${videoUrl}`;
  return (
    <iframe
      src={iframeSrc}
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      scrolling="NO"
      width="640"
      height="360"
      allowFullScreen
    ></iframe>
  );
}
