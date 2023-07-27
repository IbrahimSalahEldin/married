const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
const toastTrigger_2 = document.getElementById('liveToastBtn_2')
const toastLiveExample_2 = document.getElementById('liveToast_2')

if (toastTrigger_2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample_2)
    toastTrigger_2.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

const toastTrigger2 = document.getElementById('StackTroast')
const toastLiveStack1 = document.getElementById('liveToastStack1')
const toastLiveStack2 = document.getElementById('liveToastStack2')

if (toastTrigger2) {
    const toastBootstrap1 = bootstrap.Toast.getOrCreateInstance(toastLiveStack1)
    const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveStack2)
    toastTrigger2.addEventListener('click', () => {
        toastBootstrap1.show();
        toastBootstrap2.show();
    })
}


