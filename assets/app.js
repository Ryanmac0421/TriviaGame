var questionArr = [
    {   question:"How many colours are there in a rainbow?",
        choices:['One','Five','Seven','Nine'],
        ans:'Seven'
    },
    {   question:"What do you call a time span of one thousand years?",
        choices:['Years','Continuum','Decade','Millenium'],
        ans:'Millenium'
    },
    {   question:"How many degrees are found in a circle?",
        choices:['360','90','540','180'],
        ans:'360'
    },
    {   question:"How many points does a compass have?",
        choices:['51','32','12','40'],
        ans:'32'
    },
    {   question:"What is the bluebird of symbol of?",
        choices:['Happiness','Joy','Anger','Love'],
        ans:'Happiness'
    },
    {   question:"When did the world celebrate its most recent millennium?",
        choices:['2010','1990','1950','2000'],
        ans:'2000'
    },
    {   question:"Name the world's largest ocean?",
        choices:['Red Sea','Atlantic Ocean','Pacific Ocean','Atlantic Ocean'],
        ans:'Pacific Ocean'
    },
    {   question:"What is the world's longest river?",
        choices:['Nicaraquan River','Sacramento River','Amazon River','Whitewater River'],
        ans:'Amazon River'
    },
    {   question:"What is the capital city of Spain?",
        choices:['Madrid','Montilla','San Fernando','Algeciras'],
        ans:'Madrid'
    },
    {   question:"What colour jersey is worn by the winners of each stage of the Tour De France?",
        choices:['Orange','Yellow','Blue','Green'],
        ans:'Yellow'
    }]

    var questionNum = 0;
    var correctNum = 0;
    var seconds = 120;
    var isGame = false;




    function displayQuestion() {
        $("#question1").html(
            '<p>'+questionArr[questionNum]["question"]+'</p> '+
            '<form>'+
            '<input class="ques" type="radio"   name="q" value="'+questionArr[questionNum]["choices"][0]+'"> '+questionArr[questionNum]["choices"][0]+
            ' <input class="ques" type="radio"  name="q" value="'+questionArr[questionNum]["choices"][1]+'">'+questionArr[questionNum]["choices"][1]+
            '  <input class="ques" type="radio" name="q" value="'+questionArr[questionNum]["choices"][2]+'"> '+questionArr[questionNum]["choices"][2]+
            '  <input class="ques" type="radio" name="q" value="'+questionArr[questionNum]["choices"][3]+'"> '+questionArr[questionNum]["choices"][3]+
            '</form>'
        )

        
    }

    $( document ).ready(function() {
    
    $("#start").on("click", ()=>{
        $(".startBtn").css("display", "none");
        $(".game").css("display", "initial");
        isGame = true;
        displayQuestion()

    })
    $(".submitButton").on("click", ()=>{
        $(".ques").each( (index,element) => {
            if ($(element).is( ":checked" )) {
             if ($(element).attr("value")==questionArr[questionNum]["ans"]) {
                correctNum ++;
             }   
            }
           console.log($(element).attr("value")) 
        });
    
        questionNum ++;
        if (questionNum  >= questionArr.length) {
        $(".game").css("display", "none");
        $(".endGame").css("display", "initial");
        $("#score").text("your score is " +correctNum + " out of 10 ")
        } else {
        displayQuestion()
            
        }
        
        


    })

    $("#restart").on("click", ()=>{
        $(".endGame").css("display", "none");
        $(".game").css("display", "initial");
        correctNum = 0;
        questionNum = 0;
        seconds = 120;
        displayQuestion()

    })
    setInterval(function(){ 
        
        if (isGame) {
            
            seconds --;
            $("#timer").html("Time Remaining:<br>"+seconds+" Seconds");
         }

        if (seconds <= 0) {
        $(".game").css("display", "none");
        $(".endGame").css("display", "initial");
        $("#score").text("your score is " +correctNum + " out of 10 ")
         }

    }, 1000);
});