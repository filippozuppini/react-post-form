import { useState } from "react";

function App() {

  const usersPosts = [
    {
      id: 1,
      author: 'Filippo Zuppini',
      title: 'Non so cosa mettere',
      body: 'Contenuto del post1',
      public: true,
    },
    {
      id: 2,
      author: 'Mario Rossi',
      title: 'Titolo molto interessante',
      body: 'Contenuto dal titolo molto interessante',
      public: true,
    },
    {
      id: 3,
      author: 'Nome Utente',
      title: 'Titolo',
      body: 'Contenuto',
      public: true,
    },

  ]

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form iniviato');

    const newPost ={
      id: posts.length +1,
      author: newAuthor,
      title: newTitle,
      body: newBody,
    }

    setPosts([...posts, newPost])

    setNewAuthor('')
    setNewTitle('')
    setNewBody('')      

  }

  const [posts, setPosts] = useState(usersPosts)
  const [newAuthor, setNewAuthor] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')


  return (
    <>

      <div className="header">
        <h1>Blog</h1>
      </div>

      <div className="chat">
        <h2>Chat</h2>


        {
          posts.map((post)=>(
            
            <div className="post" key={post.id}>
              <div className="info-user">
                <i className="bi bi-person-circle"></i>
                <h4>{post.author}</h4>
              </div>
              <div className="info-post">
                  <h4>Bozza</h4>
                  <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>

            </div>

          ))
        }



      </div>

      <div className="input-chat">
        <form onSubmit={handleSubmit}>
          <div className="element">
            <label htmlFor="Nome Utente">Nome Utente</label>
            <input type="text" value={newAuthor} onChange={ e => setNewAuthor(e.target.value)}/>
          </div>

          <div className="element">
            <label htmlFor="Titolo post">Titolo post</label>
            <input type="text" value={newTitle} onChange={ e => setNewTitle(e.target.value)}/>
          </div>

          <div className="element">
            <label htmlFor="Contenuto del post">Contenuto del post</label>
            <input type="text" value={newBody} onChange={ e => setNewBody(e.target.value)}/>
          </div>

          <div className="element">
            <p>Bozza <input type="checkbox" /></p>
          </div>

          <button type="submit">Pubblica</button>

        </form>
      </div>





    </>
  )
}

export default App
