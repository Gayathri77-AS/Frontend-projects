import "./style.css";

function App(){
  return (
    <>
    {/* Header */}
    <header className="header">
      <div className="logo">
      <img
      src="logo512.png"
      height="68"
      width="68"
      alt="Today I Learned Logo"
    />
    <h1>Today I Learned</h1>
  </div>

  <button class="btn btn-large btn-open">Share a fact</button>
</header>
<NewFact/>
<CategoryFilter/>
</>
  );
}

function NewFact(){
  return <form>Fact Form</form>;
}

function CategoryFilter(){
  return <aside>Category Filter</aside>;
}

function FactList(){
  return <section>FactList</section>;

}
export default App;
