const root = new Vue({
    
    el: "#root",

    data:{
        
        active: "",
        imgName: "img/avatar_1.jpg",
        indice: 0,
        newMsg: "",
        answer: "",
        contacts: [

            {
                name: "Michele",
                avatar: '_1',
                visible: true,
                messages:[

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        statue: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        statue: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        statue: 'received'
                    }
                ],
                
            },
            
            {
                name: "Fabio",
                avatar: '_2',
                visible: true,
                messages:[

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai fatto la spesa?',
                        statue: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai fatto la spesa?',
                        statue: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai fatto la spesa?',
                        statue: 'sent'
                    }
                ],
                
            },

            {
                name: "Samuele",
                avatar: '_3',
                visible: true,
                messages:[

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai tagliato la legna?',
                        statue: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai tagliato la legna?',
                        statue: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai tagliato la legna?',
                        statue: 'received'
                    }
                ],
                
            },

            {
                name: "Luisa",
                avatar: '_4',
                visible: true,
                messages:[

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai preso la pasta?',
                        statue: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai preso la pasta?',
                        statue: 'received'
                    },

                ],
                
            }
        ]
    },

    methods:{
        
        selectConversation: function(index){
            this.indice = index;
            this.imgName = "img/avatar" + this.contacts[index].avatar + ".jpg";    
        },

        msgsViewer: function(){
            this.active = "";
            if(this.active == ""){
                this.active = "active";
            }
            return this.active;
        },

        sendMessage: function(){

           

            let newObject = {
                date: '10/01/2020 15:30:55',
                text: this.newMsg,
                statue: 'received'
            }

            this.contacts[this.indice].messages.push(newObject);
            
            let that = this;
            setTimeout(function(){
                that.answer = "Ok";
            }, 1000)
            
        },

    }
})


