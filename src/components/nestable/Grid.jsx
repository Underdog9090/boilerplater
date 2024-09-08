export default function Grid({ blok }) {        
    return (
        <section className="w-full bg-blue">
            <h1>{blok?.title}</h1>
            <p>{blok?.text}</p>
        </section>
    )
}