function passCompare(passwordOne, passwordTwo) 
{
    if(passwordOne == passwordTwo)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkLogin(login, passOne, passTwo)
{
    //This is the function that is initiated when the Submit button on the HTML form is clicked.

    //"good" determines if everything that the user put in is okay; if it's good, ya see? Each number
    //represents a different problem (or group of problems).
    let good = -1;

    if(login.length == 0)
    {
        good = 0;
    }
    if(passOne.length == 0)
    {
        good = 1;
    }
    else
    {
        if(passTwo.length == 0)
        {
            good = 2;
        }
        else
        {
            if(passCompare(passOne, passTwo))
            {
                if(!passScan(passOne) || passOne == login)
                {
                    good = 4;
                }
            }
            else
            {
                good = 3;
            }
        }
    }
    
    let list = document.getElementById("errList");
    list.innerHTML = "";

    if(good != -1)
    {
        let doc = document.createElement("li");
        let message;

        if(good == 0)
        {
            message = "You need to insert a username.";
        }
        else if(good == 1)
        {
            message = "You need to insert a password.";
        }
        else if(good == 2)
        {
            message = "Please confirm your password.";
        }
        else if(good == 3)
        {
            message = "Your password and confirmation did not match.";
        }
        else if(good == 4)
        {
            message = "Your password did not meet the needed requirements (at least 8 characters, but no longer than 30 characters, at least one number, and it can't be your username.)";
        }
        let node = document.createTextNode(message);
        doc.appendChild(node);

        
        list.appendChild(doc);
    }

}

function passScan(password)
{
    let num = false;
    if(password.length > 0)
    {
        if(password.length >= 8 && password.length <= 30)
        {
            for(i=0; i <= (password.length - 1); i++)
            {
                let ifNum = parseInt(password.charAt(i));
                if(Number.isInteger(ifNum))
                {
                    num = true;
                    break;
                }
            }
        }
        
        
    }
    return num;
}

