const myChar = {
    name: 'cowboy',
    state: "Idle", //Idle, Jump, Run, Slide
    stateStep: 1, //0-9
    direction: "right",
    x: 0,
    y: 0,
};

// events

document.ontouchmove = (event) => {
    event = event.touches[0];
    const { clientX, clientY } = event;
    const { clientHeight, clientWidth } = document.documentElement

    // if (myChar.state == 'Idle') return
    console.log('ontouchmove')

    if (Math.abs((myChar.x + (img.clientWidth / 2)) - clientX) < 10) return
    gameUtils.setState('Run')


    if (clientX < (myChar.x + (img.clientWidth / 2))) {
        myChar.direction = 'left'
        //left
        // if (myChar.x > 0)
        //     myChar.x -= 3.333;
    } else {
        myChar.direction = 'right'
        //right
        // if ((myChar.x + img.clientWidth) < document.documentElement.clientWidth)
        //     myChar.x += 3.333;
    }

}
document.onmousemove = (event) => {
    event.preventDefault()
    const { clientX, clientY } = event;
    const { clientHeight, clientWidth } = document.documentElement

    console.log('onmousemove')
    // if (myChar.state == 'Idle') return

    if (Math.abs((myChar.x + (img.clientWidth / 2)) - clientX) < 10) return
    gameUtils.setState('Run')


    if (clientX < (myChar.x + (img.clientWidth / 2))) {
        myChar.direction = 'left'
        //left
        // if (myChar.x > 0)
        //     myChar.x -= 3.333;
    } else {
        myChar.direction = 'right'
        //right
        // if ((myChar.x + img.clientWidth) < document.documentElement.clientWidth)
        //     myChar.x += 3.333;
    }

}

document.onclick = (event) => {
    gameUtils.setState('Jump')
}

document.onkeydown = (event) => {
    console.log(event.key)
    // if (myChar.state == 'Idle') return

    if (event.key == 'Speac' || event.key == 'w') {
        gameUtils.setState('Jump')
    }

    if (event.key == 'ArrowRight' || event.key == 'd') {
        gameUtils.setState('Run')

        myChar.direction = 'right'

        // //right
        // if ((myChar.x + img.clientWidth) < document.documentElement.clientWidth)
        //     myChar.x += 10;
    }


    if (event.key == 'ArrowLeft' || event.key == 'a') {
        gameUtils.setState('Run')

        myChar.direction = 'left'

        // //left
        // if (myChar.x > 0)
        //     myChar.x -= 10;
    }

}

const gameUtils = {
    states: ['Idle', 'Walk', 'Run', 'Jump'],
    getNextState: () => {
        const states = gameUtils.states;
        const stateIndex = states.indexOf(myChar.state) + 1
        return states[stateIndex >= states.length ? 0 : stateIndex]
    },
    getImage: () => `./Characters2D/Character-6/${myChar.state} (${myChar.stateStep}).png`,
    getSteps: () => {
        return `Dead (1).png
        Dead (10).png
        Dead (11).png
        Dead (12).png
        Dead (13).png
        Dead (14).png
        Dead (15).png
        Dead (16).png
        Dead (17).png
        Dead (18).png
        Dead (19).png
        Dead (2).png
        Dead (20).png
        Dead (21).png
        Dead (22).png
        Dead (23).png
        Dead (24).png
        Dead (25).png
        Dead (26).png
        Dead (27).png
        Dead (28).png
        Dead (29).png
        Dead (3).png
        Dead (30).png
        Dead (4).png
        Dead (5).png
        Dead (6).png
        Dead (7).png
        Dead (8).png
        Dead (9).png
        Idle (1).png
        Idle (10).png
        Idle (11).png
        Idle (12).png
        Idle (13).png
        Idle (14).png
        Idle (15).png
        Idle (16).png
        Idle (2).png
        Idle (3).png
        Idle (4).png
        Idle (5).png
        Idle (6).png
        Idle (7).png
        Idle (8).png
        Idle (9).png
        Jump (1).png
        Jump (10).png
        Jump (11).png
        Jump (12).png
        Jump (13).png
        Jump (14).png
        Jump (15).png
        Jump (16).png
        Jump (17).png
        Jump (18).png
        Jump (19).png
        Jump (2).png
        Jump (20).png
        Jump (21).png
        Jump (22).png
        Jump (23).png
        Jump (24).png
        Jump (25).png
        Jump (26).png
        Jump (27).png
        Jump (28).png
        Jump (29).png
        Jump (3).png
        Jump (30).png
        Jump (4).png
        Jump (5).png
        Jump (6).png
        Jump (7).png
        Jump (8).png
        Jump (9).png
        Run (1).png
        Run (10).png
        Run (11).png
        Run (12).png
        Run (13).png
        Run (14).png
        Run (15).png
        Run (16).png
        Run (17).png
        Run (18).png
        Run (19).png
        Run (2).png
        Run (20).png
        Run (3).png
        Run (4).png
        Run (5).png
        Run (6).png
        Run (7).png
        Run (8).png
        Run (9).png
        Walk (1).png
        Walk (10).png
        Walk (11).png
        Walk (12).png
        Walk (13).png
        Walk (14).png
        Walk (15).png
        Walk (16).png
        Walk (17).png
        Walk (18).png
        Walk (19).png
        Walk (2).png
        Walk (20).png
        Walk (3).png
        Walk (4).png
        Walk (5).png
        Walk (6).png
        Walk (7).png
        Walk (8).png
        Walk (9).png`.split('\n').map(i => i.replace('.png', '').trim())
    },
    checkStep: () => gameUtils.getSteps().includes(`${myChar.state} (${myChar.stateStep})`),
    setState: (state) => {
        //TODO
        if (state == 'Run') state = 'Walk';

        if (myChar.state == state) return
        if (myChar.state == 'Jump') return
        myChar.state = state;
        myChar.stateStep = 1
    },
    getSpeed: () => {
        return {
            Idle: 33,
            Run: 22,
            Jump: 20,
            Walk: 28,
        }[myChar.state]
    }

}

var number = 0;
var test = () => {
    setTimeout(() => {
        // requestAnimationFrame(i => {
        myChar.stateStep++

        if (myChar.state == 'Jump') {
            const y = myChar.stateStep > 15 ? (15 - myChar.stateStep % 15) : myChar.stateStep
            myChar.y = myChar.stateStep >= 30 ? 0 : y * 6.666;
        } else {
            myChar.y = 0;
        }

        if (myChar.state != 'Idle') {

            if (myChar.direction == 'right') {
                if ((myChar.x + img.clientWidth) < document.documentElement.clientWidth)
                    myChar.x += 10;
            } else {
                if (myChar.x > 0)
                    myChar.x -= 10;
            }

        } else {
            myChar.y = 0;
        }

        if (!gameUtils.checkStep()) {

            myChar.stateStep = 1;
            myChar.state = 'Idle'
            // myChar.state = gameUtils.getNextState()
        }

        test()
        // })
    }, gameUtils.getSpeed())
    // }, 33)
}
test()

var number = 0;
var runFrame = () => {
    // why no timeout?
    // setTimeout(() => {
    requestAnimationFrame(i => {
        img.src = gameUtils.getImage()
        // img.src = `./Characters2D/Character-6/${myChar.state}__00${myChar.stateStep}.png`
        img.style.transform = myChar.direction == 'left' ? 'scaleX(-1)' : ''
        img.style.translate = `${myChar.x}px -${myChar.y}px`
        runFrame()
    })
    // }, 100 / 6) //60 fps
}
runFrame()
