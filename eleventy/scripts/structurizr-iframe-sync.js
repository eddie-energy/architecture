function receiveStructurizrMessage(message) {
    if (message?.data?.view)
        console.log("diagram navigated", { "new-diagram-key": message.data.view })
}

window.addEventListener("message", receiveStructurizrMessage);