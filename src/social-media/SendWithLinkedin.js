export default function SendWithLinkedin() {
    const handleClick = async () => {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=blog.shahednasser.com`
      );
    };
    return (
      <>
        <h3>Linkedin share text</h3>
        <button onClick={handleClick}>Share</button>
      </>
    );
  }
  