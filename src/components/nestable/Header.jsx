export default function Header({ blok }) {
    return (
        <header className="w-full bg-green">
            <h1>{blok?.logo}</h1>
            <p>{blok?.links}</p>
        </header>
    )
}