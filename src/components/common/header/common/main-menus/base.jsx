import { Component } from 'react';

export default class BaseMenu extends Component {

    componentDidMount() {
        document.querySelector(".megamenu-container .sf-with-ul").addEventListener("mouseover", function(e){
            let demoItems = document.querySelectorAll('.demo-item.show');
            for( let i = 0 ; i < demoItems.length ; i ++ ) {
                demoItems[i].classList.toggle('show');
            }
            document.querySelector('.view-all-demos').classList.remove('disabled-hidden');
        });

        this.initNav();
    }
    
    showAllDemos(e) {
        let demoItems = document.querySelectorAll('.demo-item.hidden');

        for( let i = 0 ; i < demoItems.length ; i ++ ) {
            demoItems[i].classList.toggle('show');
        }
        
        document.querySelector('.view-all-demos').classList.toggle('disabled-hidden');
        e.preventDefault();
    }

    activeNav(e) {
        let items = e.currentTarget.querySelectorAll(".active");
        for( let i = 0 ; i < items.length ; i ++ )
            items[i].classList.remove("active");

        let current = e.target;
        
        while( !current.classList.contains("menu") ) {
            if ( "li" === current.localName )
                current.classList.add("active");
            current = current.parentNode;
        }
    }
    
    initNav() {
        let items = document.querySelectorAll(".main-nav .active");
        for( let i = 0 ; i < items.length ; i ++ )
            items[i].classList.remove("active");

        items = document.querySelectorAll(".main-nav a");
        
        let current;

        for( let i = 0 ; i < items.length ; i ++ ) {
            if ( items[i].href === document.URL )
                current = items[i];
        }
        
        if ( current )
            while( current && !current.classList.contains("main-nav") ) {
                if ( "li" === current.localName || current.classList.contains("demo-item") )
                    current.classList.add("active");
                current = current.parentNode;
            }
    }    
}