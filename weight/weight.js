function convert(){
    let from_choise = document.getElementById("from").value;
    let to_choise = document.getElementById("to").value;
    let from_input = document.getElementById("input_1").value;
    switch (from_choise){
        case 'mg':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input/1000;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input/907184740;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input/1000000000;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input/28349.5231;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input/453592.37;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input/6350293.18;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/1016046910;
                    break;
            }
            break;

        case 'g':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*1000;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input/1000;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input/907184.74;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input/28.3495231;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input/453.59237;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input/6350.29318;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/1016046.91;
                    break;
            }
            break;

        case 'kg':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*1000000;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input*1000;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input/907.18474;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input/1000;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input/0.0283495231;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input/0.45359237;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input/6.35029318;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/1016.04691;
                    break;
            }
            break;

        case 'Short Ton':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*907184740;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input*907184.74;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input*907.18474;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input/1.10231131;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input*32000;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input*2000;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input/0.007;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/1.12;
                    break;
            }
            break;

        case 't':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*1000000000;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input*1000000;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input*1000;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input/0.90718474;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input*35273.9619;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input*2204.62262;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input*157.473044;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/1.01604691;
                    break;
            }
            break;
        
        case 'oz':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*1000;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input/1000;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input/907184.74;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input/28.3495231;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input/453.59237;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input/6350.29318;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/1016046.91;
                    break;
            }
            break;

        case 'lb':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*453592.37;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input*453.59237;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input/0.45359237;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input/2000;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input/2204.62262;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input*16;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input/14;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/2240;
                    break;
            }
            break;

        case 'st':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*6350293.18;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input*6350.29318;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input*6.35029318;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input*0.007;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input*0.00635029318;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input*224;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input*14;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input/160;
                    break;
            }
            break;

        case 'Long Ton':
            switch (to_choise){
                case 'mg':
                    document.getElementById("input_2").value = from_input*1016046910;
                    break;
                case 'g':
                    document.getElementById("input_2").value = from_input*1016046.91;
                    break;
                case 'kg':
                    document.getElementById("input_2").value = from_input*1016.04691;
                    break;
                case 'Short Ton':
                    document.getElementById("input_2").value = from_input*1.12;
                    break;
                case 't':
                    document.getElementById("input_2").value = from_input*1.01604691;
                    break;
                case 'oz':
                    document.getElementById("input_2").value = from_input*35840;
                    break;
                case 'lb':
                    document.getElementById("input_2").value = from_input*2240;
                    break;  
                case 'st':
                    document.getElementById("input_2").value = from_input*160;
                    break;
                case 'Long Ton':
                    document.getElementById("input_2").value = from_input;
                    break;
            }
            break;
    }
}

function index(){
    window.location.href="../index.html"
}

function length(){
    window.location.href="../length/length.html";
}

function weight(){
    window.location.href="weight.html";
}

function area(){
    window.location.href="../area/area.html";
}

function base(){
    window.location.href="../base/base.html";
}