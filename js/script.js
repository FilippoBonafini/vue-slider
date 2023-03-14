
'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue

// STRUTTURA DI VUE 
createApp({
    data() {
        return {
            activeImages: 0,
            autoRunning: true,
            slides: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
            ]
        }
    },
    methods: {
        nextImages() {
            this.activeImages++;
            if (this.activeImages > this.slides.length - 1) {
                this.activeImages = 0;
            }
        },
        prevImages() {
            this.activeImages--;
            if (this.activeImages < 0) {
                this.activeImages = this.slides.length - 1;
            }
        },
        selectImage(index) { this.activeImages = index },

        activeVerify(index) {
            if (index === this.activeImages) {
                return ('active');
            }
        },
        autoNext() {
            setInterval(() => {
                if(this.autoRunning){
                   this.nextImages(); 
                }
            }, 2000);
        },

        stopAutoRunning() {
            this.autoRunning = false
        },

        startAutoRunning(){
            this.autoRunning = true
        }
    },
    mounted() {
        this.autoNext()

    }
}).mount('#app');