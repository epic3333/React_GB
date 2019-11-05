import React from 'react';
import ReactDOM from 'react-dom';
import App from './MessageField.jsx';

/* const element = React.createElement(
    'h1',
    { className: 'element' },
    "Кажется, работает React",
); */

/* const messages = ['Hi!@@', 'how are you'];

const Message = (props) => <div className="message">{ props.text }</div>

const sendMessage = () => {
    messages.push('Okay');
    ReactDOM.render(
        <MessageField messages={ messages } />,
        document.getElementById('root'));
};

const MessageField = (props) => <div>
    <h1>Чат</h1>
    { props.messages.map(message => <Message text={ message } />) }
    <button onClick={ sendMessage }>Send</button>
</div>; */

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);