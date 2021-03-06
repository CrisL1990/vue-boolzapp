const root = new Vue({
    
    el: "#root",

    data:{
        
        active: "",
        imgName: "img/avatar_1.jpg",
        indice: 0,
        newMsg: "",
        search: "",
        myList: [],
        contacts: [

            {
                name: "Michele",
                avatar: '_1',
                visible: true,
                messages:[

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai fatto la spesa?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai fatto la spesa?',
                        status: 'sent'
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
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai tagliato la legna?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai tagliato la legna?',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai preso la pasta?',
                        status: 'received'
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

        sendMessage: function(i){
            let newObject = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMsg,
                status: 'sent'
            };
            if(newObject.text != ""){
                this.contacts[i].messages.push(newObject);
                setTimeout(this.answer, 1000);
            }

            this.newMsg = "";
        },

        answer: function(){
            let newObject = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: "Ok",
                status: 'received'
            };
            this.contacts[this.indice].messages.push(newObject);
        },
        
        
        doSearch: function(){
            
            for(let i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())){
                    this.contacts[i].visible = true;
                }
                else{
                    this.contacts[i].visible = false;
                }
            }
        }   
    
        
    }
})

