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
                date: '10/01/2020 15:30:55',
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
                date: '10/01/2020 15:30:55',
                text: "Ok",
                status: 'received'
            };
            this.contacts[this.indice].messages.push(newObject);
        },
        
        
        doSearch: function(){
            let name = "";
            this.search.toLocaleLowerCase();
            let lettereUguali = [];
           
            for(let i = 0; i < this.contacts.length; i++){

                name = this.contacts[i].name;
                let lowerName = name.toLocaleLowerCase()
                let lowerSearch = this.search.toLocaleLowerCase()
          

                for(let letter = 0; letter < lowerName.length; letter++){
                    if(lowerName[letter] == lowerSearch){
                        lettereUguali.push(lowerName[letter]);
                    }

                }

                if(lettereUguali.length == 0){
                    this.contacts[i].visible = false;
                };
                lettereUguali = []; 
             
            }
        }   
    
        
    }
})

