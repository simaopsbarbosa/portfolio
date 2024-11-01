function Home() {
  return (
    <div class="m-auto h-[100vh] max-w-[560px] content-center">
      <h1 className="text-3xl font-bold">Simão Barbosa,</h1>
      <h2 className="text-xl font-semibold">
        Informatics and Computing Engineering student at FEUP
      </h2>
      <div className="flex gap-5 py-5">
        <a className="font-light">about</a>
        <a className="font-light">projects</a>
        <a className="font-light">contact</a>
      </div>
    </div>
  );
}

export default Home;
