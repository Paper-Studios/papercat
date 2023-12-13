export default function GameCard({setGameInfo}) {
  const dummyData = {
    title: "Paper Perjury",
    summary: "It all started with a simple robbery. When that thread was pulled, a tapestry of mysteries was revealed. Solve cases and outsmart criminals in a detective story full of lies, confessions, and maybe even a murder or two.",
    embededurl: "https://www.youtube.com/embed/mvKB5AkDQko?si=1ccbq7YIoceeRCtJ",
    steamLink: "https://store.steampowered.com/app/1919600/Paper_Perjury/",
  }
  return (
    <div className="games-content" onClick={(e) => {e.preventDefault(); setGameInfo(dummyData)}}>
      <div className="game-card">
        <span className="game-preview">
          <span className="game-img" />
          <span className="card-fade" />
          <span className="card-border" />
        </span>
        <span className="game-title">Paper Perjury</span>
      </div>
    </div>
  )
}