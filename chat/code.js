const daniSelectorBtn = document.querySelector('#dani-selector');
const lenSelectorBtn = document.querySelector('#len-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button'); 

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
<div class="message ${message.sender === 'Dani' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
</div>
`
window.onload = () => {
    messages.forEach((message) => {
        chatMessages.innerHTML += createChatMessageElement(message)
    })
}

let messageSender = 'Dani';

const updateMessageSender = (name) =>{
    messageSender = name
    chatHeader.innerText = `${messageSender} está escribiendo...`
    chatInput.placeholder = `Escribe aquí, ${messageSender}...`

    if(name === 'Dani'){
        daniSelectorBtn.classList.add('active-person')
        lenSelectorBtn.classList.remove('active-person')
    }

    if(name === 'Len'){
        lenSelectorBtn.classList.add('active-person')
        daniSelectorBtn.classList.remove('active-person')
    }

    chatInput.focus()
}

daniSelectorBtn.onclick = () => updateMessageSender('Dani');
lenSelectorBtn.onclick = () => updateMessageSender('Len');

const sendMessage = (e) =>{
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    }

    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(message))
    chatMessages.innerHTML += createChatMessageElement(message);
    chatInputForm.reset();
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatInputForm.addEventListener('submit', sendMessage);

clearChatBtn.addEventListener('click', () => {
    localStorage.clear();
    chatMessages.innerHTML = '';
})