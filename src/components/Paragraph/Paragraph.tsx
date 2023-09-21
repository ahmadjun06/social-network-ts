import React from "react";

type ParagraphProps ={
    text :string
}

export const Paragraph = ({text} : ParagraphProps)=>{
    return(
        <p className="password-paragraph">{text}</p>
    )
}