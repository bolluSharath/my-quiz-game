class Question{
    constructor(){
        this.title=createElement('h1')
        this.input1 =  creaetInput("enter your name here")
        this.input2 =  creaetInput("your answer")
        this.button = creaetButton('submit')
        this.question = createElement('h2')
        this.option1 = createElement('h3')
        this.option2 = createElement('h4')
        this.option3 = createElement('h5')
        this.option4 = createElement('h6')
    }

hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
}

display(){
    this.title.html("my Quiz name")
    this.title.position(350,0)

    this.question.html("question - Which city is known as 'Electronic City of India?")
    this.question.position(150,80);
    this.option1.html("A. guragon")
    this.option1.position(150,100);
    this.option2.html("B. hyderabad")
    this.option2.position(150,120)
    this.option3.html("C. mumbai")
    this.option3.position(150,140)
    this.option4.html("banglore")
    this.option4.position(150,160)

    this.input1.position(150,230)
    this.input2.position(350,230)
    this.button.position(290,390)

    this.button.mousePressed( ()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount
        contestant.update();
        contestant.updateCount(contestantCount);
    });

}

}