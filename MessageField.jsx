import React from 'react';
import Message from './Message.jsx';

const botAnswers = ['Отстань, я робот', 'Кто такая Сири?', 'Поговорите лучше с Алисой!', 'Тебе конец кожаный мешок!']

function randomChoise(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет", sender: 'bot' }, { text: "Как дела?", sender: 'bit' }]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() => this.setState({ 'messages': [...this.state.messages, { text: randomChoise(botAnswers), sender: 'bot' }] }), 1000)
        }
    }

    handleSendMessage = () => {
        const { messages } = this.state;
        this.setState({ 'messages': [...messages, { text: "Нормально", sender: 'me' }]});
    };

    render() {
        const { messages } = this.state;

        const messageElements = messages.map(message => <Message key={ message.text } text={ message.text } />);

        return (
            <div>
                <h1>Чат</h1>
                { messageElements }
                <button onClick={ this.handleSendMessage }>Отправить сообщение</button>
            </div>
        )
    }
}