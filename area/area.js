function convert(){
    let from_choise = document.getElementById("from").value;
    let to_choise = document.getElementById("to").value;
    let from_input = document.getElementById("input_1").value;
    switch (from_choise){
        case 'smillimeter':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input/100;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input/1000000000000;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input/645.16;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input/92903.04;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input/836127.36;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/2589988110336;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input/100000000;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/4046856420;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/10000000000;
                    break;
            }
            break;

        case 'scentimeter':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*100;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input/10000;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input/10000000000;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input/6.4516;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input/929.0304;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input/8361.2736;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/25899881103.36;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/40468564.2;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/100000000;
                    break;
            }
            break;

        case 'smeter':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*1000000;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*10000;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input/1000000;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*1550.0031;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*10.7639104;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input*1.19599005;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/2589988.110336;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input/100;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/4046.85642;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/10000;
                    break;
            }
            break;

        case 'skilometer':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*1000000000000;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*10000000000;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*1000000;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*1550003100;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*10763910.4;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input*1195990.05;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/2.589988110336;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input*10000;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input*247.105381;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input*100;
                    break;
            }
            break;

        case 'sinch':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*0.00064516;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*6.4516;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*0.00064516;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input*0.00000000064516;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input/144;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input/1296;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/4014489600;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input/155000.31;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/6272640;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/15500031;
                    break;
            }
            break;
        
        case 'sfoot':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*92903.04;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*929.0304;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*0.09290304;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input/10763910.4;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*144;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input/9;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/27878400;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input/1076.39104;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/43560;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/107639.104;
                    break;
            }
            break;

        case 'syard':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*836127.36;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input/8361.2736;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*0.83612736;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input/1195990.05;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*1296;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*9;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/3097600;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input/119.599005;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/4840;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/11959.9005;
                    break;
            }
            break;

        case 'smile':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*2589988110336;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*25899881100;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*2589988.11;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input*2.58998811;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*4014489600;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*27878400;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input*3097600;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input*25899.8811;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input*640;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input*258.998811;
                    break;
            }
            break;
        
        case 'are':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*100000000;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*1000000;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*100;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input/10000;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*155000.31;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*1076.39104;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input*119.599005;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/25899.8811;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input/40.4685642;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input/100;
                    break;
            }
            break;

        case 'acre':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*4046856420;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*40468564.2;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*4046.85642;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input*0.00404685642;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*6272640;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*43560;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input*4840;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/640;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input*40.4685642;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input;
                    break;
                case 'hectare':
                    document.getElementById("input_2").value = from_input*0.404685642;
                    break;
            }
            break;

        case 'hectare':
            switch (to_choise){
                case 'smillimeter':
                    document.getElementById("input_2").value = from_input*10000000000;
                    break;
                case 'scentimeter':
                    document.getElementById("input_2").value = from_input*100000000;
                    break;
                case 'smeter':
                    document.getElementById("input_2").value = from_input*10000;
                    break;
                case 'skilometer':
                    document.getElementById("input_2").value = from_input*0.01;
                    break;
                case 'sinch':
                    document.getElementById("input_2").value = from_input*15500031;
                    break;
                case 'sfoot':
                    document.getElementById("input_2").value = from_input*107639.104;
                    break;
                case 'syard':
                    document.getElementById("input_2").value = from_input*11959.9005;
                    break;  
                case 'smile':
                    document.getElementById("input_2").value = from_input/258.998811;
                    break;
                case 'are':
                    document.getElementById("input_2").value = from_input*100;
                    break;
                case 'acre':
                    document.getElementById("input_2").value = from_input*2.47105381;
                    break;
                case 'hectare':
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
    window.location.href="../weight/weight.html";
}

function area(){
    window.location.href="area.html";
}

function base(){
    window.location.href="../base/base.html";
}