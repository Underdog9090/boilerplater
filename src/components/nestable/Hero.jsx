export default function Hero({ blok }) {
    return (
        <section className="w-full bg-red">
            <h1>{blok?.title}</h1>
            <p>{blok?.text}</p>
            <img src={blok?.image.filename} alt={blok?.title} />
            {/* <button>{blok?.button_text}</button> */}
            <button>{blok?.button?.story.name}</button>
        </section>
    )
}