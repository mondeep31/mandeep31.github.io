'use strict';

// getting DOM Elements 
const navigation = document.querySelector('.nav--area');
const header = document.querySelector('.header_area');

const sections = document.querySelectorAll('.section');
const lines = document.querySelectorAll('.line');

window.addEventListener('load' , function(){
    document.querySelector('.loader-wrapper').classList.add('load--fade--out');
    
    
    // variables--------------------------------
    const navigationHeight = navigation.getBoundingClientRect().height;
    
    
    // function for sticky navigation bar 
    const stickyNav = function(entries){
        const [entry] = entries;
        if (!entry.isIntersecting) navigation.classList.add('sticky')
        else navigation.classList.remove('sticky')
    }
    
    // reveal section function 
    const revealSection = function(entries , observer){
        const [entry] = entries;
        console.log(entries);
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    }
    
    // for sticky navigation bar 
    const headerObserevr = new IntersectionObserver(
        stickyNav , 
        {
            root : null,
            threshold : 0,
            rootMargin : `-${navigationHeight}px`
        }
    );
    
    
    
    // for section fade in effect 
    const sectionObserver = new IntersectionObserver(
        revealSection , 
        {
            root : null,
            threshold : .15
        }
    )
    
    sections.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
    })
    
    headerObserevr.observe(header);
    
    // scroll to top 
    const button = document.querySelector("#back2top");
    BACK2TOP(button, 1000);
    
});
