import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
        <SyntaxHighlighter
            language={match[1]}
            style={monokaiSublime}
            children={String(children).replace(/\n$/, '')}
            PreTag="div"
            customStyle={{
                background: 'transparent',
                padding: 0, 
                justifyContent:'center', 
                display:'flex'
            }}
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
};

export default CodeBlock;