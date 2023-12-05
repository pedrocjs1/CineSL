export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
