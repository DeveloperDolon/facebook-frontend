// import Image from 'next/image'

const Home: React.FC = () => {

  const handleClick = () => {
    alert("Hello world")  
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>Click m asdf</button>
    </main>
  )
}

export default Home;