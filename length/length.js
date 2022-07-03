function convert(){
    let from_choise = document.getElementById("from").value;
    let to_choise = document.getElementById("to").value;
    let from_input = document.getElementById("input_1").value;
    switch (from_choise){
        case 'mm':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input/10;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input/1000;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input/25.4;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input/304.8;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input/914.4;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/1609344;
                    break;
            }
            break;

        case 'cm':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*10;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input/100;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input/100000;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input/2.54;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input/30.48;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input/91.44;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/160934.4;
                    break;
            }
            break;

        case 'm':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*1000;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input*100;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input/1000;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input/0.0254;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input/0.3048;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input/0.9144;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/1609.344;
                    break;
            }
            break;

        case 'km':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*1000000;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input*100000;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input*1000;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input/0.0000254;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input/0.0003048;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input/0.0009144;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/1.609344;
                    break;
            }
            break;

        case 'in':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*25.4;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input*2.54;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input*0.0254;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input*0.0000254;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input/12;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input/36;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/63360;
                    break;
            }
            break;
        
        case 'ft':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*304.8;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input*30.48;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input*0.3048;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input*0.0003048;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input*12;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input/3;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/5280;
                    break;
            }
            break;

        case 'yd':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*914.4;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input*91.44;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input*0.9144;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input*0.0009144;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input*36;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input*3;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input;
                    break;  
                case 'mi':
                    document.getElementById("input_2").value = from_input/1760;
                    break;
            }
            break;

        case 'mi':
            switch (to_choise){
                case 'mm':
                    document.getElementById("input_2").value = from_input*1609344;
                    break;
                case 'cm':
                    document.getElementById("input_2").value = from_input*160934.4;
                    break;
                case 'm':
                    document.getElementById("input_2").value = from_input*1609.344;
                    break;
                case 'km':
                    document.getElementById("input_2").value = from_input*1.609344;
                    break;
                case 'in':
                    document.getElementById("input_2").value = from_input*63360;
                    break;
                case 'ft':
                    document.getElementById("input_2").value = from_input*5280;
                    break;
                case 'yd':
                    document.getElementById("input_2").value = from_input*1760;
                    break;  
                case 'mi':
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
    window.location.href="length.html";
}

function weight(){
    window.location.href="../weight/weight.html";
}

function area(){
    window.location.href="../area/area.html";
}

function base(){
    window.location.href="../base/base.html";
}