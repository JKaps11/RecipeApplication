import React,{ ReactNode} from 'react';
import '../styling/textbubble.css';

interface TextBubbleProps {
    children: ReactNode;
}

const TextBubble: React.FC<TextBubbleProps> = (props) => {
    return (
        <div id='textbubble'>
            {props.children}
        </div>
    );
};

export default TextBubble;