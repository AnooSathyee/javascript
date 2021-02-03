/*
    Do the following steps in this file, and make sure this file is linked to the shopping-list.html file   

    1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.   
    
    2. Create a function that will run in response to the button being clicked.    
    
    3. Inside the function body, start off by storing the current value of the input element in a variable.   
    
    4. Next, empty the input element by setting its value to an empty string — ''.    
    
    5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.     
    
    6. Append the span and the button as children of the list item.    
    
    7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.    
    
    8. Append the list item as a child of the list.    
    
    9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.    
    
    10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    */
  //1
  let ul = document.querySelector("ul");
  let input = document.querySelector("input");
  let button_a = document.querySelector("button");

  // 2
  button_a.onclick = function () {
  // 3
  let inputVal = input.value;

  //4
  input.value = '';

  //5
  let liItem = document.createElement("li");
  let span = document.createElement("span");
  let button_b = document.createElement("button");

  //6
  liItem.appendChild(span);//, button_b);
  liItem.appendChild(button_b);

  //7
  span.textContent = inputVal;
  button_b.textContent = "Delete";

  //8
  ul.appendChild(liItem);

  //9
  button_b.onclick = function () {
    ul.removeChild(liItem);
  };
};
  //10
  input.focus();

