Web Form
===========================================================================================================================================================

1.) First Form
Objective:	To gain familiarity with what web forms are, what they are used for, how to think about deisnging them, and the basic HTML elemetns you will need for simple cases.

What are web forms?
    Web forms are one of the main points of interaction between a user and a website or application, made up of one or more form controls (sometimes called widgets), plus some
        additional elemetns to help structure the overall form -- often reffered to as HTML forms.

Designing your form
    From a user expereience (UX) point of view, it's important to remember that the bigger your form, the more you risk frustratying people and losing users.
        Kepp it simple and stay focused: ask only for the data you absolutely need.
    
    Designing form is an important step when you are building a site or application.


2.) How to structure a web form
Objective: To understand how to structure HTML forms and give them semantics so thney are usable and accessible.
    Using the correct structure when building an HTML form will help ensure that the form is both usable and accessible.


3.) Basic native form controls
Objective: To understand the original set of native form widgets avaiable in browsers for collecting data, and how to implement them using HTML

Text input fields
    Single line text fields
    Checkbox
    Radio button
    Actual buttons
    ...
    File picker


4.) The HTML5 input types
Obj: To understand the newer input type values available to create native form controls, and how to implement them using HTML.

Email address field
Search field
Phone number field
URL field
Slider controls
Date and time pickers
    month
    time
    week

Color picker control

5.) Other form controls
obj: To understand the non-<input> form features and how to implement them using HTML.

Multi-line text fields
    Controlling multi-line rendering
        textarea
        cols
        rows
        wrap

    Controlling textarea resizability
        both 
        horizontal 
        vertical
        non
        block and inline

    Drop-down controls
        Using optgroup
        Using the value attribute

    Multiple choice select box

Autocomplete box
Datalist support and fallbacks

Meters and progress bars

7.) Styling web forms
obj: to understand the issues behind styling forms, and learn some of the basic styling techniques that will be useful to you.

Challenges in styling form widgets

    Even with CSS available, browser vendors were reluctant at first to make form elements stylable, because users were so accustomed to the looks of their respective browsers. But things have changed, and forms widgets are now mostly stylable, with a few exceptions.

    Types of widgets
        Easy-to-style
            form, 
            fieldset and legend, 
            single-line text <input>
            Multiline textarea
            button
            label
            output

        Harder-to-style
            checkboxes and radio buttons
            <input type="search">
        
        Advanced form styling
    
    Having internals can't be styled in CSS alone
        <input type="color">
        Date-related controls such as <input type="datetime-local">
        <input type="range">
        <input type="file">
        Elements involved in creating dropdown widgets, including <select>, <option>, <optgroup> and <datalist>.
        <progress> and <meter>
    
    Styling simple form widgets
        Fonts and text
        Box sizing
        Legend placement

    A specific styling example


8.) Advanced Form Styling
Obj: To understand what parts of forms are hard to style, and why; to learn what can be done to customize them.

appearance: controlling OS-level styling
What can be done about the "ugly" elements?


9.) UI pseudo-classes
Obj: To understand what parts of forms are hard to style., and why;
     To learn what can be done to customize them.

What pseudo-classes do we have avaiable?
    * :hover
    * :focus
    * :active
    * :required
    * :valid
    * :enabled
    * :checked    


10.) Client-side form validation
Before submitting data to the server, it is important to ensure all required form control are filled out, in the correct format, this is called client-side form validation, and helps  ensure data submitted matches the requirements set forth in the various form controls.

Obj: To understand what client-side form validation is, why it's important, and how to apply various techniques to implement it.

    What is form validation?
    Different types of client-side validation
        * Built-in form validation uses HTML  form validdation features (has better perf than JS but not very customizable)
        * JS validation is coded using JS; completely customizable but you need ot creat it all (or use a library)

    Using built-in form validation.
        * required
        * minlength
        * min / max
        * type
        * pattern
        * :invalid  /  :valid
        
    Validating against a regular expression
        a — Matches one character that is a (not b, not aa, and so on).
        abc — Matches a, followed by b, followed by c.
        ab?c — Matches a, optionally followed by a single b, followed by c. (ac or abc)
        ab*c — Matches a, optionally followed by any number of bs, followed by c. (ac, abc, abbbbbc, and so on).
        a|b — Matches one character that is a or b.
        abc|xyz — Matches exactly abc or exactly xyz (but not abcxyz or a or y, and so on).

    Validating forms using JavaScript
        The Constraint Validation API
            HTMLButtonElement (represents a <button> element)
            HTMLFieldSetElement (represents a <fieldset> element)
            HTMLInputElement (represents an <input> element)
            HTMLOutputElement (represents an <output> element)
            HTMLSelectElement (represents a <select> element)
            HTMLTextAreaElement (represents a <textarea> element)
        Implementing a customized error message


11.) Sending form data

Once the form data has been validated on the client-side, it is okay to submit the form.

Obj:    To understand what happens when form data is submitted, including getting a basic idea of how data is processed on the server.

Client/Server Architecture

At its most basic, the web uses a client/server architecture that can be summarized as follows: a client (usually a web browser) sends a request to a server (most of the time a web server like Apache, Nginx, IIS, Tomcat, etc.), using the HTTP protocol. The server answers the request using the same protocol.

    On the client side: defining how to send the data
        The <form> element defines how the data will be sent. All of its attributes are designed to let you configure the request to be sent when a user hits a submit button.

        The action attribute
        The method attribute
        The GET method  
        

12.)