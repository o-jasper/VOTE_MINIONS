//Note; just mucked up for now.

var date = new Date();

var spend_time  = document.getElementById("spend_time");
var button      = document.getElementById("button");
var spend_addr  = document.getElementById("spend_addr");
var power_time  = document.getElementById("power_time");
var progress    = document.getElementById("progress");
var passed      = document.getElementById("passed");

var amount_note     = document.getElementById("amount_note");
var spend_addr_note = document.getElementById("spend_addr_note");

var vote_address = "TODO";

//secretToAddress(_a):
var own_address = "TODO"; 

// NOTE: really inconvenient without good state-of-blockchain tracking.
var participated = {};

var from_time = 1000; //eth.getStorageAt(vote_address, own_address);

function power_available()  // Amount of time available to spend.
{   return date.getTime() - from_time;
}

function show_power_time()
{   
    date = new Date();
    power_time.innerHTML = power_available();
}

var old_spend_val = 0;
function spend_change()
{   
    show_power_time();
    
    if( spend_time.value < 0 )  // Reset stuff that is disallowed.
    { amount_note.innerHTML = 'Negative disallowed';
      amount_note.style = 'color:red'
      spend_time.value = old_spend_val;
      return;
    }
    if( spend_time.value > power_available() )
    { amount_note.innerHTML = 'Dont have that much';
      amount_note.style = 'color:red'
      spend_time.value = old_spend_val;
      return;
    }
    amount_note.style = 'color:#777'
    amount_note.innerHTML = '(ok)';
    old_spend_val = spend_time.value;
}

spend_time.value= old_spend_val;
show_power_time();


/*
// Will be called when transaction passes. (when entered into some block?)
function complete_spend(vote_for)
{
    return function()
    {
       amount_note.innerHTML = ''
       show_power_time();  // Update free time.
       participated[vote_for].passed = true;
       
       //TODO update the in progress entries.
    }
}*/

function do_spend_time(vote_for, amount)
{   
    if(amount < power_available())  // Have enough.
    {//eth.transact(_sec, 0, vote_address, bin(vote_for), 1000, 1, complete_spend(vote_for));
        participated[vote_for] = {'amount':amount, 'passed':false};
        update_progress();
    }
}

function spend_time_button()
{
    // TODO check:
    // * validity of address? (though suppose Ethereum might implement it)
    // * against accidental repeat?
    // * against spending limit of topic?
    if( participated[spend_addr.value] == null )
    { do_spend_time(spend_addr.value, spend_time.value); 
      spend_addr_note.innerHTML='';
    }
    else
    { spend_addr_note.innerHTML='Already voted for';
      spend_addr_note.style='color:red';
    }
}

function update_progress()
{
    progress_innerHTML = '';
    passed_innerHTML = '';
    for(var key in participated)
    {
        obj = participated[key];
        if( obj.passed )
        {    passed_innerHTML += '<tr><td>' + key + '</td><td>' + obj.amount + '</td></tr>'; }
        else
        {    progress_innerHTML += '<tr><td>' + key + '</td><td>' + obj.amount + '</td></tr>'; }
    }
    if( passed_innerHTML != '' )
    {   passed.innerHTML = '<h4>Transactions arrived</h4><table>' + passed_innerHTML + '</table>'; }
    if( progress_innerHTML != '' )
    {   progress.innerHTML = '<h4>Transactions in progress</h4><table>' + progress_innerHTML + '</table>'; }
}
