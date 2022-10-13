import React from "react";
//! always remember to import it, in order to use React here

export default function Block(){ //? one way to export it
    return (
        <div className="block">
            <p>
                It's a convention that components are defined in their own js file. They'll obviously need to be exported, and I can do it in two ways:<br/>
                In the function declaration, or I can add this line as the last one
            </p>
        </div>
    );
}

//? another way is this one: export default Block;