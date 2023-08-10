const board = document.querySelector(".board");
for (let i = 0; i < 42; i++){
    const div = document.createElement('div');
    div.textContent =`${i}`;
    div.setAttribute('class', `cell-${i}`);
    board.append(div);
}
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

        for (let i = 5; i >= 0; i--){
            if(storage[i][remainder] == 0){
                storage[i][remainder] = player_turn;
                check();
                break;
            }
        }

        player_turn = (player_turn == 1) ? -1 : 1;
        console.log(storage);
    }
});

const check = () =>{
    
    //Horizontal checker
    let total_h = 0;
    for (let i = 0; i < 6; i++){
        for (let j = 0; j < 7; j++){
            if(storage[i][j] == player_turn){
                total_h += 1;
            }else{
                total_h = 0;
            }
            if(total_h >= 4){
                console.log(`Winner is player ${player_turn}`); //end game
            }
        }
    }
    //Vertical checker
    let total_v = 0;
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 6; j++){
            if(storage[j][i] == player_turn){
                total_v += 1;
            }else{
                total_v = 0;
            }
            if(total_v >= 4){
                console.log(`Winner is player ${player_turn}`); //end game
            }
        }
    }
    //Left Diagonal checker
    //Right Diagonal checker


}
