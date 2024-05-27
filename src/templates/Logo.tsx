
const Logo = () => {
  const containerClassName = "flex justify-center items-center";
  const imageClassName = "w-32 h-10 object-cover";

  return (
    <div className={containerClassName}>
      <img
        src="/assets/images/logo/Berkah Sehat Medical - Logo.png"
        alt="Slide 1"
        className={imageClassName}
      />
    </div>
  );
};

export { Logo };
