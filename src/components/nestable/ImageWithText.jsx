export default function Imagewithtext({ blok }) {    

    return (
        <section className="w-full bg-yellow">
            <h1>{blok?.title}</h1>
            <p>{blok?.text}</p>
            <img src={blok?.image.filename} alt={blok?.title} />
        </section>
    )
}
