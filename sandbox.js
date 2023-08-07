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

        if(cell_number % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][0] == 0){
                    storage[i][0] = player_turn;
                    break;
                }
            }
        }else if(cell_number-1 % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][1] == 0){
                    storage[i][1] = player_turn;
                    break;
                }
            }
        }else if(cell_number-2 % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][2] == 0){
                    storage[i][2] = player_turn;
                    break;
                }
            }
        }else if(cell_number-3 % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][3] == 0){
                    storage[i][3] = player_turn;
                    break;
                }
            }
        }else if(cell_number-4 % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][4] == 0){
                    storage[i][4] = player_turn;
                    break;
                }
            }
        }else if(cell_number-5 % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][5] == 0){
                    storage[i][5] = player_turn;
                    break;
                }
            }
        }else if(cell_number-6 % 7 == 0){
            for (let i = 5; i >= 0; i--){
                if(storage[i][6] == 0){
                    storage[i][6] = player_turn;
                    break;
                }
            }
        }
        player_turn = (player_turn == 1) ? -1 : 1;
        console.log(storage);
    }
});

