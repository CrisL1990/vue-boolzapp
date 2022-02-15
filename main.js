const root = new Vue({
    
    el: "#root",

    data:{
        
        active: "",
        imgName: "img/avatar_1.jpg",
        contactName: "Michele",
        
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
            this.imgName = "img/avatar" + this.contacts[index].avatar + ".jpg";
            this.contactName = this.contacts[index].name;

            let msgsList = [];

            for(let i = 0; i < this.contacts[index].messages.length; i ++){
                msgsList.push(this.contacts[index].messages[1].text);
            }
            console.log(msgsList);
            return msgsList;   
        },

        msgsViewer: function(){
            this.active = "";

            if(this.active == ""){
                this.active = "active";
            }
           
            console.log(this.active);
            return this.active;
        }
    }
})

