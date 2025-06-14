
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
   _________   _____________    ______
  / ____/   | / ___/_  __/ /   / ____/
 / /   / /| | \__ \ / / / /   / __/   
/ /___/ ___ |___/ // / / /___/ /___   
\____/_/  |_/____//_/ /_____/_____/   
                                    
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
