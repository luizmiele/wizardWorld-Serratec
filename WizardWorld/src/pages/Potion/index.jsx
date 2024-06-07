
const Potion = () => {
  

  return (
      <div className={StyleSheet.principal}>
         <h2>Qual feitiço está procurando?</h2>
          <form>
            <input
              type="text"
              placeholder="Procure sua poção..."
            />
            <button type="submit">🔍</button>
          </form>
      </div>
  )
};

export default Potion;