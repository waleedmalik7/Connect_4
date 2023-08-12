const board = document.querySelector(".board");
for (let i = 0; i < 42; i++){
    const div = document.createElement('div');
    div.textContent =`${i}`;
    div.setAttribute('class', `cell-${i}`);
    board.append(div);
}
let rows = 6;
let columns = 7;
let player_turn = 1;
let storage = [
[0,0,0,0,0,0,0], //row 1
[0,0,0,0,0,0,0], //row 2
[0,0,0,0,0,0,0], //row 3
[0,0,0,0,0,0,0], //row 4
[0,0,0,0,0,0,0], //row 5
[0,0,0,0,0,0,0]]; //row 6

board.addEventListener('click',(e)=> {
    //Column 1: 0,7,14,21,28,35
    //Column 2: 1,8,15,22,29,36
    //Column 3: 2,9,16,23,30,37
    //Column 4: 3,10,17,24,31,38
    //Column 5: 4,11,18,25,32,39
    //Column 6: 5,12,19,26,33,40
    //Column 7: 6,13,20,27,34,41

    if (e.target.tagName === 'DIV'){
        let class_name = e.target.getAttribute('class'); //class name of what we clicked
        let cell_number = class_name.split('-')[1]; //cell number
        let remainder = cell_number % 7;
        let count = 0;

        for (let i = 5; i >= 0; i--){
            if(storage[i][remainder] == 0){
                storage[i][remainder] = player_turn;
                let class_drop = `cell-${i*7 + remainder}`;
                let new_class = document.querySelector(`div.${class_drop}`);
                if(player_turn == 1){
                    new_class.classList.add('blue');
                }else if(player_turn == -1){
                    new_class.classList.add('red');
                }
                check();
                break;
            }else{
                count+=1;
            }
        }
        if(count < 6){
            player_turn = (player_turn == 1) ? -1 : 1;
            console.log(storage);
        }
        
    }
});

const check = () =>{

    //Horizontal checker
    for (let i = 0; i < 6; i++){
        let total_h = 0;
        for (let j = 0; j < 7; j++){
            if(storage[i][j] == player_turn){
                total_h += 1;
                if(total_h >= 4){
                    console.log(`Winner is player ${player_turn}`); //end game
                }
            }else{
                total_h = 0;
            }
        }
    }

    //Vertical checker
    for(let i = 0; i < 7; i++){
        let total_v = 0;
        for(let j = 0; j < 6; j++){
            if(storage[j][i] == player_turn){
                total_v += 1;
                if(total_v >= 4){
                    console.log(`Winner is player ${player_turn}`); //end game
                }
            }else{
                total_v = 0;
            }
        }
    }

    //Left Diagonal checker
    for(let i = 0; i < rows; i++){
        let total_dL = 0;
        let k = i;
        let y = 0;
        while(k >= 0){
            if(storage[k][y] == player_turn){
                total_dL += 1;
                if(total_dL >= 4){
                    console.log(`Winner is player ${player_turn}`); //end game
                }
            }else{
                total_dL = 0;
            }
            k -= 1;
            y += 1;
        }
    }
    for(let i = 1; i < columns; i++){
        let total_dL = 0;
        let k = rows - 1;
        let y = i;
        while(y < columns){
            if(storage[k][y] == player_turn){
                total_dL += 1;
                if(total_dL >= 4){
                    console.log(`Winner is player ${player_turn}`); //end game
                }
            }
            else{
                total_dL = 0;
            }
            
            y += 1;
            k -= 1;
        }
    }

    //Right Diagonal checker
    let total_dR = 0;
    for(let i = 0; i < 6; i++){
        let k = i;
        let y = columns - 1;
        while(k >= 0){
            if(storage[k][y] == player_turn){
                total_dR += 1;
                if(total_dR >= 4){
                    console.log(`Winner is player ${player_turn}`); //end game
                }
            }else{
                total_dR = 0;
            }
            k -= 1;
            y -= 1;
        }
    }
    for(let i = columns - 2; i >= 0; i--){
        total_dR = 0;
        let k = rows - 1;
        let y = i;
        while(y >= 0){
            if(storage[k][y] == player_turn){
                total_dR += 1;
                if(total_dR >= 4){
                    console.log(`Winner is player ${player_turn}`); //end game
                }
            }else{
                total_dR = 0;
            }  
            k -= 1;
            y -= 1;
        }
    }
}
