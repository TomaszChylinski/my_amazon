function letter(userInput) {
  //userInput is the users inputed key
  this.letter = userInput;
  this.guessed = false; //we set guess to false, if user guess is correct guess = true

  this.toString = function() {
    if (this.letter === " ") {
      this.guess = true;
      return " ";
    } else {
      if (this.guess === false) {
        return "_";
      } else {
        return this.letter;
      }
    }
  };
  this.guess 
}


