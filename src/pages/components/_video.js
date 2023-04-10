export default function CrazyVideo({URL}) {

    return (
        <video width="320" height="240" controls>
        <source src={URL} type="video/mp4"></source>
        <source src={URL} type="video/ogg"></source>
        Your browser does not support the video tag.
      </video>
    )

}