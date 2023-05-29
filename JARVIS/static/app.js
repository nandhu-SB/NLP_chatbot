class Chatbox{
    constructor(){

        this.args={

      
            chatbox:document.querySelector('.chatbox__support'),
      
            sendButton:document.querySelector('.send__button'),


        }

        this.state=false;
        this.messages=[];
    }

    display(){

        const{chatbox,sendButton}=this.args;

        // openButton.addEventListener('click',()=>this.toggleState(chatbox))

        sendButton.addEventListener('click',()=>this.onSendbutton(chatbox))

        const node = chatbox.querySelector('input');
        node.addEventListener('keydown', ({ key }) => {
        if (key === 'Enter') {
            this.onSendbutton(chatbox);
        }
        });
    }
    // toggleState(chatbox){
    //     this.state=!this.state;

    //     if(this.state){
    //         chatbox.classList.add('chatbox--active')
    //     }else{
    //         chatbox.classList.remove('chatbox--active')
    //     }
    // }

    onSendbutton(chatbox){
        var textField=chatbox.querySelector('input');
        let text1=textField.value
        if(text1===""){
            return;
        }
        let msg1={name:"You",message:text1}
        this.messages.push(msg1);


        fetch($SCRIPT_ROOT+'/predict',{
            method:'POST',
            body:JSON.stringify({message:text1}),
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(r=>r.json())
        .then(r=>{
            let msg2={name:"JARVIS",message:r.answer};
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value=''
        }).catch((error)=>{
            console.error('Error:',error);
            this.updateChatText(chatbox)
            textField.value=''
        });
    }
    updateChatText(chatbox){
        var html=''; 
        this.messages.slice().reverse().forEach(function(item,){
            if(item.name=="JARVIS"){
                html+='<div class="messages__item messages__item--visitor">'+item.message+'</div>'

            }
            else{
                html+='<div class="messages__item messages__item--operator">'+item.message+'</div>'
            }
        });
        const chatmessage=chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML=html;
    }
}



class ChatboxAnush{
    constructor(){

        this.args={


            chatbox_anush:document.querySelector('.chatbox__support_anush'),

            sendButton_anush:document.querySelector('.send__button_anush')

        }

        this.state=false;
        this.messages=[];
    }

    display(){

        const{chatbox_anush,sendButton_anush}=this.args;

        // openButton.addEventListener('click',()=>this.toggleState(chatbox))

        sendButton_anush.addEventListener('click',()=>this.onSendbuttonAnush(chatbox_anush))

        const node = chatbox_anush.querySelector('input');
        node.addEventListener('keydown', ({ key }) => {
        if (key === 'Enter') {
            this.onSendbuttonAnush(chatbox_anush);
        }
        });
    }
    // toggleState(chatbox){
    //     this.state=!this.state;

    //     if(this.state){
    //         chatbox.classList.add('chatbox--active')
    //     }else{
    //         chatbox.classList.remove('chatbox--active')
    //     }
    // }

    onSendbuttonAnush(chatbox_anush){
        var textFieldAnush=chatbox_anush.querySelector('input');
        let text3=textFieldAnush.value
        if(text3===""){
            return;
        }
        let msg3={name:"You",message2:text3}
        this.messages.push(msg3);


        fetch($SCRIPT_ROOT+'/predict2',{
            method:'POST',
            body:JSON.stringify({message2:text3}),
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(r=>r.json())
        .then(r=>{
            let msg4={name:"CYBORG",message2:r.answer};
            this.messages.push(msg4);
            this.updateChatText(chatbox_anush)
            textFieldAnush.value=''
        }).catch((error)=>{
            console.error('Error:',error);
            this.updateChatText(chatbox_anush)
            textFieldAnush.value=''
        });
    }
    updateChatText(chatbox_anush){
        var html=''; 
        this.messages.slice().reverse().forEach(function(item,){
            if(item.name=="CYBORG"){
                html+='<div class="messages__item_anush messages__item_anush--visitor">'+item.message2+'</div>'

            }
            else{
                html+='<div class="messages__item messages__item_anush--operator">'+item.message2+'</div>'
            }
        });
        const chatmessage=chatbox_anush.querySelector('.chatbox__messages_anush');
        chatmessage.innerHTML=html;
    }
}

class ChatboxTanseeha{
    constructor(){

        this.args={


            chatbox_tanseeha:document.querySelector('.chatbox__support_tanseeha'),

            sendButton_tanseeha:document.querySelector('.send__button_tanseeha')

        }

        this.state=false;
        this.messages=[];
    }

    display(){

        const{chatbox_tanseeha,sendButton_tanseeha}=this.args;

        // openButton.addEventListener('click',()=>this.toggleState(chatbox))

        sendButton_tanseeha.addEventListener('click',()=>this.onSendbuttonTanseeha(chatbox_tanseeha))

        const node = chatbox_tanseeha.querySelector('input');
        node.addEventListener('keydown', ({ key }) => {
        if (key === 'Enter') {
            this.onSendbuttonTanseeha(chatbox_tanseeha);
        }
        });
    }
    // toggleState(chatbox){
    //     this.state=!this.state;

    //     if(this.state){
    //         chatbox.classList.add('chatbox--active')
    //     }else{
    //         chatbox.classList.remove('chatbox--active')
    //     }
    // }




    onSendbuttonTanseeha(chatbox_tanseeha){
        var textFieldTanseeha=chatbox_tanseeha.querySelector('input');
        let text5=textFieldTanseeha.value
        if(text5===""){
            return;
        }
        let msg5={name:"You",message3:text5}
        this.messages.push(msg5);


        fetch($SCRIPT_ROOT+'/predict3',{
            method:'POST',
            body:JSON.stringify({message3:text5}),
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(r=>r.json())
        .then(r=>{
            let msg6={name:"SKYNET",message3:r.answer};
            this.messages.push(msg6);
            this.updateChatText(chatbox_tanseeha)
            textFieldTanseeha.value=''
        }).catch((error)=>{
            console.error('Error:',error);
            this.updateChatText(chatbox_tanseeha)
            textFieldTanseeha.value=''
        });
    }
    updateChatText(chatbox_tanseeha){
        var html=''; 
        this.messages.slice().reverse().forEach(function(item,){
            if(item.name==="SKYNET"){
                html+='<div class="messages__item_tanseeha messages__item_tanseeha--visitor">'+item.message3+'</div>'

            }
            else{
                html+='<div class="messages__item messages__item_tanseeha--operator">'+item.message3+'</div>'
            }
        });
        const chatmessage=chatbox_tanseeha.querySelector('.chatbox__messages_tanseeha');
        chatmessage.innerHTML=html;
    }
}



const chatbox=new Chatbox();
chatbox.display()
const chatboxanush=new ChatboxAnush();
chatboxanush.display()
const chatboxtanseeha=new ChatboxTanseeha();
chatboxtanseeha.display()