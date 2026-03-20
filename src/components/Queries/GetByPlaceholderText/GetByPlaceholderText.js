export default function GetByPlaceholderText() {
   return (
      <section>
         <form>
            <label htmlFor="firstName">Prénom</label>
            <input
               type="text"
               name="firstName"
               id="firstName"
               placeholder="Indiquez votre prénom"
            />

            <label htmlFor="lastName">Nom</label>
            <input
               type="text"
               name="lastName"
               id="lastName"
               placeholder="Indiquez votre nom"
            />

            <button>Submit</button>
         </form>
      </section>
   );
}
