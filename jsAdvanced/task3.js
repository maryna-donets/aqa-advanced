function divide (numerator, denominator){
    if (denominator === 0 ) {
        throw new Error("Can not divide by 0!");
      }
      else if ( isNaN(numerator) ??  isNaN(denominator)) {
        throw new Error ("Should be a number!")
      }
      return ((numerator / denominator).toFixed(4));
    }
    try {
      const result = divide(10, 0);
      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
    finally {
        console.log("Робота завершена")
     };
    try {
        const result = divide("s", 2);
        console.log(result);
      } catch (error) {
        console.error("Error:", error.message);
      }
      finally {
        console.log("Робота завершена")
     };
      try {
        const result = divide(10, 3);
        console.log(result);
      } catch (error) {
        console.error("Error:", error.message);
      }
      finally {
        console.log("Робота завершена")
     };;