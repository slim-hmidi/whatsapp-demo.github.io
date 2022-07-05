export default function SendWithFb() {
  const encodeGetParams = (p) =>
    Object.entries(p)
      .map((kv) => kv.map(encodeURIComponent).join("="))
      .join("&");
  const handleClick = async () => {
    const params = {
      app_id: process.env.REACT_APP_APP_ID,
      link: process.env.REACT_APP_LINK,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI
    };
    console.log(encodeGetParams(params));
    window.open(
      `http://www.facebook.com/dialog/send?${encodeGetParams(params)}`
    );
  };
  return (
    <>
      <h3>Facebook share text</h3>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
