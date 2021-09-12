
        var teams = [{
            key:'Patriots',
            value:'6 Super Bowls'
        },{
            key:'Steelers',
            value:"6 Super Bowls"
        },{
            key:'49ers',
            value:'5 Super Bowls'
        },{
            value:'Cowboys',
            key:'5 Super Bowls'
        },{
            key:'Packers',
            value: '4 Super Bowls'
        },{
            key:'Giants',
            value:'4 Super Bowls'
        },{
            key:'Raiders',
            value:'3 Super Bowls'
        },{
            key:'Broncos',
            value:'3 Super Bowls'
        },{
            key:'Washington',
            value:'3 Super Bowls'
        },{
            key:'Chiefs',
            value:"2 Super Bowls"
        },{
            key:'Colts',
            value:'2 Super Bowls'
        },{
            key:'Dolphins',
            value:'2 Super Bowls'
        },{
            key:'Ravens',
            value:'2 Super Bowls'
        },{
            key:'Buccaneers',
            value:"1 Super Bowl"
        },{
            key:'Bears',
            value:'1 Super Bowl'
        },{
            key:'Saints',
            value:"1 Super Bowl"
        },{
            key:'Rams',
            value:'1 Super Bowl'
        },{
            key:'Jets',
            value:'1 Super Bowl'
        },{
            key:'Seahawks',
            value:'1 Super Bowl'
        },{
            key:'Eagles',
            value:'1 Super Bowl'
        },{
            key:'Bills',
            value:'No Super Bowls'
        },{
            key:'Browns',
            value:'No Super Bowls'
        },{
            key:'Vikings',
            value:'No Super Bowls'
        },{
            key:'Cardinals',
            value:'No Super Bowls'
        },{
            key:'Lions',
            value:'No Super Bowls'
        },{
            key:'Texans',
            value:'No Super Bowls'
        },{
            key:'Jaguars',
            value:'No Super Bowls'
        },{
            key:'Titans',
            value:'No Super Bowls'
        },{
            key:'Chargers',
            value:'No Super Bowls'
        },{
            key:'Bengals',
            value:'No Super Bowls'
        },{
            key:'Falcons',
            value:'No Super Bowls'
        }];
    document.getElementById('submit').addEventListener('click', function() {

        var userInput = document.getElementById('team').value, wins = null;
        
        for(i=0; i < teams.length-1; i++){
            if(teams[i].key === userInput){
                wins = teams[i];
                break;
                
            }
        }
        if (wins){
            alert("The " + wins.key + " have " + wins.value + "!");
            return;
        } else if(userInput === ""){
            alert('Enter One NFL Team Name Please!');
            return false;
        }else{
            alert( "That is not an NFL team!(make sure you capitalize!!)");
            return;
        }
    });

    document.getElementById('choose').addEventListener('click', function(){

        var input = document.getElementById('guess').value;

    
        if(input === '1'){
            alert("When life gives you melons, you might be dyslexic");
            return input;
        }else if(input === '2'){
            alert("Two fish were sitting in a tank. One says to the other 'How do we drive this thing?!' ");
            return;
        }else if(input === '3'){
            alert("A dung beetle walks into a bar and asks 'is this stool taken?'");
            return;
        }else if(input === '4'){
            alert("Adam and Eve were the first ones to ignore Apples terms and conditions");
            return;
        }else if(input === '5'){
            alert("It takes alot of balls to golf the way I do");
            return;
        }else if(input === '6'){
            alert("Russian dolls are so full of themselves");
            return;
        }else if(input === '7'){
            alert("Always borrow money from a pessimist. They will never expect it back!");
            return;
        }else if(input === '8'){
            alert("People who take care of chickens are just chicken tenders");
            return;
        }else if(input ==='9'){
            alert("Blunt pencils are really pointless");
            return;
        }else if(input === '10'){
            alert("The man who invented velcro has died.... RIP")
            return;
        }else{
            alert("Please enter a number between ONE and TEN");
            return;
        }
    });