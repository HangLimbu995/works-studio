window.addEventListener('DOMContentLoaded', () => {

    // here will be called all the functions
    // As 'DOMContentLoaded' make sure that all of this js code is executed after all the DOM content is loaded for html and css

    function loading() {
        const tl = gsap.timeline();
        tl.to('#yellow-box', {
            y: "-100%",
            duration: .5,
            delay: .3,
            ease: 'sine.out',
        })
        tl.to('#header-video video', {
            y: '-100%',
            duration: .5,
            delay: 0.5,
            ease: 'sine.out',
        })
        tl.to('#header-video #video-con', {
            color: 'black',
            delay: 0.5,
            ease: 'power1.out',
        })
    }
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    })

    loading()

    // FOR PROJECT EFFECTS JS

    var projects = document.querySelectorAll('.project')
    var projectArray = Array.from(projects);
    console.log('project arr is', projectArray)
    var index = 0;



    // change background img on click
    projects.forEach(project => {
        const projectAtt = project.getAttribute('data-img')
        project.addEventListener('mouseenter', () => {
            const textmove = project.querySelector('#textmove')
            textmove.style.height = '35px'
            var data = projectAtt
            projectBackgroundImg(data);
            setProjectBackground(data);
        })
        project.addEventListener('mouseleave', () => {
            const textmove = project.querySelector('#textmove')
            textmove.style.height = '0%'
        })
    })

    // change background automatically
    function setProjectBackground(data) {
        const dataIndex = projectArray.indexOf(data)
        const imgIndex = dataIndex === -1 ? index : dataIndex

        const img = projectArray[imgIndex].getAttribute('data-img')
        projectBackgroundImg(img)
        index = (imgIndex + 1) % projectArray.length;

        setTimeout(setProjectBackground, 4000);
    }
    setProjectBackground();

    // function so actually set img on background of #projects div
    function projectBackgroundImg(img) {
        var projects = document.querySelector('#projects')
        projects.style.backgroundImage = `url(${img})`;
    }
    projectBackgroundImg(projectArray[0].getAttribute('data-img'));
})