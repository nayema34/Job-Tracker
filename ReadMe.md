1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :

getElementById()
This method selects one element using its ID. Since an ID should be unique in a webpage, it always returns only one element.

getElementsByClassName()
This method selects all elements that share the same class name. It returns an HTMLCollection (which looks like an array). Because it may return multiple elements, we usually use a loop to work with them.

querySelector()
This method is more flexible. It allows us to use any CSS selector (like id, class, tag, etc.). However, it only returns the first element that matches the selector.

querySelectorAll()
This also uses CSS selectors, but it returns all matching elements. It gives a NodeList, which we can easily loop through.

2. How to create and insert a new element into the DOM ?

Answer :

To create and insert a new element, we follow three simple steps:

First, create the element using document.createElement().
Example: create a paragraph element.

Second, add content to the element using textContent (or innerText).

Third, insert the element into the page using appendChild() (or similar methods) on a parent element.

So basically:
Create → Add content → Insert into the page.

3. What is Event Bubbling?

Answer :

Event Bubbling is the process where an event starts from the target element and then moves upward to its parent elements.

For example, if we click a button inside a div:

The click event happens on the button first.

Then it moves to the parent div.

Then it continues to higher parent elements.

It keeps going up until it reaches the document.

So, the event “bubbles up” through the DOM unless we stop it.

4. What is Event Delegation? Why is it useful?

Answer :

Event Delegation is a technique where we add one event listener to a parent element instead of adding separate listeners to many child elements.

When a child element is clicked, the event bubbles up to the parent. Inside the parent’s event listener, we check which child triggered the event.

Why it is useful:

1..It improves performance (fewer event listeners).
2..It works for dynamically added elements.
3..It keeps the code cleaner and more organized.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer :

preventDefault()
This method stops the browser’s default behavior for an event.

Example:

1..Clicking a link normally opens a new page.
2..Submitting a form normally reloads the page.
3..Using preventDefault() stops these default actions.

stopPropagation()
This method stops the event from moving up (bubbling) or down (capturing) the DOM tree.

Example:

1..A button is inside a div.
2..Both have click event handlers.
3..Normally, clicking the button triggers both handlers.
4..If we use stopPropagation() on the button, the div’s handler will not run.
