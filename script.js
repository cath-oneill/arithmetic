(function(){

  // arithmetic constructor
  function ArithmeticProblem() {
        
    this.operation = '';
    this.number1 = '';
    this.number2 = '';
    this.correctAnswer = '';

        // 0 addition
        // 1 subtraction
        // 2 multiplication
        // 3 division
    this.createProblem = function() {
      var operation = Math.floor(Math.random()*4);
      if (operation === 0) {
        this.operation = '+'
        this.number1 = Math.floor(Math.random()*51);
        this.number2 = Math.floor(Math.random()*51);
        this.correctAnswer = this.number1 + this.number2;
      } else if (operation === 1) {
        this.operation = '-'
        this.number1 = Math.floor(Math.random()*51);
        this.number2 = Math.floor(Math.random()* this.number1);
        this.correctAnswer = this.number1 - this.number2;
      }else if (operation === 2) {
        this.operation = '*'
        this.number1 = Math.floor(Math.random()*11);
        this.number2 = Math.floor(Math.random()*11);
        this.correctAnswer = this.number1 * this.number2;
      } else {
        //set this up backwards as a multiplication problem to avoid decimals
        //the dividend is the large number, so it is set to the product created here
        this.operation = '/'
        this.correctAnswer = Math.floor(Math.random()*11);
        this.number2 = Math.floor(Math.random()*10 + 1);
        this.number1 = this.number2 * this.correctAnswer;
      }
    }
  }

  var problem = new ArithmeticProblem();
  problem.createProblem();

  var assessAnswer = function assessAnswerF(answerGiven, correctAnswer) {
    if (answerGiven === correctAnswer) {
      return "Great job!  You got it right!";
    } else {
      return "Uh Oh!  You better practice more!";
    }
  }

  //////////////////////////////////////////////
  ////////////// UI STUFF //////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  var $problem = $('<h3>'),
      $form = $('<form>'),
      $answer = $('<input>'),
      $submit = $('<input>'),
      $feedback = $('<div>'),
      $body = $('body'),
      $container = $('<div>');

  //Add Attributes
  $problem.attr('id', "problem");
  $answer.attr('type', 'text').attr('id', 'answer');
  $submit.attr('type', 'submit');
  $feedback.attr('id', 'feedback');

  //INSERT PROBLEM
  $problem.text("What is " + problem.number1 + " " + problem.operation + " " + problem.number2 + "?");

  //APPEND TO DIVS
  $form.append($answer).append($submit);
  $container.append($problem).append($form);
  $body.append($container);

  //Listen for submit
  $form.on('submit', function(e) {
      e.preventDefault();
      var answer = +$answer.val();
      var msg = assessAnswer(answer, problem.correctAnswer);
      $feedback.text(msg);
      $container.append($feedback);
  });


})();
