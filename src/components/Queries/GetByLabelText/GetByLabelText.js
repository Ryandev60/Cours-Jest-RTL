export default function GetByLabelText() {
   return (
      <section>
         <form>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" name="firstName" id="firstName" />
            <label htmlFor="lastName">Nom</label>
            <input type="text" name="lastName" id="lastName" />
            <div>
               <label id="username-label">
                  Username
               </label>
               <input aria-labelledby="username-label" />
            </div>
            <label htmlFor="select">Choisissez un animal</label>

            <label htmlFor="condition">Accepter les conditions</label>
            <input type="checkbox" name="condition" id="condition" />
            <div>
               <label>
                  <input type="checkbox" name="condition" id="condition" />
                  <span>Je m'abonne à la newsletter</span>
               </label>
            </div>
            <label>
               Animal Préféré
               <input type="text" />
            </label>
            <label>
               Animal Préféré
               <textarea />
            </label>
            <button>Submit</button>
         </form>
      </section>
   );
}
