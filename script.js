window.onload = ()=>{
    document.querySelector('#attack').setAttribute('disabled',true);
    var secondQueenPossibleMoves = [];
    var secondQueenMove = null;
    var firstQueenMove = null;
    var secondQueenRowPosition = null;
    var secondQueenColumnPosition = null;
    var totalQueensMoves = 0;
    console.log('Page is loaded');
    console.log( document.querySelectorAll('.cell'));
    document.querySelectorAll('.cell').forEach((cell)=>{
        cell.addEventListener('click',(event) => {
            if(event.target.classList.contains("selected")){
                //check if this button has been selected
                //do not deselected any button until the second queen has been deselected
                if(this.event.target.getAttribute("data-value") !== secondQueenMove && document.querySelector('[data-value="'+secondQueenMove+'"]').classList.contains("selected")){
                        document.querySelector("#output").textContent = "It's not your turn";
                }else{
                    event.target.classList.remove("selected");
                    totalQueensMoves--;
                    document.querySelector('#attack').setAttribute('disabled',true);
                    console.log('first queen move: '+firstQueenMove);
                    console.log('second queen move : '+secondQueenMove);
                    document.querySelector("#output").textContent = " ";
                }

                
            }else{
                if(totalQueensMoves === 0){
                    firstQueenMove = this.event.target.getAttribute("data-value");
                    //console.log(firstQueenMove);
                }else{
                    secondQueenColumnPosition = this.event.target.getAttribute("data-column");
                    secondQueenRowPosition = this.event.target.getAttribute("data-row");
                    secondQueenMove = this.event.target.getAttribute("data-value");
                }
                if(totalQueensMoves === 1){   
                    document.querySelector('#attack').removeAttribute('disabled');
                }
                if(totalQueensMoves < 2){
                    //console.log(totalQueensMoves);
                    this.event.target.classList.add("selected");
                    totalQueensMoves++;
                }
            }
            //console.log('first Queen Move:'+firstQueenMove);
            //console.log('second queen row position: '+secondQueenRowPosition);
            //console.log('second queen column position: '+secondQueenColumnPosition);
        });
    });

    //when attack button is clicked on
    document.querySelector("#attack").addEventListener('click',(event)=>{
        secondQueenPossibleMoves.length = 0;//empty secondQueenPossibleMoves array
        getAllVerticalMoves();
        getAllHorizontalMoves();
        getAllDiagonalMoves();
        if([... new Set(secondQueenPossibleMoves)].includes(firstQueenMove)){
            document.querySelector('#output').textContent = "Queen attacks";
        }else{
            document.querySelector('#output').textContent = "Queen can not attack";
        }
    });
    
    getAllDiagonalMoves = () => {
        getDiagonalMovesTopRight();
        getDiagonalMovesTopLeft();
        getDiagonalMovesBottomRight();
        getDiagonalMovesBottomLeft();
    }

    getAllHorizontalMoves = () => {
        getHorizontalMovesToRight();
        getHorizontalMovesToLeft();
    }

    getAllVerticalMoves = () => {
        getVerticalMovesToTop();
        getVerticalMovesToBottom();
    }

    getDiagonalMovesTopRight = ()=>{
        //the column increases while the row decreases
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;column < 9 && row > 0; column++){
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
            row--;
        }
    }

    getDiagonalMovesTopLeft = ()=>{
        //the column decreases while the row decreases
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;column >0  && row > 0; column--){
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
            row--;
        }
    }

    getDiagonalMovesBottomLeft = () => {
        //the column decreases while the row increases
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;column > 0  && row < 9; column--){
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
            row++;
        }
    }

    getDiagonalMovesBottomRight = () => {
        //the column increases while the row increases
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;column < 9  && row < 9; column++){
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
            row++;
            console.log("column :"+column);
            console.log("row :"+row);
        }

    }

    getVerticalMovesToTop = () =>{
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;row > 0; row--){
            //the row changes while moving up vertically while the column remains unchanged
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            //console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
        }
    }

    getVerticalMovesToBottom = ()=>{
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;row < 9; row++){
            //the row changes while moving down vertically while the column remains unchanged
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            //console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
        }
        //console.log(secondQueenPossibleMoves);
    }

    getHorizontalMovesToLeft = ()=>{
        //the column decreases while the row remains the unchanged
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;column > 0; column--){
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            //console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
        }
        //console.log(secondQueenPossibleMoves); 
    }

    getHorizontalMovesToRight = ()=>{
        //the column increases while the row remains the unchanged
        for( let row = secondQueenRowPosition, column = secondQueenColumnPosition;column < 9; column++){
            secondQueenPossibleMoves.push(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]').getAttribute('data-value'));
            console.log(document.querySelector('[data-column="'+column+'"][data-row="'+row+'"]'));
        }
        console.log(secondQueenPossibleMoves);
    }
}
