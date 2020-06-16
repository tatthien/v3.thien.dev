'use strict';

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const writeText = async (text) => {
    const $command = document.querySelector('.terminal .command')
    for (let i = 0; i < text.length; i++) {
        await sleep(100)
        $command.textContent = text.substring(0, i + 1)
    }
}

const eraseText = async () => {
    const $command = document.querySelector('.terminal .command')
    while($command.textContent.length) {
        await sleep(100)
        $command.textContent = $command.textContent.substring(0, $command.textContent.length - 2)
    }
}

const startTerminal = async () => {
    const $text = document.querySelectorAll('.terminal .hidden')
    await sleep(2000)

    let i = 0;
    for (const $elm of $text) {
        const str = $elm.textContent
        writeText(str)
        await sleep(2000)
        if (i < $text.length - 1) {
            eraseText()
            await sleep(2000)
        }
        i++
    }
}

startTerminal()