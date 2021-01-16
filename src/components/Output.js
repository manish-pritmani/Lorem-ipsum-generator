import React from 'react';
//Below code is just this const Output = ({paragraphs,includeHtml,tag}) => {}

const Output = (props) => {
//Param are coming from App and we are working on it here.
    const {paragraphs,includeHtml,tag} = props;
    return (
        <div className="output">
            {includeHtml === "Yes" ? (
                <p>{paragraphs.map(sentence => "<"+tag+"/>"+sentence+"</"+tag+">")}</p>
            ):
            (
                <p>{paragraphs.map(sentence => sentence)}</p>
            )}
        </div>
    )
}

export default Output;