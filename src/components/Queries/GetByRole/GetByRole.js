export default function GetByRole() {
   return (
      <section>
         <h1>Adopter un animal</h1>
         <article>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, id!
            <img
               src="https://pixabay.com/fr/images/download/vlaaitje-puppy-1047521_1920.jpg"
               alt="Chien mignon"
            />
         </article>
         <h2>Inscription</h2>
         <form>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" name="firstName" id="firstName" />
            <label htmlFor="lastName">Nom</label>
            <input type="text" name="lastName" id="lastName" />
            <label htmlFor="select">Choisissez un animal</label>
            <select name="select" id="select">
               <option value="Chien">Chien</option>
               <option value="Chat">Chat</option>
               <option value="Perroquet">Perroquet</option>
            </select>
            <label htmlFor="condition">Accepter les conditions</label>
            <input type="checkbox" name="condition" id="condition" />
            <label htmlFor="newsletter">S'abonner à la newsletter</label>
            <input type="checkbox" name="condition" id="newsletter" />
            <button>Submit</button>
         </form>
      </section>
   );
}
