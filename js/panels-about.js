function display_panels()
    {

        var group = document.getElementById("group-panels");

        var button0 = document.getElementById("button-big");
        var panel0 = document.getElementById("panel0-block0");
        
        var button02 = document.getElementById("button-big2");
        var panel02 = document.getElementById("panel1-block0");

        var button1 = document.getElementById("panel1");
        var panel1 = document.getElementById("panel1-block1");

        // var button2 = document.getElementById("panel2");
        // var panel2 = document.getElementById("panel2-block1");

        var button3 = document.getElementById("panel3");
        var panel3 = document.getElementById("panel1-block2");

        // var button4 = document.getElementById("panel4");
        // var panel4 = document.getElementById("panel2-block2");

        // if(button0.checked || button02.checked || button1.checked || button3.checked){
        //     group.style.height = "1000px";
        // }

        if(button0.checked)
        {
            panel0.classList.remove('panels-hidden');
        }        
        else{
            panel0.classList.add('panels-hidden');
        }

        if(button02.checked)
        {
            panel02.classList.remove('panels-hidden');
        }        
        else{
            panel02.classList.add('panels-hidden');
        }

        if(button1.checked)
        {
            panel1.classList.remove('panels-hidden');
        }        
        else{
            panel1.classList.add('panels-hidden');
        }

        // if(button2.checked)
        // {
        //     panel2.classList.remove('panels-hidden');
        // }        
        // else{
        //     panel2.classList.add('panels-hidden');
        // }

        if(button3.checked)
        {
            panel3.classList.remove('panels-hidden');
        }        
        else{
            panel3.classList.add('panels-hidden');
        }

        // if(button4.checked)
        // {
        //     panel4.classList.remove('panels-hidden');
        // }        
        // else{
        //     panel4.classList.add('panels-hidden');
        // }
    }
    